const weightedChoice = require("../util/weightedChoice");

module.exports = async (oldState, newState) => {
  const playAudio = async (voiceChannel) => {
    try {
      setTimeout(async () => {
        try {
          const connection = await voiceChannel.join();
          const audioToPlay = weightedChoice([
            { value: "./audio/hi.mp3", weight: 1200 },
            { value: "./audio/fools.mp3", weight: 1 },
            { value: "./audio/falling.mp3", weight: 1 },
            { value: "./audio/life.mp3", weight: 1 },
          ]);
          connection.play(audioToPlay).on("finish", () => {
            connection.disconnect();
          });
        } catch (err) {
          console.error(err);
          console.error("Couldn't play");
        }
      }, 1000);
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
