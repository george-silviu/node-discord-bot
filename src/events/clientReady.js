import { REST, Routes } from "discord.js";
import { configDotenv } from "dotenv";
configDotenv();

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

// const commands = [
//   {
//     name: "ping",
//     description: "Replies with Pong!",
//   },
// ];

async function clientReadyHandler(client) {
  console.log(`Logged in as ${client.user.tag}!`);

  //after success login register all custom defined commands
  try {
    console.log(`Started refreshing ${client.commands.size} commands.`);

    const response = await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      {
        body: client.commands.map((command) => {
          return command.data.toJSON();
        }),
      }
    );

    console.log(`Successfully reloaded ${response.length} commands.`);
  } catch (error) {
    console.error(error);
  }
}

export { clientReadyHandler };
