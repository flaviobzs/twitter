import { Router } from 'express';

import TweetController from './app/controllers/TweetController';
import LikeController from './app/controllers/LikeController';

const routes = Router();

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);
routes.post('/likes/:id', LikeController.store);

export default routes;
