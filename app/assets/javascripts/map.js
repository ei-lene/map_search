$(document).ready(function(){
      function initialize() {
        var myCenter = new google.maps.LatLng(-34.397, 150.644);
        var mapOptions = {
          center: myCenter,
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        var marker = new google.maps.Marker({
            position: myCenter,
            map: map,
            icon: '/assets/marker_blue.png',
            title:"Hello World!"
        });

        var contentString = "Aloha aloha aloha" ;

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        }); // needs to be within function initialize()

      } // end function .initialize

      google.maps.event.addDomListener(window, 'load', initialize);

}); // end document ready