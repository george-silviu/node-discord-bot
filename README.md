# Node Discord Bot

Node.js fun Discord bot that can display the weather forecast, the position of sun and moon and tell jokes.

## Steps for setup

1. Be sure you have[Node.js](https://nodejs.org/en) installed.
2. Open a terminal and run `code`npm install`code`.
3. Create a new [Discord](https://discord.com/) account if you do not have one.
4. Create a Discord server to test the bot, then find the server/guild ID by turning the developer mode.
5. Navigate to [Discord Developers page](https://discord.com/developers/applications) and create a new app, then find the application/client ID.
6. Invite the bot to your server.
7. Sign up to a free [Wheather API](https://www.weatherapi.com/) account and find your API key.
8. Create a `code`.env`code` file at the root of the project and insert the data as below.

## Environment variables

Populate the following keys:
```
DISCORD_TOKEN=
CLIENT_ID=
GUILD_ID=
WHEATHER_API_KEY=
```

📌 Resources

- https://discord.js.org/docs/packages/discord.js/14.16.3
- https://discord.com/developers/applications
- https://discord-api-types.dev/api/discord-api-types-v10/enum/GatewayIntentBits#Guilds
- https://discord.com/developers/docs/events/gateway#gateway-intents

1️⃣ Setup Node app with discord.js
2️⃣ Create a new dicord app on developers page
3️⃣ Create a new discord server
4️⃣ Navigate to discord developers and create a new bot and connect it to the discord server
I will use the principle of least privilege and allow bot only to send messages and use / commands
5️⃣ Authorize bot login from the node server with the least privileges (Guilds)
6️⃣ Implement the roll command
To implement a command follow this steps:

1. Define the command and add functionality (data)
2. Write the command handler (execute)
3. Register the command

🤔Fun stuff to do next:

- Integrate the bot with AI
- Play music
