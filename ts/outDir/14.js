"use strict";
var Status;
(function (Status) {
    Status[Status["CHENJIE"] = 1] = "CHENJIE";
    Status[Status["HEXINGHAN"] = 2] = "HEXINGHAN";
    Status[Status["ORANGE"] = 3] = "ORANGE";
})(Status || (Status = {}));
var logName = function (status) {
    switch (status) {
        case Status.CHENJIE:
            console.log("this is " + Status.CHENJIE);
            console.log(Status[1]);
            break;
        case Status.HEXINGHAN:
            console.log("this is " + Status.HEXINGHAN);
            break;
        case Status.ORANGE:
            console.log("this is " + Status.ORANGE);
            break;
        default:
            break;
    }
};
logName(1);
