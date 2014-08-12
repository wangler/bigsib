//HEAD


$(document).on("click", ".alert", function(e) {
    bootbox.alert("Hello world!", function() {
                console.log("Alert Callback");
            });
        });

var map;
var nyc = new google.maps.LatLng(40.7619, -73.9501);
var marker;
var geocoder;

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [
    {
      stylers: [
        { hue: '#ffcc33' },
        { visibility: 'simplified' },
        { gamma: 0.5 },
        { weight: 0.5 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'water',
      stylers: [
        { color: '#cc9900' }
      ]
    }
  ];

  var mapOptions = {
    zoom: 14,
    center: nyc,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };
  geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);


// TOGGLE BOUNCE
  //google.maps.event.addListener(marker, 'click', toggleBounce);


//CUSTOMIZING MAP
  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts);
  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);



}


google.maps.event.addDomListener(window, 'load', initialize);

//Geocoding
function codeAddress() {
  var address = document.getElementById('location').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
      var contentString = document.getElementById('location').value;

    	var infowindow = new google.maps.InfoWindow({
     	 content: contentString,
      	maxWidth: 200
      	});
	//INFO WINDOW
       google.maps.event.addListener(marker, 'click', function() {
    	infowindow.open(map,marker);
 		 });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
