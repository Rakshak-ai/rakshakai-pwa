import { db } from "./firebase-config.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";

document.addEventListener("DOMContentLoaded", () => {
  const sosButton = document.getElementById("sosButton");

  if (sosButton) {
    sosButton.addEventListener("click", async () => {
      try {
        const sosRef = collection(db, "sos_alerts");
        await addDoc(sosRef, {
          user: "anonymous",
          time: Timestamp.now(),
          status: "Active",
        });
        alert("🚨 SOS alert sent successfully!");
      } catch (error) {
        console.error("Error sending SOS:", error);
        alert("Failed to send SOS. Check console for details.");
      }
    });
  }
});
