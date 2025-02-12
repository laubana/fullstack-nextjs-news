import { notFound } from "next/navigation";

import { getNewsItem } from "@services/news";

export default async ({ params }) => {
  const newsId = params.newsId;

  const newsItem = await getNewsItem(newsId);

  if (!newsItem) {
    notFound();
  }

  return (
    <div>
      <img
        className="fullscreen-image"
        src={newsItem.imageUrl}
        alt={newsItem.title}
      />
    </div>
  );
};
