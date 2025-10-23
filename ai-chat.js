// ai-chat.js
import { db } from "./firebase-config.js";

document.getElementById("btn-ai-chat").addEventListener("click", async () => {
  const userMsg = prompt("Type your message to RakshakAI:");
  if (!userMsg) return alert("No message entered");

  // Show user message
  const userBubble = document.createElement("div");
  userBubble.innerText = "You: " + userMsg;
  userBubble.style.background = "#ccc";
  userBubble.style.padding = "8px";
  userBubble.style.margin = "6px";
  userBubble.style.borderRadius = "12px";
  document.body.appendChild(userBubble);

  // Placeholder AI response
  const aiResponse = "AI: This is a placeholder answer. Full OpenAI integration coming next.";
  const aiBubble = document.createElement("div");
  aiBubble.innerText = aiResponse;
  aiBubble.style.background = "#4A90E2";
  aiBubble.style.color = "#fff";
  aiBubble.style.padding = "8px";
  aiBubble.style.margin = "6px";
  aiBubble.style.borderRadius = "12px";
  document.body.appendChild(aiBubble);

  // Optionally save chat to Firestore
  try {
    await addDoc(collection(db, "chats"), { message: userMsg, response: aiResponse, timestamp: Date.now() });
    console.log("Chat saved to Firestore");
  } catch (err) {
    console.error("Firestore error:", err);
  }
});
