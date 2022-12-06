const http = require("http");
const { spawn } = require("child_process");

const PORT = 5000;

const server = http.createServer(async (req, res) => {
  //set the request route
  if (req.url === "/open-terminal" && req.method === "GET") {
    //response headers
    res.writeHead(200, { "Content-Type": "application/json" });
    //set the response
    spawn("open", [
      "-a",
      "Terminal",
      "/System/Applications/Utilities/Terminal.app",
    ]);
    res.write("Opening terminal....");
    //end the response
    res.end();
  }

  // If no route present
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
