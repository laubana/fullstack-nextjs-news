"use client";

import { notFound, useRouter } from "next/navigation";
import { NEWS } from "@const/news";

export default ({ params }) => {
  const slug = params.slug;

  const router = useRouter();

  const news = NEWS.find((news) => news.slug === slug);

  if (!news) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back}>
        <div className="modal">
          <img
            className="fullscreen-image"
            src={`/images/news/${news.image}`}
            alt={news.title}
          />
        </div>
      </div>
    </>
  );
};
