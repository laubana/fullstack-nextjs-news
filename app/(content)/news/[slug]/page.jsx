import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loader from "@components/Loader/Loader";
import { getNewsItem } from "@services/news";

const News = async ({ slug }) => {
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  } else {
    return (
      <article className="news-article">
        <header>
          <Link href={`/news/${newsItem.slug}/image`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
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
  const slug = params.slug;

  return (
    <Suspense fallback={<Loader />}>
      <News slug={slug} />
    </Suspense>
  );
};
