import { connect } from "@configs/db";
import News from "@models/news";

export const getAllNews = async () => {
  await connect();

  const existingNewsList = await News.find().lean();

  return existingNewsList;
};

export const getNewsItem = async (slug) => {
  await connect();

  const existingNewsItem = await News.findOne({ slug }).lean();

  return existingNewsItem;
};

export const getLatestNews = async () => {
  await connect();

  const existingNewsList = await News.find().sort({ date: -1 }).limit(3).lean();

  return existingNewsList;
};

export const getAvailableNewsYears = async () => {
  await connect();

  const existingDates = await News.distinct("date").lean();

  const years = [
    ...new Set(existingDates.map((existingDate) => existingDate.slice(0, 4))),
  ];

  return years;
};

export const getAvailableNewsMonths = async (year) => {
  await connect();

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
  await connect();

  const existingNews = await News.find({ date: new RegExp(`^${year}`) })
    .sort({
      date: -1,
    })
    .lean();

  return existingNews;
};

export const getNewsForYearAndMonth = async (year, month) => {
  await connect();

  const existingNews = await News.find({
    date: new RegExp(`^${year}-${month}`),
  })
    .sort({
      date: -1,
    })
    .lean();

  return existingNews;
};
