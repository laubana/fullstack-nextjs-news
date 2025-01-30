import { Suspense } from "react";

import Loader from "@components/Loader/Loader";
import NewsList from "@components/NewsList/NewsList";
import { getAllNews } from "@services/news";

const News = async () => {
  const news = await getAllNews();

  return <NewsList news={news} />;
};

export default async () => {
  return (
    <>
      <h1>News</h1>
      <Suspense fallback={<Loader />}>
        <News />
      </Suspense>
    </>
  );
};
