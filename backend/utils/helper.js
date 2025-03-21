const otherHelper = {};

otherHelper.sendResponse = (res, status, data, errors, msg, token) => {
    const response = {};
    if (data !== null) response.data = data;
    if (errors !== null) response.errors = errors;
    if (msg !== null) response.msg = msg;
    if (token !== null) response.token = token;
    return res.status(status).json(response);
};

export default otherHelper;