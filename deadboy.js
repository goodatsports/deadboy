const discord = require('discord.js');
const ClientOAuth2 = require('client-oauth2');
const client = new discord.Client();
const settings = require('./settings.json');
var vol = 0.5;

client.login(settings.token).then(
  (result) => {
    console.log('Login successful!');
  })
  .catch(
    (error) => {
      console.log('Login rejected!');
    });

client.on('ready', () => {
  console.log('deadboy online~~');
});



client.on('message', message => {
  if(message.content.startsWith('~dead')) {
    console.log('MESSAGE RECEIVED');
    message.channel.send('yo!');
  }
  if(message.content.startsWith('~play')) {
    const channel = message.member.voiceChannel;
    channel.join().then(conn => {
      console.log("JOINED VOICE CHANNEL");
      const dispatcher = conn.playFile('./DEAD.mp3', vol, 2);
      isPlaying = true;
    })
    .catch(console.log);
  }
});
