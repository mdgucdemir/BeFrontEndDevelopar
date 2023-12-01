export const fetchApi = async (media, mediaType) => {
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

export const searchFetchApi = async (query, pageNum) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2MwZjA5MGI1NTc2MWIxMmU2ZGViZmNiYTE5NGUzYyIsInN1YiI6IjY1M2JlYjQ5YmMyY2IzMDEyYzMwYTYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k7xUd3UEeRVHZdDi0M5hrnx5nXvEtSX_MYCEIggmmGs",
    },
  };

  return fetch(
    `https://api.themoviedb.org/3/search/multi?query=${query}&language=en-US&page=${pageNum}`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export const fetchDetails = async (mediaType, id) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2MwZjA5MGI1NTc2MWIxMmU2ZGViZmNiYTE5NGUzYyIsInN1YiI6IjY1M2JlYjQ5YmMyY2IzMDEyYzMwYTYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k7xUd3UEeRVHZdDi0M5hrnx5nXvEtSX_MYCEIggmmGs",
    },
  };

  return fetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}?language=en-US`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
};

export const fetchCredits = async (mediaType, id) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2MwZjA5MGI1NTc2MWIxMmU2ZGViZmNiYTE5NGUzYyIsInN1YiI6IjY1M2JlYjQ5YmMyY2IzMDEyYzMwYTYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k7xUd3UEeRVHZdDi0M5hrnx5nXvEtSX_MYCEIggmmGs",
    },
  };

  return fetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}/credits?language=en-US`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
};
