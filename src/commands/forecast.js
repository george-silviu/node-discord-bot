//make a request to the weather api and return the data
import { SlashCommandBuilder } from "discord.js";
import { fetchForecast } from "../requests/forecast.js";

const data = new SlashCommandBuilder()
  .setName("forecast")
  .setDescription("Responds with weather forecast for the next three days!");

async function execute(interaction) {
  //fetch data from weather api and return it to discord
  try {
    //test forecast
    console.log(await fetchForecast("Bucharest"));
  } catch (error) {
    console.log(error.data);
  }

  await interaction.reply("Tommorow will be 5 degrrrres! It's cold.");
}

export { data, execute };
