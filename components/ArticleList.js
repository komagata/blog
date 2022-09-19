import { useState, useEffect } from 'react'
import { supabase } from '/lib/supabaseClient'
import Article from '/components/Article'

export default function ArticleList() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchArticleList()
  }, [])

  const fetchArticleList = async () => {
    let { data: articles, error } = await supabase.from('articles').select('*').order('id', true)
    if (error) {
      console.log('error', error)
    } else {
      setArticles(articles)
    }
    console.log(articles[0].title)
  }


  return (
    <ul>
      {articles.map((article) => {
        return (
          <Article key={article.id} article={article} />
        )
      })}
    </ul>
  )
}
