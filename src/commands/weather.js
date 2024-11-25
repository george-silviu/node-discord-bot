//make a request to the weather api and return the data
import { SlashCommandBuilder } from "discord.js";
import axios from "axios";

const weatherApiKey = process.env.WEATHER_API_KEY;

const data = new SlashCommandBuilder()
  .setName("weather")
  .setDescription("Ask me how the weather will be!");

async function execute(interaction) {
  //fetch data from weather api and return it to discord
  try {
    const forecast = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?q=Bucharest&days=1&key=${weatherApiKey}`
    );

    console.log(forecast.data);
  } catch (error) {
    console.log(error.data);
  }

  await interaction.reply("Tommorow will be 5 degrrrres! It's cold.");
}

export { data, execute };
