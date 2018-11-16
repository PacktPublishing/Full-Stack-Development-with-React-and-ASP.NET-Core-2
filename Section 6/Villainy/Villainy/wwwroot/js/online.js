"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/onlineHub").build();

window.connection.on("ReceiveMessage", function (user, msg) {
    var encodedMsg = user + " " + msg;
    var li = document.createElement("li");
    li.textContent = encodedMsg;
    document.getElementById("usersList").appendChild(li);
});

window.connection.start().catch(function (err) {
    return console.error(err.toString());
});
