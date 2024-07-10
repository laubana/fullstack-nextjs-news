import Link from "next/link";
import NewsList from "@components/NewsList/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@services/news";

export default ({ params }) => {
  const filter = params.filter;

  const year = filter?.[0];
  const month = filter?.[1];

  if (
    (year && !getAvailableNewsYears().includes(+year)) ||
    (month && !getAvailableNewsMonths.includes(+month))
  ) {
    throw new Error("Invalid Filter");
  }

  let news;
  let links;
  if (year && !month) {
    news = getNewsForYear(year);
    links = getAvailableNewsMonths(year);
  } else if (year && month) {
    news = getNewsForYearAndMonth(year, month);
    links = [];
  } else {
    links = getAvailableNewsYears();
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link, index) => {
              const href = year
                ? `/archive/${year}/${link}`
                : `/archive/${link}`;

              return (
                <li key={index}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {news && 0 < news.length ? (
        <NewsList news={news} />
      ) : (
        <p>No News Found</p>
      )}
    </>
  );
};
