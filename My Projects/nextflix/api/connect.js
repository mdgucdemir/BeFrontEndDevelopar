const baseUrl = "https://api.themoviedb.org/3/";
const accessToken = process.env.NEXT_PUBLIC_TMDBI_TOKEN;

// fetch api
export const fetchEndPoint = async (mediaType) => {
  try {
    const response = await fetch(`${baseUrl}${mediaType}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Fetch Error:", error);
    return [];
  }

  // await fetch(baseUrl + mediaType + "?" + `page=${page_Nummber}`, {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     // console.log(data);
  //     return data;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     return [];
  //   });
};

//Images
export const apiImage = {
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,
};
