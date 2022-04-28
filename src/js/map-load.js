function initMap() {
    var pos = {lat: 41.84829886774624, lng: -87.63345489583536};
    var opt = {
      center: pos,
      zoom: 3,
    };
    
    var myMap = new google.maps.Map(document.getElementById("map"), opt);
    
    var marker = new google.maps.Marker({
      position: pos,
      map: myMap,
      title: "CAFE",
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });
    var marker = new google.maps.Marker({
      position: {lat: 34.014359653404, lng:-118.06203024459737},
      map: myMap,
      title: "FOODTRACK",
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });
    var marker = new google.maps.Marker({
      position: {lat: 40.761270046447486, lng: -73.99468891744868},
      map: myMap,
      title: "CAFE",
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    }); 
}

  window.initMap = initMap;
