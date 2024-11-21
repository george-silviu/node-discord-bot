import { configDotenv } from "dotenv";
import { Client, Events, GatewayIntentBits } from "discord.js";

configDotenv();

//create a new instance of BOT
//guilds intents give access to the bot to a list of intents
//Guild = the name that discord gives to a server
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//add an event listener that will be triggered when the bot logs in
client.on(Events.ClientReady, () => {
  console.log("The Fun Bot is logged in!");
});

client.login();
