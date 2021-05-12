// enum Status {
//     CHENJIE,
//     HEXINGHAN,
//     ORANGE
// }
enum Status {
    CHENJIE = 1,
    HEXINGHAN,
    ORANGE
}

const logName = (status: any) => {
    switch (status) {
        case Status.CHENJIE:
            console.log(`this is ${Status.CHENJIE}`);
            console.log(Status[1]);
            break;
        case Status.HEXINGHAN:
            console.log(`this is ${Status.HEXINGHAN}`);
            break;
        case Status.ORANGE:
            console.log(`this is ${Status.ORANGE}`);
            break
        default:
            break;
    }
}

logName(1)