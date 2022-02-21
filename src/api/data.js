import { config } from '../config';

const data = {
  popular: [
    { name: 'canada', src: 'src/img/canada.png' },
    { name: 'usa', src: '../../img/usa.jpeg' },
    { name: 'china', src: '../../img/china.png' },
    { name: 'iran', src: '../../img/iran.png' },
    { name: 'italy', src: '../../img/italy.png' },
    { name: 'spain', src: '../../img/spain.png' },
    { name: 'france', src: '../../img/france.png' },
    { name: 'germany', src: '../../img/germany.png' },
  ],
  search: async (name) => {
    const response = await fetch(
      `https://covid-19-data.p.rapidapi.com/country?name=${name}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
          'x-rapidapi-key': config.apikey,
        },
      }
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  },
  searchFlag: async (country) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  },
};
export default data;
