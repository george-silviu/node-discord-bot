import { SlashCommandBuilder } from "discord.js";

//generate random dice roll function
function generateRandom(min = 1, max = 12) {
  return Math.floor(Math.random() * max) + min;
}

//define the command info
const data = new SlashCommandBuilder()
  .setName("roll")
  .setDescription("Roll the dice 🎲!");

//define the execution handler
async function execute(interaction) {
  const random = generateRandom();
  await interaction.reply(`Nice! You rolled ${random}🎲🎲!`);
}

//we need to register the command, in order for the discord server to be aware of it and notify the bot to trigger the command
export { data, execute };
