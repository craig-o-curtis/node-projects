#!/usr/bin/env node
// ** will print * for number of seconds
// ** removing starts one at a time until 0 *
// ** collect time from argv
// ** print * that represent time inline
// ** run a timer, remove one at a time

const minimist = require("minimist");
const { stdout: log } = require("single-line-log");
const Timer = require("tiny-timer");

const { time } = minimist(process.argv);

const run = () => {
  if (!time) throw Error(`---time is required`);
  if (!parseInt(time)) throw Error(`---time must be a number`);

  const count = parseInt(time);
  let message = ""; // ** stars
  message = starMaker(count);

  initTimer(message, count);
};

const initTimer = (message, count) => {
  const timer = new Timer({ interval: 1000 });
  timer.on("tick", () => {
    log(message);
    message = message.slice(1);
  });
  timer.on("end", () => {
    log("Finished!");
  });

  timer.start(count * 1000);
};

const starMaker = (int) => {
  return Array.from(Array(int))
    .map(() => "*")
    .join("");
};

run();
