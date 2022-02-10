const data = {
  popular: [
    { name: "Canada", src: "../../img/canada.jpeg" },
    { name: "USA", src: "../../img/usa.jpeg" },
    { name: "China", src: "../../img/china.jpeg" },
    { name: "Iran", src: "../../img/iran.jpeg" },
    { name: "Italy", src: "../../img/italy.jpeg" },
    { name: "Spain", src: "../../img/spain.jpeg" },
    { name: "France", src: "../../img/france.jpeg" },
    { name: "Russia", src: "../../img/russia.jpeg" },
  ],
  search: async (name) => {
    const response = await fetch(`https://covid-19-data.p.rapidapi.com/country?name=${name}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "51c2189321msh191185f09980577p12c48bjsn8fb8069234b3"
      }
    });
    const jsonResponse = await response.json();
    return jsonResponse;
  },
  searchFlag: (country) => {
    //fetch(`https://restcountries.com/v3.1/name/${country}`)
  },
};
export default data;
