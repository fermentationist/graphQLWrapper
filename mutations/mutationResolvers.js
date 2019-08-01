const fetchREST = require("../fetchREST.js");

const curriedMutation = (type, crudOp) => {
    const mutation = async (root, args) => {
        let {id, ...body} = args;
        id = id ? id : "";
        const payload = crudOp === "DELETE" ? null : {[type]: body};
        const response = await fetchREST(`${type}s/${id}`, payload, crudOp);
        return response.message ? response.message : response[type];
    }
    return mutation;
}

module.exports = curriedMutation;