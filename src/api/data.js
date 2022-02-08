const data = {
  getAllCountries: () => {
    const countries = [];
    fetch("https://covid-19-data.p.rapidapi.com/country?name=italy", {
	  "method": "GET",
	  "headers": {
		  "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		  "x-rapidapi-key": "51c2189321msh191185f09980577p12c48bjsn8fb8069234b3"
	  }
    }).then(response => {
	    return response.json();
    }).then(
      jsonResponse => {
        console.log(jsonResponse)
      }
    ).catch(err => {
	    console.error(err);
    });
  }
};
export default data;