import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { fetchForecast } from "../requests/forecast.js";

const data = new SlashCommandBuilder()
  .setName("forecast")
  .setDescription("Responds with weather forecast for the next three days!")
  .addStringOption((option) => {
    return option
      .setName("location")
      .setDescription(
        "Prompt location, zip/postal code or latitude and longitude of the forecast."
      )
      .setRequired(true);
  })
  .addStringOption((option) => {
    return option
      .setName("unit")
      .setDescription('The unit system of forecast: "celsius" or "fahrenheit"')
      .setRequired(false)
      .addChoices(
        { name: "celsius", value: "celsius" },
        { name: "fahrenheit", value: "fahrenheit" }
      );
  });

async function execute(interaction) {
  //need to use defered reply when running commands that interact with 3rd party APIs
  await interaction.deferReply();

  const location = interaction.options.getString("location");
  const unit = interaction.options.getString("unit") || "celsius";
  const isCelsius = unit === "celsius";

  try {
    const { locationName, weatherData } = await fetchForecast(location);

    //using embed to display the forecast data
    const embed = new EmbedBuilder()
      .setColor(0x3f704d)
      .setTitle(`Weather forecast for ${locationName}...`)
      .setDescription(`Using the ${unit} system.`)
      .setTimestamp()
      .setFooter({ text: "Powered by weatherapi.com" });

    for (const day of weatherData) {
      const minTemperature = isCelsius ? day.minTempC : day.minTempF;
      const maxTemperature = isCelsius ? day.maxTempC : day.maxTempF;

      embed.addFields({
        name: day.date,
        value: `Low ${minTemperature}, High ${maxTemperature}`,
      });
    }

    await interaction.editReply({ embeds: [embed] });
  } catch (error) {
    await interaction.editReply(error);
  }
}

export { data, execute };
