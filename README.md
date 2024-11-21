Fun Bot

❓What is this project about?
In this project I built a Discord Bot using Node.js.

📋 Commands list

- /roll

📌 Resources

- https://discord.js.org/docs/packages/discord.js/14.16.3
- https://discord.com/developers/applications
- https://discord-api-types.dev/api/discord-api-types-v10/enum/GatewayIntentBits#Guilds
- https://discord.com/developers/docs/events/gateway#gateway-intents

Workflow:
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
