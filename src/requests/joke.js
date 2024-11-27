import axios from "axios";

const URL = "https://api.api-ninjas.com/v1/jokes";

async function fetchJoke() {
  try {
    const response = await axios({
      method: "GET",
      url: URL,
      headers: {
        "X-Api-Key": process.env.API_NINJAS_KEY,
      },
    });

    const joke = response.data[0].joke;

    return { joke };
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching the joke...");
  }
}

export { fetchJoke };
