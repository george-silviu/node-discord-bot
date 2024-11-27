import axios from "axios";

const URL = "https://api.api-ninjas.com/v1/quotes";

async function fetchQuote(category) {
  try {
    const response = await axios({
      method: "GET",
      url: URL,
      headers: {
        "X-Api-Key": process.env.API_NINJAS_KEY,
      },
      params: {
        category: category,
      },
    });

    const quote = response.data[0];

    return { quote };
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching the quote...");
  }
}

export { fetchQuote };
