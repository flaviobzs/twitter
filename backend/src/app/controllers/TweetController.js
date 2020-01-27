import Tweet from '../schemas/Tweet';

class TweetController {
  async index(req, res) {
    const tweets = await Tweet.find({}).sort('-createdAt'); //TODO buscar todos os tweets em ordem decrescente

    return res.json(tweets); //TODO retornar os tweets
  }

  async store(req, res) {
    const tweet = await Tweet.create(req.body); //TODO criar um tweet com os dados do corpo da requisição

    // req.io.emit('tweet', tweet);

    return res.json(tweet); //TODO retornar o tweet
  }
}

export default new TweetController();
