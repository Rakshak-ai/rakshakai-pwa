// subscription.js
document.getElementById("btn-profile").addEventListener("click", () => {
  const plan = prompt("Select plan: Free / Silver / Gold", "Free");
  if (plan) {
    alert("You selected " + plan + " plan.\nPayment simulated (demo).");
    console.log("Subscription Plan:", plan);
  }
});
