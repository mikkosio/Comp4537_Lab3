const http = require("http");
const url = require("url");
const utils = require("./modules/utils");
const messages = require("./lang/messages/en/user");

const port = process.env.PORT || 8888;

http.createServer(function (req, res) {
    const query = url.parse(req.url, true).query;
    let name = query.name || "Visitor";
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<div style="color: blue;">${messages.dateMessage.replace("%1", name)} ${utils.getDate()}</div>`);
}).listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
