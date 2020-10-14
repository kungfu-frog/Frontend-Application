const updateUser = (user) => {
    if (!user.email)
        Promise.reject({status: 404, error: "Email Required"});
    if (!user.password)
        Promise.reject({status: 404, error: "Email Required"});
    if (!user.firstname)
        Promise.reject({status: 404, error: "Email Required"});
    if (!user.lastname)
        Promise.reject({status: 404, error: "Email Required"});
    if (!user.street)
        Promise.reject({status: 404, error: "Email Required"});
    if (!user.house)
        Promise.reject({status: 404, error: "Email Required"});
    if (!user.postal)
        Promise.reject({status: 404, error: "Email Required"});
    if (!user.country)
        Promise.reject({status: 404, error: "Email Required"});
    
    Promise.resolve({status: 200, message: "Successfully updated"});
}

export { updateUser };