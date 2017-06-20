const discord = require('discord.js');
const ClientOAuth2 = require('client-oauth2');
const client = new discord.Client();
const settings = require('./settings.json');

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
