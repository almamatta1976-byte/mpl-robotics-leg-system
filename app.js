// MPL Robotic Leg System - Control Layer (Frontend Logic)

// System state
let systemOnline = true;
let currentAngle = 0;
let currentLoad = 0;

// Initialize system status
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("status").innerText = "System Online";
});

// Movement commands (future: will connect to backend / hardware)
function move(direction) {
  console.log("Command:", direction);

  // simulate state change
  currentAngle += Math.floor(Math.random() * 10);

  if (currentAngle > 180) currentAngle = 0;

  document.getElementById("angle").innerText = currentAngle;
}

// Stop command
function stop() {
  console.log("Command: STOP");
}

// Simulated telemetry stream (placeholder for real sensor feed)
setInterval(() => {

  if (!systemOnline) return;

  currentAngle = Math.floor(Math.random() * 180);
  currentLoad = Math.floor(Math.random() * 100);

  document.getElementById("angle").innerText = currentAngle;
  document.getElementById("load").innerText = currentLoad;

}, 1000);
