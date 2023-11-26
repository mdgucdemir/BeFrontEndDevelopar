export const fetchApi = (media, mediaType) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2MwZjA5MGI1NTc2MWIxMmU2ZGViZmNiYTE5NGUzYyIsInN1YiI6IjY1M2JlYjQ5YmMyY2IzMDEyYzMwYTYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k7xUd3UEeRVHZdDi0M5hrnx5nXvEtSX_MYCEIggmmGs",
    },
  };

  return (
    fetch(
      `https://api.themoviedb.org/3/${media}/${mediaType}?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      // .then(data => console.log(data.results))
      .then((data) => {
        return data?.results;
      })
      .catch((err) => {
        console.error(err);
        return [];
      })
  );
};
