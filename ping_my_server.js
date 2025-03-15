// const https = require("https");

// const PING_URL = "https://chatapp-springboot-render.onrender.com/api/ind/v1/health";

// function pingServer() {
//   https.get(PING_URL, (res) => {
//     console.log(`Pinged Server: ${PING_URL}, Status Code: ${res.statusCode}`);
//   }).on("error", (err) => {
//     console.error("Ping failed:", err.message);
//   });
// }

pingServer();

const keepServerAlive = () => {
    fetch("https://chatapp-springboot-render.onrender.com/api/ind/v1/health")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => console.log("Server is alive:", data))
        .catch(error => console.error("Error pinging server:", error));
};

// Run immediately and then every 2 minutes
keepServerAlive();
setInterval(keepServerAlive, 120000);
