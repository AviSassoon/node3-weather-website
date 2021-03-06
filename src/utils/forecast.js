const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/857178005fca239cdf27d998594ecc1f/'+ latitude +','+ longitude +''

    request({url, json: true}, (error, { body }) => {
        if (error){
            callback('Unable to connect to connect service!', undefined)
        } else if (body.error) {
            callback('Unable to find location, try again!', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently '+ body.currently.temperature +' degrees out. The high today is '+ body.daily.data[0].temperatureMax+' with a low of '+ body.daily.data[0].temperatureMin +'. There is a '+ body.currently.precipProbability +'% chance of rain' )
        }
    })
}


module.exports = forecast