const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5cc0f090b55761b12e6debfcba194e3c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500lImage: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;