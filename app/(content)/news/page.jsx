import NewsList from "@components/NewsList/NewsList";
import { NEWS } from "@const/news";

export default () => {
  const news = NEWS;

  return (
    <>
      <h1>News</h1>
      <NewsList news={news} />
    </>
  );
};
