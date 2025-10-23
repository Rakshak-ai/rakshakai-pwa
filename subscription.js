// subscription.js
import { db } from "./firebase-config.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

document.getElementById("btn-profile").addEventListener("click", async () => {
  const plan = prompt("Select plan: Free / Silver / Gold", "Free");
  if (!plan) return;

  alert("You selected " + plan + " plan (simulated payment)");

  // Save plan to Firestore
  try {
    await addDoc(collection(db, "subscriptions"), { plan, timestamp: Date.now() });
    console.log("Subscription saved to Firebase:", plan);
  } catch (err) {
    console.error("Firestore error:", err);
  }
});
