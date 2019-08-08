const fetchREST = require("../fetchREST.js");

const getAll = type => {
    return async () => {
        const result = await fetchREST(type).then(data => {
            return data
        });
        return !result ? null : result.meta.total === "0" ? null : result[type];
    }
}

const getOne = type => {
    const query = async (root, args) => {
        const result = await fetchREST(`${type}s/${args.id}`).then(data => data);
        return !result ? null : result.message ? result.message : result[type];
    }
    return query
}

module.exports = {getAll, getOne};