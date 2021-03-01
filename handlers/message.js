const messages = {};
module.exports = (msg) => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("quien soy")) {
    if (messages[msg.author.id]) {
      return msg.reply(messages[msg.author.id]);
    } else {
      return msg.reply(`No se quien sea ${msg.author.username}`);
    }
  }
  if (msg.content.startsWith("soy")) {
    const newContent = msg.content.replace("soy", `${msg.author.username} es`);
    messages[msg.author.id] = newContent;
    return msg.reply("Entendido");
  }
  if (msg.content.startsWith("quien es")) {
    const member = msg.mentions.members.first();
    if (messages[member.id]) {
      return msg.reply(messages[member.user.id]);
    } else {
      return msg.reply(`No se quien sea ${member.user.username}`);
    }
  }
};
