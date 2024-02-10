import axios from "axios";

const header = {"content-type" : "application/json"}

const endpoint = "nelladevelopment.database.windows.net"

var userLogin = (payload) => {
    console.log("userLogin is logged successfully")

    const config = {
        method: "POST",
        url: endpoint + "/Login",
        data: payload,
        crossdomain: true,
        header: header
    };
    return axios(config);
}
const currentUser = (payload) => {
    console.log("Current user is Logged in")

    const config = {
        method: "GET",
        url: endpoint + "/current",
        data: payload,
        crossdomain: true,
        header: header
    };
    return axios(config);
}

const userService = {currentUser, userLogin};

export default userService;