// ai-chat.js
// Placeholder AI chat logic
document.getElementById("btn-ai-chat").addEventListener("click", () => {
  const chatBubble = document.createElement("div");
  chatBubble.innerText = "AI: Hello! How can I help you today?";
  chatBubble.style.background = "#4A90E2";
  chatBubble.style.color = "#fff";
  chatBubble.style.padding = "10px";
  chatBubble.style.margin = "10px";
  chatBubble.style.borderRadius = "15px";
  document.body.appendChild(chatBubble);
  alert("AI Chat Opened (demo). Full AI logic will work after API integration.");
});
