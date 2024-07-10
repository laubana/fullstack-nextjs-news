import NewsList from "@components/NewsList/NewsList";
import { getLatestNews } from "@services/news";

export default () => {
  const news = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={news} />
    </>
  );
};
