import { notFound } from "next/navigation";
import { Suspense } from "react";

import Loader from "@components/Loader/Loader";
import Modal from "@components/Modal/Modal";
import { getNewsItem } from "@services/news";

const Image = async ({ newsId }) => {
  const newsItem = await getNewsItem(newsId);

  if (!newsItem) {
    notFound();
  } else {
    return (
      <img
        className="fullscreen-image"
        src={newsItem.imageUrl}
        alt={newsItem.title}
      />
    );
  }
};

export default async ({ params }) => {
  const newsId = params.newsId;

  return (
    <Modal>
      <Suspense fallback={<Loader />}>
        <Image newsId={newsId} />
      </Suspense>
    </Modal>
  );
};
