async function interactionCreateHandler(interaction) {
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);

  await command.execute(interaction);
}

export { interactionCreateHandler };
