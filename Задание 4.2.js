const apiResponse = {
    statusCode: 200,
    data: {
        user: {
            username: "qa_ninja",
            role: "admin",
            contacts: {
                email: "admin@test.com",
                phone: "+123456789"
            }
        }
    }
};
const { data: { user: { username, role, contacts: { email } } } } = apiResponse;
console.log(username, role, email);