const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello Express app!');
});

app.listen(3000, () => {
	console.log('\033[32m server started');
});

//=================================

const Discord = require('discord.js');
const client = new Discord.Client();
const disbut = require('discord-buttons')
disbut(client)
const distube = require('distube');
const ms = require('ms')
const fs = require('fs')
client.distube = new distube(client, {
	searchSongs: false,
	emitNewSongOnly: true,
	youtubeDL: true,
	updateYouTubeDL: true,
});
require("@discordjs/opus");
require("ffmpeg-static");
require("ytdl-core");
const lineReply = require("discord-inline-reply");

//=================================

const prefix = "§"//prefix

//=================================

client.on('ready', () => {
  console.log(`[NAME] ${client.user.tag}`)
  console.log(`[ID] ${client.user.id}`)
  console.log(`[USERS] ${client.guilds.cache
      .reduce((a, b) => a + b.memberCount, 0)
      .toLocaleString()}`)
  console.log(`[GUILDS] ${client.guilds.cache.size.toLocaleString()}`)
  console.log(`[PING] ${client.ws.ping}`)
  client.user.setStatus("online")
  function msg() {
    let status = [`Type: ${prefix}help | ${client.guilds.cache.size.toLocaleString()} Server | Users ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()}`];
    let S = Math.floor(Math.random() * status.length);
client.user.setActivity(status[S], { type: 'STREAMING' })
  };
  setInterval(msg, 7000)
})
//=================================
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const targetGuild = client.guilds.cache.find(guild => guild.id === "1026893664208814120");
  const targetChannel = targetGuild.channels.cache.find(channel => channel.id === "1094281286505467904");
  const connection = joinVoiceChannel({
    channelId: targetChannel.id,
    guildId: targetGuild.id,
    adapterCreator: targetGuild.voiceAdapterCreator,
  });
});
//=================================

client.login(process.env.token).catch((err) => {
	console.warn("\033[31m Token Invalid")
})
//=================================
