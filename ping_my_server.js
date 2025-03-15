console.log("🏁 Starting Ping Script...");

const https = require("https");

const PING_URL = "https://chatapp-springboot-render.onrender.com/api/ind/v1/health";

function pingServer() {
  console.log(`⏳ Pinging ${PING_URL} at ${new Date().toISOString()}`);
  
  https.get(PING_URL, (res) => {
    console.log(`✅ Server Response: ${res.statusCode}`);
  }).on("error", (err) => {
    console.error("❌ Ping failed:", err.message);
  });
}

// Run immediately and then every 5 minutes
pingServer();
setInterval(pingServer, 300000);  // 300000 ms = 5 minutes

// const keepServerAlive = () => {
//     fetch("https://chatapp-springboot-render.onrender.com/api/ind/v1/health")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.text();
//         })
//         .then(data => console.log("Server is alive:", data))
//         .catch(error => console.error("Error pinging server:", error));
// };

// // Run immediately and then every 2 minutes
// keepServerAlive();
// setInterval(keepServerAlive, 120000);
