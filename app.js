const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    return console.log('Please provide an address')
}

geocode(address, (error, {location, latitude, longitude}) => {
    if (error) {
        return console.log(error)
    }

    forecast(latitude, longitude, (error, {temperature}) => {
        console.log('Error', error)
        console.log('Data', temperature)
    })
})