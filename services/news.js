import { NEWS } from "@const/news";

export const getAllNews = () => {
  return NEWS;
};

export const getLatestNews = () => {
  return NEWS.slice(0, 3);
};

export const getAvailableNewsYears = () => {
  return NEWS.reduce((years, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
};

export const getAvailableNewsMonths = (year) => {
  return NEWS.reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
};

export const getNewsForYear = (year) => {
  return NEWS.filter((news) => new Date(news.date).getFullYear() === +year);
};

export const getNewsForYearAndMonth = (year, month) => {
  return NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
};
