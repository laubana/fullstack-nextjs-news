import { notFound } from "next/navigation";
import { NEWS } from "@const/news";

export default ({ params }) => {
  const slug = params.slug;

  const news = NEWS.find((news) => news.slug === slug);

  if (!news) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${news.image}`} alt={news.title} />
        <h1>{news.title}</h1>
        <time dateTime={news.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
};
