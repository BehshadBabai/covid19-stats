const data = {
  popular: [
    {name: 'Canada',src:'../../img/canada.jpeg'},
    {name: 'USA',src:'../../img/usa.jpeg'},
    {name: 'China',src:'../../img/china.jpeg'},
    {name: 'Iran',src:'../../img/iran.jpeg'},
    {name: 'Italy',src:'../../img/italy.jpeg'},
    {name: 'Spain',src:'../../img/spain.jpeg'},
    {name: 'France',src:'../../img/france.jpeg'},
    {name: 'Russia',src:'../../img/russia.jpeg'}
  ],
  search: (country) => {
    fetch(`https://covid-19-data.p.rapidapi.com/country?name=${country}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "51c2189321msh191185f09980577p12c48bjsn8fb8069234b3",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  searchFlag: (country) => [

  ]
};
export default data;
