"use strict";

const Discord = require("discord.js");
const message = require("./handlers/message");
const voiceStateUpdate = require("./handlers/voiceStateUpdate");
const client = new Discord.Client();
const messages = {};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});
client.on("message", message);
client.on("voiceStateUpdate", voiceStateUpdate);
client.login(process.env.token);
