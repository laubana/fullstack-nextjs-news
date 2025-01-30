import { notFound } from "next/navigation";
import { Suspense } from "react";

import Loader from "@components/Loader/Loader";
import Modal from "@components/Modal/Modal";
import { getNewsItem } from "@services/news";

const Image = async ({ slug }) => {
  const newsItem = await getNewsItem(slug);

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
  const slug = params.slug;

  return (
    <Modal>
      <Suspense fallback={<Loader />}>
        <Image slug={slug} />
      </Suspense>
    </Modal>
  );
};
