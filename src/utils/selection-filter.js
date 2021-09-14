export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: "Documentaries",
        // eslint-disable-next-line
        data: series.filter((item) => item.genre == "documentaries"),
      },
      {
        title: "Comedies",
        // eslint-disable-next-line
        data: series.filter((item) => item.genre == "comedies"),
      },
      {
        title: "Children",
        // eslint-disable-next-line
        data: series.filter((item) => item.genre == "children"),
      },
      {
        title: "Crime",
        // eslint-disable-next-line
        data: series.filter((item) => item.genre == "crime"),
      },
      {
        title: "Feel Good",
        // eslint-disable-next-line
        data: series.filter((item) => item.genre == "feel-good"),
      },
    ],
    films: [
      {
        title: "Drama",
        // eslint-disable-next-line
        data: films.filter((item) => item.genre == "drama"),
      },
      {
        title: "Thriller",
        // eslint-disable-next-line
        data: films.filter((item) => item.genre == "thriller"),
      },
      {
        title: "Children",
        // eslint-disable-next-line
        data: films.filter((item) => item.genre == "children"),
      },
      {
        title: "Suspense",
        // eslint-disable-next-line
        data: films.filter((item) => item.genre == "suspense"),
      },
      {
        title: "Romance",
        // eslint-disable-next-line
        data: films.filter((item) => item.genre == "romance"),
      },
    ],
  };
}
