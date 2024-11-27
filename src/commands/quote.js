import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { fetchQuote } from "../requests/quotes.js";

// const categories = [
//   "age",
//   "alone",
//   "amazing",
//   "anger",
//   "architecture",
//   "art",
//   "attitude",
//   "beauty",
//   best,
//   birthday,
//   business,
//   car,
//   change,
//   communication,
//   computers,
//   cool,
//   courage,
//   dad,
//   dating,
//   death,
//   design,
//   dreams,
//   education,
//   environmental,
//   equality,
//   experience,
//   failure,
//   faith,
//   family,
//   famous,
//   fear,
//   fitness,
//   food,
//   forgiveness,
//   freedom,
//   friendship,
//   funny,
//   future,
//   god,
//   good,
//   government,
//   graduation,
//   great,
//   happiness,
//   health,
//   history,
//   home,
//   hope,
//   humor,
//   imagination,
//   inspirational,
//   intelligence,
//   jealousy,
//   knowledge,
//   leadership,
//   learning,
//   legal,
//   life,
//   love,
//   marriage,
//   medical,
//   men,
//   mom,
//   money,
//   morning,
//   movies,
//   success,
// ];

const data = new SlashCommandBuilder()
  .setName("quote")
  .setDescription("Responds with an insightful quote!")
  .addStringOption((option) => {
    return option
      .setName("category")
      .setDescription("The category of the quote.")
      .setRequired(false)
      .addChoices(
        { name: "age", value: "age" },
        { name: "alone", value: "alone" },
        { name: "success", value: "success" }
      );
  });

async function execute(interaction) {
  await interaction.deferReply();

  const category = interaction.options.getString("category");

  console.log(category);

  try {
    const { quote } = await fetchQuote(category);

    const embed = new EmbedBuilder()
      .setColor(0x3f704d)
      .setTitle(`About ${quote.category}`)
      .setAuthor({ name: `${quote.author}` })
      .setDescription(`${quote.quote}`)
      .setTimestamp()
      .setFooter({ text: "Powered by api-ninjas.com API" });

    await interaction.editReply({ embeds: [embed] });
  } catch (error) {
    await interaction.editReply(error);
  }
}

export { data, execute };
