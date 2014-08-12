import os, optparse, uuid, urlparse, time, tornado
import tornado.httpserver
import tornado.websocket
import tornado.ioloop
import tornado.web
from tornado.web import (RequestHandler, StaticFileHandler, Application,asynchronous)
from tornado.websocket import WebSocketHandler
from tornado.httpclient import AsyncHTTPClient

HTTP_CLIENT = AsyncHTTPClient()

# GET USER OPTIONS
def parse_cmdln():
    parser=optparse.OptionParser()
    parser.add_option('-p','--port',dest='port',type='int', default=5000) #OPTION TO CHANGE HOST SERVER PORT
    (options, args) = parser.parse_args()
    return (options, args)
 
#CREATES HOST SESSION AND LOGS USER IP INFO

class IndexHandler(StaticFileHandler):
    def get(self):
        return super(IndexHandler, self).get('index.html')
 
 
application = tornado.web.Application([
        (r'/', IndexHandler, {'path': 'public'}), 
        (r'/(.*)', StaticFileHandler, {'path': 'public/'})
        ], debug=True)
 
#-----------------------------------------------------------------------------
# MAIN
#-----------------------------------------------------------------------------
if __name__ == "__main__":
    (options,args)=parse_cmdln()
    port = int(os.environ.get('PORT', options.port))
    application.listen(port)
    print "Your app is starting on port %s" % options.port
    tornado.ioloop.IOLoop.instance().start()