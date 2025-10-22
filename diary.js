// diary.js
document.getElementById("btn-diary").addEventListener("click", () => {
  const title = prompt("Enter diary title:");
  const entry = prompt("Write your diary entry:");
  if (title && entry) {
    console.log("Diary Saved:", { title, entry });
    alert("Diary entry saved (local demo). Full Firebase save coming next.");
  } else {
    alert("Diary entry cancelled.");
  }
});
