//BODY


$(document).on("click", ".alert3", function(e) {
bootbox.confirm("<form id='infos' action=''>\
    First name:<input type='text' name='first_name'></input><br/>\
    Last name:<input type='text' name='last_name'></input><br/><br/>\
    Time: <input type='datetime' name='datetime'></input><br/>\
    Location:<input type='text' id='location' name='geocode'></input>\
    </form>", function(result) {
    if(result)
        //$('#infos').submit();
        codeAddress()
});
    });

