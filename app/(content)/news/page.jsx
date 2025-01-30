import { Suspense } from "react";

import Loader from "@components/Loader/Loader";
import NewsList from "@components/NewsList/NewsList";
import { getAllNews } from "@services/news";

export const revalidate = 60;

export default async () => {
  const news = await getAllNews();

  return (
    <>
      <h1>News</h1>
      <Suspense fallback={<Loader />}>
        <NewsList news={news} />
      </Suspense>
    </>
  );
};
