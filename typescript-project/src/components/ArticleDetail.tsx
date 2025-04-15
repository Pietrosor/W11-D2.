import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

interface Article {
  id: string
  title: string
  summary: string
  publishedAt: string
  image_url: string
}

function ArticleDetail() {
  const { id } = useParams<{ id: string }>()
  const [article, setArticle] = useState<Article | null>(null)

  useEffect(() => {
    async function getArticle() {
      if (id) {
        try {
          const response = await fetch(
            `https://api.spaceflightnewsapi.net/v4/articles/${id}`
          )
          const data: Article = await response.json()
          setArticle(data)
        } catch (error) {
          console.error("Errore nel caricamento dell'articolo:", error)
        }
      }
    }
    getArticle()
  }, [id])

  if (!article) {
    return <p>Caricamento...</p>
  }

  return (
    <div className="container my-4">
      <img
        src={article.image_url || "https://dummyimage.com/600x400/000/fff"}
        alt={article.title}
        className="img-fluid rounded mb-4"
        style={{ maxHeight: "300px", objectFit: "cover", width: "100%" }}
      />
      <h1 className="mb-3">{article.title}</h1>
      <p className="mb-3">
        <strong>Data di pubblicazione:</strong>{" "}
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>
      <p>{article.summary}</p>
    </div>
  )
}

export default ArticleDetail
