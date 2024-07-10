import { notFound } from "next/navigation";
import { NEWS } from "@const/news";

export default ({ params }) => {
  const slug = params.slug;

  const news = NEWS.find((news) => news.slug === slug);

  if (!news) {
    notFound();
  }

  return (
    <div>
      <img
        className="fullscreen-image"
        src={`/images/news/${news.image}`}
        alt={news.title}
      />
    </div>
  );
};
