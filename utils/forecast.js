const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/4f0d934d43c709035cff78f1edd46def/${longitude},${latitude}?units=si`

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Doesn\'t have location. Try anuther search', undefined)
        } else {
            callback(undefined, body.currently)
        }
    })
}

module.exports = forecast