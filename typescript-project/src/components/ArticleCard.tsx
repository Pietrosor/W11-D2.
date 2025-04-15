import { Article } from "./Article"
import { Link } from "react-router-dom"

interface Props {
  article: Article
}

function ArticleCard({ article }: Props) {
  return (
    <div className="card h-100" style={{ maxWidth: "18rem" }}>
      <img
        src={article.image_url || "https://dummyimage.com/600x400/000/fff"}
        className="card-img-top"
        alt={article.title || "Immagine non disponibile"}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p
          className="card-text text-truncate"
          style={{ maxHeight: "4rem", overflow: "hidden" }}
        >
          {article.summary}
        </p>
        <Link to={`/articles/${article.id}`} className="btn btn-primary btn-sm">
          Leggi di più
        </Link>
      </div>
    </div>
  )
}

export default ArticleCard
