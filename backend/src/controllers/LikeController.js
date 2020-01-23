import Tweet from '../schemas/Tweet';

class TweetController {
  async store(req, res) {
    const tweet = await Tweet.findById(req.params.id);

    tweet.set({ likes: tweet.likes + 1 }); // atualizar um dado

    await tweet.save();

    // req.io.emit('like', tweet);

    return res.json(tweet);
  }
}

export default new TweetController();
