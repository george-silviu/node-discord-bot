import { SlashCommandBuilder } from "discord.js";

//generate random dice roll function
function generateRandom(min = 1, max = 12) {
  return Math.floor(Math.random() * max) + min;
}

//define the command info
const data = new SlashCommandBuilder()
  .setName("roll")
  .setDescription("Roll the dice!");

//define the execution handler
async function execute(interaction) {
  const roll = generateRandom();
  await interaction.reply(`🎲 Nice! You rolled ${roll}!`);
}

export { data, execute };
