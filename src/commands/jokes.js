import { SlashCommandBuilder } from "discord.js";
import { fetchJoke } from "../requests/joke.js";

const data = new SlashCommandBuilder()
  .setName("joke")
  .setDescription("Returns a hilarious joke.");

async function execute(interaction) {
  try {
    await interaction.deferReply();

    const { joke } = await fetchJoke();

    await interaction.editReply(joke);
  } catch (error) {
    await interaction.editReply(error);
  }
}

export { data, execute };
