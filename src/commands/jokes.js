import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { fetchJoke } from "../requests/joke.js";

const data = new SlashCommandBuilder()
  .setName("joke")
  .setDescription("Returns a hilarious joke.");

async function execute(interaction) {
  try {
    await interaction.deferReply();

    const { joke } = await fetchJoke();

    const embed = new EmbedBuilder()
      .setColor(0x3f704d)
      .setTitle(`${joke}`)
      .setTimestamp()
      .setFooter({ text: "Powered by api-ninjas.com API" });

    await interaction.editReply({ embeds: [embed] });
  } catch (error) {
    await interaction.editReply(error);
  }
}

export { data, execute };
