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
      return channel.send(
        `¿Bonito... Nombre?, me pregunto por que... ${member}`
      );
    }

    if (fixedUsername.includes("big dummy")) {
      return channel.send(
        `Me recuerdas a alguien que me odia... Por alguna razón`
      );
    }

    if (fixedUsername.includes("sayori")) {
      return channel.send(`¡Ojala no te quedes colgada!, ${member}!`);
    }

    if (fixedUsername.includes("yuri")) {
      return channel.send(
        `Espero que simplemente estes "emocionado", y no que te guste cortarte con cuchillos... ${member}`
      );
    }

    if (fixedUsername.includes("natsuki")) {
      return channel.send(`
			Hey, ${member}, ¡aquí estas seguro!, tu padre no puede lastimarte aquí`);
    }

    if (fixedUsername.includes("mc")) {
      return channel.send(
        `¿MC?, ¿como si fueses un rapero?, ¿O MC como si fueses un personaje principal?, de todas maneras... ¡Creo que nos llevaremos bien ${member}!`
      );
    }

    const sentiment = new Sentiment();

    const analysis = sentiment.analyze(username);

    if (analysis.score < 0) {
      return channel.send(`¡Bienvenido ${member}!, ¡animo!, ¡no te desanimes!`);
    }
    if (analysis.score > 0) {
      return channel.send(
        `¡Estoy encantada de recibir gente alegre aquí, ¿creo que me recuerdas a alguien...? ${member}`
      );
    }

    return channel.send(`¡Bienvenido al servidor!, ${member}`);
  } catch (err) {
    console.error(err);
    console.error("Can't reply to the channel.");
  }
};
