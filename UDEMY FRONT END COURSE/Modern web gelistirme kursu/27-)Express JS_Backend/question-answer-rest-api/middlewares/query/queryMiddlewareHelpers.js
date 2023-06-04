
const searchHelper = (searchKey,query,req) => {
    // Search
    if (req.query.search) {
        // title a gore ornek regex yazimi yapacagiz

        const searchObject = {};
        // title searchValue

        const regex = new RegExp(req.query.search,"i");
        searchObject[searchKey] = regex;

        return query.where(searchObject);
    }
    return query; // eger searchKey yok ise baslangic query imizi return etmemiz gerekiyor.
}

const populateHelper = (query,population) => {
    return query.populate(population);
}

const questionSortHelper = (query,req) => {
    // Sort Islemi [ (req.query.sortBy) most-answered || most-liked || hic bir sey verilmeyebilir]
    const sortKey = req.query.sortBy;

    if (sortKey === "most-answered") {
        return query.sort("-answerCount"); // bu islem mongoose ozelligidir. anserCount kucukten buyuge siralar -answerCount ise buyukten kucuge
    }
    if (sortKey === "most-liked") {
        return query.sort("-likeCount");
    }
    return query.sort("-createdAt");
}

const paginationHelper = async (totalDocuments,query,req) => {

    // Pagination
    const page = parseInt(req.query.page) || 1; // page verilmemis ise 1. sayfayi default olarak verdik
    const limit = parseInt(req.query.limit) || 5; // limit user tarafindan verilmemis ise default olarak 5 verdik

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const pagination = {};
    const total = totalDocuments;

    if(startIndex > 0) {
        pagination.previous = {
            page: page - 1,
            limit: limit
        }
    }

    if (endIndex < total){
        pagination.next = {
            page: page + 1,
            limit: limit
        }
    }  

    return {
        query: query === undefined ? undefined: query.skip(startIndex).limit(limit),
        pagination: pagination,
        startIndex,
        limit
    };
    
};

module.exports = {
    searchHelper,
    populateHelper,
    questionSortHelper,
    paginationHelper
}