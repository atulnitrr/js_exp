navigator.geolocation.getCurrentPosition((event) => {
  console.log(event);
  console.log(event.coords.latitude);
  console.log(event.coords.longitude);
  console.log(event.coords.speed);
});

// var id = navigator.geolocation.watchPosition((even) => {
//   console.log(even);
// });

// console.log("idd " + id);
