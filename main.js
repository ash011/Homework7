const moment = require("moment");
const fs = require("fs");
const { Readable } = require("stream");

setInterval(() => {
  const day = moment().locale("hy-am").format("LLLL:ss");
  const readableStream = new Readable({
    read() {
      this.push(day + "\n");
      this.push(null);
    },
  });
  readableStream.pipe(fs.createWriteStream("log.txt", { flags: "a" }));
}, 1000);
