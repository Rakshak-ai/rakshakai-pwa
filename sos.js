// sos.js
document.getElementById("btn-sos").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("SOS sent to saved contacts!");
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
      alert("SOS Sent Successfully!\nLatitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude);
    });
  } else {
    alert("Geolocation not supported.");
  }
});
