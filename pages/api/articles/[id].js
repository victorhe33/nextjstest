import { articles } from '../../../data'
// can make database calls in here.

export default function handler({ query: { id } }, res) {
  const filtered = articles.filter(article => article.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({message: `Article with the id of ${id} is not found`})
  }
}

//GET req to http://localhost:3000/api/articles