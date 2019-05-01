const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYW50b25zb3MiLCJhIjoiY2p2MTFoM21nMDZ0NzN5cnR2andqbnJnNSJ9.ZLRtXO4iUqaueXhhrQ4L4w&language=ru&limit=1`

    request({ url, json: true }, (error, res) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (!res.body.features.length) {
            callback('Doesn\'t have location. Try anuther search', undefined)
        } else {
            callback(undefined, {
                location: res.body.features[0].place_name,
                longitude: res.body.features[0].center[1],
                latitude: res.body.features[0].center[0],
            })
        }
    })
}

module.exports = geocode