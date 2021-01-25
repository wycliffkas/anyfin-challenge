const axios = require("axios");

module.exports = {
  searchCountry: async (request, response) => {
    const name = request.params.name;
    await axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(result => {
        response.send(result.data)
    }).catch(error => {
        console.log(error)
    })
  },
};
