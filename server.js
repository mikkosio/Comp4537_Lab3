const http = require("http");
const url = require("url");
const utils = require("./modules/utils");
const messages = require("./lang/messages/en/user");

module.exports = async (req, res) => {
    const query = url.parse(req.url, true).query;
    let name = query.name || "Visitor";
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(messages.dateMessage.replace("%1", name) + utils.getDate());
};
