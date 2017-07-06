const discord = require('discord.js');
const ClientOAuth2 = require('client-oauth2');
const client = new discord.Client();
const settings = require('./settings.json');
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
  // Music file (i.e. XO TOUR Llif3 by Lil Uzi Vert) will play
  // when '~dead' message is played in text chat
  if(message.content.startsWith('~dead')) {
    const channel = message.member.voiceChannel;
    channel.join().then(conn => {
      console.log("JOINED VOICE CHANNEL");
      // StreamOptions will play song from file, pass current volume setting,
      // and send voice packets twice to reduce packet loss
      const dispatcher = conn.playFile('./DEAD.mp3', vol, 2);
      isPlaying = true;
    })
    .catch(console.log);
  }
    // Play Pearl Jam's "Alive" if '~alive'
    if(message.content.startsWith('~alive')) {
      const channel = message.member.voiceChannel;
      channel.join().then(conn => {
        console.log("JOINED VOICE CHANNEL");
        const dispatcher = conn.playFile('./ALIVE.mp3', vol - 0.4, 2);
        isPlaying = true;
      })
      .catch(console.log);
  }
});
