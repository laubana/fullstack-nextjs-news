import Link from "next/link";

export default ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem._id}>
          <Link href={`/news/${newsItem._id}`}>
            <img src={newsItem.imageUrl} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
