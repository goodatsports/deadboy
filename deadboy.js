const discord = require('discord.js');
const ClientOAuth2 = require('client-oauth2');
const client = new discord.Client();
const settings = require('./settings.json');
const songs = settings.songs
var vol = 0.5;

//Bot login
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

// Message listener
client.on('message', message => {
  if(message.content.startsWith('~hello')) {
    console.log('MESSAGE RECEIVED');
    message.channel.send('yo!');
  }
  
  if(message.content in songs) {
    const channel = message.member.voiceChannel;
    channel.join().then(conn => {
      console.log("JOINED VOICE CHANNEL");
      // StreamOptions will play song from file, pass current volume setting,
      // and send voice packets twice to reduce packet loss
      const dispatcher = conn.playFile(songs[message.content], vol, 2);
      isPlaying = true;
    })
   .catch(console.log);
  }
});
