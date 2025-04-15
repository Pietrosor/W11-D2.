import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"

interface Article {
  id: string
  title: string
  summary: string
  publishedAt: string
  image_url: string
}

function Home() {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    async function getArticles() {
      try {
        const response = await fetch(
          "https://api.spaceflightnewsapi.net/v4/articles"
        )
        const data = await response.json()
        console.log("Dati ricevuti:", data)

        if (Array.isArray(data.results)) {
          setArticles(data.results)
        } else {
          console.error("La proprietà 'results' non è un array:", data.results)
        }
      } catch (error) {
        console.error("Errore nel caricamento degli articoli:", error)
      }
    }
    getArticles()
  }, [])

  return (
    <div className="container">
      <h1 className="my-4 text-center">Spaceflight News</h1>
      <div className="row">
        {articles.map((article) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={article.id}>
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
