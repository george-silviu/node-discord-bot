# Node Discord Bot

Node.js fun Discord bot that can display the weather forecast, the position of sun and moon and tell jokes.

![app-schema](/src/assets/app-schema.png)

to do: add schema details

## Steps for setup

1. Be sure you have[Node.js](https://nodejs.org/en) installed.
2. Open a terminal and run `npm install`.
3. Create a new [Discord](https://discord.com/) account if you do not have one.
4. Create a Discord server to test the bot, then find the server/guild ID by turning the developer mode.
5. Navigate to [Discord Developers page](https://discord.com/developers/applications) and create a new app, then find the application/client ID.
6. Invite the bot to your server.
7. Sign up to a free [Wheather API](https://www.weatherapi.com/) account and find your API key.
8. Create a `.env` file at the root of the project and insert the data as below.

## Environment variables

Populate the following values in `.env`:

```
DISCORD_TOKEN=
CLIENT_ID=
GUILD_ID=
WHEATHER_API_KEY=
```

## Running the project

- Production script: `npm start`
- Development: `npm run dev`

## 📌 Resources

- [Discord.js](https://discord.js.org/)
- [Discord Developer Portal](https://discord.com/developers/applications)

## 🤔Fun stuff to do next:

- Integrate the bot with AI
- Play music
