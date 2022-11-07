import {articles} from '../../../data'
// can make database calls in here.

export default function handler(req, res) {
  res.status(200).json(articles);
}

//GET req to http://localhost:3000/api/articles