// diary.js
import { db, storage } from "./firebase-config.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

document.getElementById("btn-diary").addEventListener("click", async () => {
  const title = prompt("Diary title:");
  const entry = prompt("Diary entry:");
  if (!title || !entry) return alert("Cancelled");

  // Optional file upload placeholder
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.onchange = async () => {
    const file = fileInput.files[0];
    let fileUrl = "";
    if (file) {
      const storageRef = ref(storage, `diary/${file.name}`);
      await uploadBytes(storageRef, file);
      fileUrl = await getDownloadURL(storageRef);
    }

    // Save diary entry
    try {
      await addDoc(collection(db, "diary"), { title, entry, fileUrl, timestamp: Date.now() });
      alert("Diary saved to Firebase!");
    } catch (err) {
      console.error("Firestore error:", err);
    }
  };
  fileInput.click();
});
