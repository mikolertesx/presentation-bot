const Sentiment = require("sentiment");

module.exports = (member) => {
  console.log("It ocurred.");

  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "member-log"
  );
  if (!channel) return;

  try {
    const { user } = member;
    const { username } = user;
    const fixedUsername = username.toLowerCase();

    if (fixedUsername.includes("monika")) {
      return channel.send(`Falto comprensión, amor y ternura... ${member}`);
    }

    if (fixedUsername.includes("big dummy")) {
      return channel.send(
        `${member}... Nunca debiste estar aquí en un principio.`
      );
    }

    if (fixedUsername.includes("sayori")) {
      return channel.send(`¡Ja!, ¡te dejaron colgada, ${member}!`);
    }

    if (fixedUsername.includes("yuri")) {
      return channel.send(
        `Filosa, elegante, pero muy calenturienta... ${member}`
      );
    }

    if (fixedUsername.includes("natsuki")) {
      return channel.send(`
			No eres mala persona, simplemente eres poco agradable ${member}...`);
    }

    if (fixedUsername.includes("mc")) {
      return channel.send(
        `¡Ojala exista un futuro en el que tu sirvas de algo! ${member}`
      );
    }

    const sentiment = new Sentiment();

    const analysis = sentiment.analyze(username);

    if (analysis.score < 0) {
      return channel.send(`Parece que ${member} nunca seras feliz.`);
    }
    if (analysis.score > 0) {
      return channel.send(
        `Orale, a ver si aprendes que sonreir en tiempo de luto es raro... ${member}`
      );
    }

    return channel.send(`¡Hasta nunca!, ${member}`);
  } catch (err) {
    console.error(err);
    console.error("Can't reply to the channel.");
  }
};
