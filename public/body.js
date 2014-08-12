/*//BODY


$(function() {
    var User = Backbone.Model.extend({
        schema: {
            title:      { type: 'Select', options: ['', 'Mr', 'Mrs', 'Ms'] },
            name:       'Text',
            email:      { validators: ['required', 'email'] },
            birthday:   'Date',
            password:   'Password',
            notes:      { type: 'List', itemType: 'Text' }
        }
    });
    
    var user = new User({
        title: 'Mr',
        name: 'Sterling Archer',
        email: 'sterling@isis.com',
        birthday: new Date(1978, 6, 12),
        password: 'dangerzone',
        notes: [
            'Buy new turtleneck',
            'Call Woodhouse',
            'Buy booze'
        ]
    });
    
    var form = new Backbone.Form({
        model: user
    }).render();
    

});


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
    });*/



    Backbone.Form.editors.List.Modal.ModalAdapter = Backbone.BootstrapModal;

    //Main model definition
    var User = Backbone.Model.extend({
        schema: {
            location:      { validators: ['required', 'Text'] },
           
        }
    });
    
    var user = new User({
        location: 'Enter Location'
    });
    
    //The form
    var form = new Backbone.Form({
        model: user
    }).render();



jQuery("#reportbtn").on("click", function(e) {
    bootbox.confirm(form.el, function(result) {
        if(result)
        address = $("#c1_location").val();
        //$('#infos').submit();
        codeAddress(address)
});
    });
