const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, resp) => {
    resp.statusCode = 200;
    resp.setHeader("Content-Type", "application/json");
    resp.write(JSON.stringify({Name: "Welcome to the Tuitorial"}));
    resp.end();
});

server.listen(PORT, () => {
    console.log(`server started on the port : ${PORT}`);
})