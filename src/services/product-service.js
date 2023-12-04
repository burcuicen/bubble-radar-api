const Product = require('../models/product');

const getAllProducts = async ({ skip = 0, limit = 10, searchText = '', sortBy = 'label', filter = {} }) => {
    try {
        const query = {}
        if (searchText) query.$text = { $search: searchText }

        Object.assign(query, filter)

        const totalCount = await Product.countDocuments(query)

        let findQuery = Product.find(query)
            .skip(parseInt(skip))
            .sort(sortBy)

        if (parseInt(limit) > 0) findQuery = findQuery.limit(parseInt(limit))

        const data = await findQuery;

        return { totalCount, data }
    } catch (error) {
        throw error;
    }
};


module.exports = { getAllProducts };
