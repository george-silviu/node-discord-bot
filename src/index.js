import { configDotenv } from "dotenv";
import {
  Client,
  Events,
  GatewayIntentBits,
  Collection, //extends Map
} from "discord.js";

import { clientReadyHandler } from "./events/clientReady.js";

configDotenv();

//create a new instance of BOT
//Gateway - refering to discord web socket api
//Intent - refers to the permission to get certain updates from the server
//Bits - permission flags
//Guild = the name that discord gives to a server
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

import * as rollCommand from "./commands/roll.js";

client.commands = new Collection();

client.commands.set(rollCommand.data.name, rollCommand);

//add an event listener that will be triggered when the bot logs in (uses discord web sockets)
client.on(Events.ClientReady, clientReadyHandler);

client.login();
