const Keyword = require('../models/keyword');

const getAllPopularKeywords = async ({ skip = 0, limit = 10, searchText = '', sortBy = 'label', filter = {} }) => {
    try {
        const query = {}
        if (searchText) query.$text = { $search: searchText }

        Object.assign(query, filter)

        const totalCount = await Keyword.countDocuments(query)

        let findQuery = Keyword.find(query)
            .skip(parseInt(skip))
            .sort(sortBy)

        if (parseInt(limit) > 0) findQuery = findQuery.limit(parseInt(limit))

        const data = await findQuery;

        return { totalCount, data }
    } catch (error) {
        throw error;
    }
};


module.exports = { getAllPopularKeywords };
