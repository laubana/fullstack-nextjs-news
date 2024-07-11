import { notFound } from "next/navigation";
import { getNewsItem } from "@services/news";

export default async ({ params }) => {
  const slug = params.slug;

  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div>
      <img
        className="fullscreen-image"
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
      />
    </div>
  );
};
