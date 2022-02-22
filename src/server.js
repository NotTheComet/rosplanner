const sio = require("socketio");

const httpServer = createServer();
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {  
    io.on("connetInfo", (arg1, arg2, arg3) => {

        var ClientName = arg1;
        var ClientIP = arg2;
        var ClientType = arg3;
        


        callback({
            status: "ok"    
        });
    });
});

httpServer.listen(6899);