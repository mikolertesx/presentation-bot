module.exports = async (oldState, newState) => {
  const playAudio = async (voiceChannel) => {
    try {
      const connection = await voiceChannel.join();
      connection.play("./audio/hi.mp3").on("finish", () => {
        connection.disconnect();
      });
    } catch (err) {
      console.error("Couldn't join");
      console.error(err);
    }
  };

  if (newState.member.user.bot || oldState.member.user.bot) {
    return;
  }

  if (newState.channel && newState.channel.members.size === 1) {
    return playAudio(newState.channel);
  }

  if (oldState.channel && oldState.channel.members.size === 1) {
    return playAudio(oldState.channel);
  }
};
