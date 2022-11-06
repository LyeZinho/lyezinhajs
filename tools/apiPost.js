//Send post request to the API
// url: -> process.env.URL + process.env.API_SECRET + (endpoint)
// data: -> data to send

const axios = require("axios");

async function post(endpoint, data) {
    url = "https://lyezinha.vercel.app/api"
    try {
        const response = await axios.post(url + endpoint, data);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}

post("/servers/setCount", 
    {count: 1}
).then((response) => {
    console.log(response.data);
});

