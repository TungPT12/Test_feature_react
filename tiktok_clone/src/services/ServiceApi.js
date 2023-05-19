

const loginUsers = [
    {username: "TungPT", password: "TungPT12345", avatar: "https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/71101379_944636199227991_5193408517985271808_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2Z5nTd0Vd5IAX9itS0K&tn=EzqlHbKIHtNvnywS&_nc_ht=scontent.fsgn2-2.fna&oh=00_AfAGPYp_EJFOaWy0lwdVwaLlot8OUP9NWGSZZxlioaW_kQ&oe=63E0F29F"},
    {username: "Tung", password: "123456", avatar: "https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/71101379_944636199227991_5193408517985271808_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2Z5nTd0Vd5IAX9itS0K&tn=EzqlHbKIHtNvnywS&_nc_ht=scontent.fsgn2-2.fna&oh=00_AfAGPYp_EJFOaWy0lwdVwaLlot8OUP9NWGSZZxlioaW_kQ&oe=63E0F29F"}
];

const login = (username, password) => {
    let user = loginUsers.find( (loginUser) => {
        return (loginUser.username === username && loginUser.password === password) ? loginUser : null
    })
    return user;
}

export {
    login,
    // searchUserLessApi
};

