"use strict";

const Discord = require("discord.js");
const message = require("./handlers/message");
const voiceStateUpdate = require("./handlers/voiceStateUpdate");
const guildMemberAdd = require("./handlers/guildMemberAdd");
const guildMemberRemove = require("./handlers/guildMemberRemove");
const client = new Discord.Client();

const preferredNickname = "Hi, it's me!";

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", message);
client.on("voiceStateUpdate", voiceStateUpdate);
client.on("guildMemberAdd", guildMemberAdd);
client.on("guildMemberRemove", guildMemberRemove);

// Don't let anyone change her name.
client.on("guildMemberUpdate", async (oldUser, newUser) => {
	if (oldUser.user.id === client.user.id) {
		if (
			newUser.nickname !== preferredNickname ||
			newUser.nickname !== preferredNickname + " >:("
		) {
			await newUser.setNickname(preferredNickname + " >:(");

			setTimeout(async () => {
				if (
					newUser.nickname !== preferredNickname ||
					newUser.nickname !== preferredNickname + " >:("
				) {
					await newUser.setNickname(preferredNickname);
				}
			}, 3000);
		}
	}
});

client.login(process.env.token);
