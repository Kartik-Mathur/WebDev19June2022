// minimum to pay: 25, after 2 kms paise lagenge(10/km)
// time: 15min se upar 5/min
function calculateFare(km, mi) {
    let fare = 25;
    if (km > 2) fare += (km - 2) * 10
    if (mi > 15) fare += (mi - 15) * 5;
    return fare;
}

module.exports = calculateFare;