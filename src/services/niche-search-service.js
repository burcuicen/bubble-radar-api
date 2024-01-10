const NicheSearch = require('../models/niche-search');

const NicheSearchService = {

    // Create a new NicheSearch
    create: async (data) => {
        try {
            const newNicheSearch = new NicheSearch(data);
            return await newNicheSearch.save();
        } catch (error) {
            throw error;
        }
    },

    // Delete a NicheSearch by ID
    deleteById: async (id) => {
        try {
            const result = await NicheSearch.findByIdAndDelete(id);
            if (!result) {
                throw new Error('NicheSearch not found');
            }
            return result;
        } catch (error) {
            throw error;
        }
    },

    // Update a NicheSearch by ID
    updateById: async (id, data) => {
        try {
            const updatedNicheSearch = await NicheSearch.findByIdAndUpdate(id, data, { new: true });
            if (!updatedNicheSearch) {
                throw new Error('NicheSearch not found');
            }
            return updatedNicheSearch;
        } catch (error) {
            throw error;
        }
    },

    // Get all NicheSearch entries
    getAll: async () => {
        try {
            return await NicheSearch.find({});
        } catch (error) {
            throw error;
        }
    },

    // Get a NicheSearch by ID
    getById: async (id) => {
        try {
            const nicheSearch = await NicheSearch.findById(id);
            if (!nicheSearch) {
                throw new Error('NicheSearch not found');
            }
            return nicheSearch;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = NicheSearchService;
