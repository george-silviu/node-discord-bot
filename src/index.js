import {
  Client,
  Events,
  GatewayIntentBits,
  Collection, //extends Map
} from "discord.js";

import { clientReadyHandler } from "./events/clientReady.js";
import { interactionCreateHandler } from "./events/interactionCreate.js";

import * as rollCommand from "./commands/roll.js";
import * as forecastCommand from "./commands/forecast.js";
import * as astroCommand from "./commands/astro.js";
import * as jokeCommand from "./commands/jokes.js";

//create a new instance of BOT
//Gateway - refering to discord web socket api
//Intent - refers to the permission to get certain updates from the server
//Bits - permission flags
//Guild = the name that discord gives to a server
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

//add the roll command
client.commands.set(rollCommand.data.name, rollCommand);
client.commands.set(forecastCommand.data.name, forecastCommand);
client.commands.set(astroCommand.data.name, astroCommand);
client.commands.set(jokeCommand.data.name, jokeCommand);

//add an event listener that will be triggered when the bot logs in (uses discord web sockets)
client.once(Events.ClientReady, clientReadyHandler);

//event that will be triggered whenever an interaction is created (slash command is submitted from discord)
client.on(Events.InteractionCreate, interactionCreateHandler);

client.login();
