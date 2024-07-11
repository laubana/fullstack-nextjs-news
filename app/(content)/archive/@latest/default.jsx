import { Suspense } from "react";
import Loader from "@components/Loader/Loader";
import NewsList from "@components/NewsList/NewsList";
import { getLatestNews } from "@services/news";

const News = async () => {
  const news = await getLatestNews();

  return <NewsList news={news} />;
};

export default async () => {
  return (
    <>
      <h2>Latest News</h2>
      <Suspense fallback={<Loader />}>
        <News />
      </Suspense>
    </>
  );
};
