// sos.js
import { db } from "./firebase-config.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

document.getElementById("btn-sos").addEventListener("click", async () => {
  if (!navigator.geolocation) return alert("Geolocation not supported");

  navigator.geolocation.getCurrentPosition(async (pos) => {
    const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
    alert("SOS Sent! Latitude: " + coords.lat + " Longitude: " + coords.lng);

    // Save SOS log to Firestore
    try {
      await addDoc(collection(db, "sos_logs"), { coords, timestamp: Date.now() });
      console.log("SOS logged in Firestore");
    } catch (err) {
      console.error("Firestore error:", err);
    }
  });
});
