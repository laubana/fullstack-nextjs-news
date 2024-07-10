import Link from "next/link";

export default ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((newsItem, index) => (
        <li key={index}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
