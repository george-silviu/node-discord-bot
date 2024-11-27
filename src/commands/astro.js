import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { fetchForecast } from "../requests/forecast.js";

const data = new SlashCommandBuilder()
  .setName("astro")
  .setDescription(
    "Responds with astronomical forecast for the next three days!"
  )
  .addStringOption((option) => {
    return option
      .setName("location")
      .setDescription(
        "Prompt location, zip/postal code or latitude and longitude of the forecast."
      )
      .setRequired(true);
  });
async function execute(interaction) {
  //need to use defered reply when running commands that interact with 3rd party APIs
  await interaction.deferReply();

  const location = interaction.options.getString("location");

  try {
    const { locationName, astroData } = await fetchForecast(location);

    //using embed to display the forecast data
    const embed = new EmbedBuilder()
      .setColor(0x3f704d)
      .setTitle(`Astronimical forecast for ${locationName}...`)
      .setTimestamp()
      .setFooter({ text: "Powered by weatherapi.com" });

    for (const day of astroData) {
      embed.addFields({
        name: day.date,
        value: `Sunrise ${day.sunrise}, Sunset ${day.sunset}, Moonrise ${day.moonrise}, Moonset ${day.moonset}`,
      });
    }

    await interaction.editReply({ embeds: [embed] });
  } catch (error) {
    await interaction.editReply(error);
  }
}

export { data, execute };
