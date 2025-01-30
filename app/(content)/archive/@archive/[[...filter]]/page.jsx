import Link from "next/link";
import { Suspense } from "react";

import Loader from "@components/Loader/Loader";
import NewsList from "@components/NewsList/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@services/news";

const Links = async ({ year, month }) => {
  let links;
  if (year && !month) {
    links = await getAvailableNewsMonths(year);
  } else if (year && month) {
    links = [];
  } else {
    links = await getAvailableNewsYears();
  }

  return (
    <ul>
      {links.map((link, index) => {
        const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

        return (
          <li key={index}>
            <Link href={href}>{link}</Link>
          </li>
        );
      })}
    </ul>
  );
};

const News = async ({ year, month }) => {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  } else {
  }

  return news && 0 < news.length ? (
    <NewsList news={news} />
  ) : (
    <p>No News Found</p>
  );
};

export default async ({ params }) => {
  const filter = params.filter;

  const year = filter?.[0];
  const month = filter?.[1];

  return (
    <>
      <header id="archive-header">
        <nav>
          <Suspense fallback={<Loader />}>
            <Links year={year} month={month} />
          </Suspense>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <News year={year} month={month} />
      </Suspense>
    </>
  );
};
