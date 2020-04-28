import axios from 'axios'

// const Url = 'https://coronavirusapi.com'
export const GetByCountry = (country) => {

    const slugCountry = country.replace(' ', '-')
    return axios.get(`https://api.covid19api.com/total/country/${slugCountry}`, {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
}