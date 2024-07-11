import sql from "better-sqlite3";

const db = sql("data.db");

export const getAllNews = async () => {
  const news = db.prepare("SELECT * FROM news").all();
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
};

export const getNewsItem = async (slug) => {
  const newsItem = db.prepare("SELECT * FROM news WHERE slug = ?").get(slug);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem;
};

export const getLatestNews = async () => {
  const latestNews = db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all();
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return latestNews;
};

export const getAvailableNewsYears = async () => {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year) => year.year);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return years;
};

export const getAvailableNewsMonths = async (year) => {
  return db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year)
    .map((month) => month.month);
};

export const getNewsForYear = async (year) => {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
};

export const getNewsForYearAndMonth = async (year, month) => {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
};
