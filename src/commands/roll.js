import { SlashCommandBuilder } from "discord.js";

function generateRandom(min = 1, max = 12) {
  return Math.floor(Math.random() * max) + min;
}

const data = new SlashCommandBuilder().setName("roll").setDescription();
