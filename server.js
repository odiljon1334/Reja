const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://odil1334:uqud1j0nTfDpp1IN@cluster0.bpbgp.mongodb.net/";

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection secceed");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function() {
            console.log(
                `Server is running on port ${PORT}, http://localhost:${PORT}`);
});
    }
});
