import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import Loader from "@components/Loader/Loader";
import { getNewsItem } from "@services/news";

const News = async ({ newsId }) => {
  const newsItem = await getNewsItem(newsId);

  if (!newsItem) {
    notFound();
  } else {
    return (
      <article className="news-article">
        <header>
          <Link href={`/news/${newsItem._id}/image`}>
            <img src={newsItem.imageUrl} alt={newsItem.title} />
          </Link>
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
      </article>
    );
  }
};

export default async ({ params }) => {
  const newsId = params.newsId;

  return (
    <Suspense fallback={<Loader />}>
      <News newsId={newsId} />
    </Suspense>
  );
};
