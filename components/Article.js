export default function Article({article}) {
  console.log(article)
  return (
    <li>
      <div className="title">{article.title}</div>
      <div className="body">{article.body}</div>
    </li>
  )
}
