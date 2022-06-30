const getAuthSession = (req) => {
    return req.session.auth;
}

export default getAuthSession;