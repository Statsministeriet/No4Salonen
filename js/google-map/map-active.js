var map;
var latlng = new google.maps.LatLng(55.686547, 12.561565);
var stylez = [{
    featureType: "all",
    elementType: "all",
    stylers: [{
        saturation: -100
            }]
        }];
var mapOptions = {
    zoom: 12,
    center: latlng,
    scrollwheel: false,
    scaleControl: false,
    disableDefaultUI: true,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'gMap']
    }
};
map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

var mapType = new google.maps.StyledMapType(stylez, {
    name: "Grayscale"
});

var marker = new google.maps.Marker({
    position: new google.maps.LatLng(55.686547, 12.561565),
    title: "Kaffesalonen"
});
marker.setMap(map);

map.mapTypes.set('gMap', mapType);
map.setMapTypeId('gMap');