import dbConfig from "@configs/dbConfig";
import News from "@models/news";

export const getAllNews = async () => {
  await dbConfig.connect();

  const existingNewsList = await News.find().lean();

  return existingNewsList;
};

export const getNewsItem = async (newsId) => {
  await dbConfig.connect();

  const existingNewsItem = await News.findById(newsId).lean();

  return existingNewsItem;
};

export const getLatestNews = async () => {
  await dbConfig.connect();

  const existingNewsList = await News.find().sort({ date: -1 }).limit(3).lean();

  return existingNewsList;
};

export const getAvailableNewsYears = async () => {
  await dbConfig.connect();

  const existingDates = await News.distinct("date").lean();

  const years = [
    ...new Set(existingDates.map((existingDate) => existingDate.slice(0, 4))),
  ];

  return years;
};

export const getAvailableNewsMonths = async (year) => {
  await dbConfig.connect();

  const existingDates = await News.find({
    date: new RegExp(`^${year}`),
  })
    .distinct("date")
    .lean();

  const months = [
    ...new Set(existingDates.map((existingDate) => existingDate.slice(5, 7))),
  ];

  return months;
};

export const getNewsForYear = async (year) => {
  await dbConfig.connect();

  const existingNews = await News.find({ date: new RegExp(`^${year}`) })
    .sort({
      date: -1,
    })
    .lean();

  return existingNews;
};

export const getNewsForYearAndMonth = async (year, month) => {
  await dbConfig.connect();

  const existingNews = await News.find({
    date: new RegExp(`^${year}-${month}`),
  })
    .sort({
      date: -1,
    })
    .lean();

  return existingNews;
};
