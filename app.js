const ROBOT = {
  name: "MPL_Leg_System",
  backend: "https://mpl-robotics-leg-system--almamatta1976.replit.app",
  mode: "live"
};

 
function move(direction) {
  fetch(ROBOT.backend + "/move", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      robot: ROBOT.name,
      command: direction
    })
  });

  console.log("MOVE SENT:", direction);
}
