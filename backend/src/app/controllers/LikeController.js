import Tweet from '../schemas/Tweet';

class TweetController {
  async store(req, res) {
    const tweet = await Tweet.findById(req.params.id); //TODO buscar tweet pelo id com o dado vindo do parametro da requisição

    tweet.set({ likes: tweet.likes + 1 }); //TODO atualizar um dado do tweet encontrado

    await tweet.save(); //TODO salvar a modificação no tweet

    // req.io.emit('like', tweet);

    return res.json(tweet); //TODO retornar o tweet
  }
}

export default new TweetController();
