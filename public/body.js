/*//BODY//


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
            date: 'Date',
            time: {type: 'Select', options: ['', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12am', '1am', '2am', '3am', '4am', '5am', '6am']},
            location:      { validators: ['required', 'Text'] },
            incident: {type: 'Select', options: ['', 'verbal harassment', 'groping', 'stalking', 'physical assault', 'rape']},
            Height:      { type: 'Select', options: ['', '<5ft', '5ft - 5ft4', '5ft5 - 5ft7', '5ft7-5ft9', '5ft10 - 6ft', '6ft1 - 6ft3', '>6ft'] },
            Weight:  { type: 'Select', options: ['', 'slender', 'average', 'muscular', 'heavyset'] },
            EyeColor:  { type: 'Select', options: ['', 'blue', 'brown', 'green', 'hazel'] },
            HairColor: {type:'Select', options:['', 'light brown', 'dark brown', 'black', 'red', 'blonde', 'dirty blonde', 'other']},
            Complexion: {type:'Select', options: ['', 'pale white', 'medium white to olive', 'olive to light brown', 'brown', 'very dark brown']},
            Gender: { type: 'Select', options: ['', 'Male', 'Female', 'Other'] },
            UniqueFeatures: 'Text',
            Relationship: {type:'Select', options: ['', 'stranger', 'aquaintance', 'significant other', 'intimate partner', 'friend', 'relative']},
            Occurences: {type: 'Select', options: ['', 'once', 'several times', 'regularly']},
            email: { validators: ['required', 'email'] }

            
             
        }
    });
    
    var user = new User({
            date: new Date(),
            time: '',
            location: '',
            incident: '',
            Height:   '',
            Weight:  '',
            EyeColor:  '',
            HairColor: '',
            Complexion: '',
            Gender: '',
            UniqueFeatures: '',
            Relationship: '',
            Occurences: '',
            email: '',

        
    });
    
    //The form
    var form = new Backbone.Form({
        model: user
    }).render();



jQuery("#reportbtn").on("click", function(e) {
    bootbox.confirm(form.el, function(result) {
        if(result)
        address = $("#c1_location").val();
        date = $("#c1_date").val();
        //$('#infos').submit();
        codeAddress(address)
});
    });
