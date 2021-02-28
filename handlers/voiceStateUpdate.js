module.exports = async (_, newState) => {
  if (
    newState.member.voice.channel &&
    newState.member.voice.channel.members.size === 1
  ) {
    console.log("Joined a call");
    const connection = await newState.member.voice.channel.join();
    connection.play("./audio/hi.mp3").on("finish", () => {
      connection.disconnect();
    });
  }
};
