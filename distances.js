function initialize(coordinates) {

    var travel = [];
    jQuery.each(coordinates, function(i, val){
      travel.push(new google.maps.LatLng(parseFloat(coordinates[i].split('	')[0]), parseFloat(coordinates[i].split('	')[1])))
    });
    /*  var flightPlanCoordinates = [
    new google.maps.LatLng(37.772323, -122.214897),
    new google.maps.LatLng(21.291982, -157.821856),
    new google.maps.LatLng(-18.142599, 178.431),
    new google.maps.LatLng(-27.46758, 153.027892)]; */

    var distanceTotal = 0;

    for (var i = 0; i < travel.length - 1; i++) {
        distanceTotal += google.maps.geometry.spherical.computeDistanceBetween(travel[i], travel[i+1]) / 1000;
    }
    $('#lblResult').text("Distance traveled is " + distanceTotal + " kilometers. ");
}


function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function calculateDistance(){
  text = $('#txtCoordinates').val();
  text = replaceAll(text, ',','.')
  text = text.replace(/\n|\r/g, " ")
  var coordinates = text.split(" ")
  coordinates.splice( $.inArray("", coordinates))
  initialize(coordinates);
};
