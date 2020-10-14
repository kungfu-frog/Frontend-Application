const updateUser = (user) => {
    if (!user.email)
        return Promise.reject({status: 404, error: "Email Required"});
    if (!user.password)
        return Promise.reject({status: 404, error: "Email Required"});
    if (!user.firstname)
        return Promise.reject({status: 404, error: "Email Required"});
    if (!user.lastname)
        return Promise.reject({status: 404, error: "Email Required"});
    if (!user.street)
        return Promise.reject({status: 404, error: "Email Required"});
    if (!user.house)
        return Promise.reject({status: 404, error: "Email Required"});
    if (!user.postal)
        return Promise.reject({status: 404, error: "Email Required"});
    if (!user.country)
        return Promise.reject({status: 404, error: "Email Required"});
    
    return Promise.resolve({status: 200, message: "Successfully updated", user: user});
}

export { updateUser };