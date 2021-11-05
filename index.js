// index.js
const { fetchMyIP, fetchCoorsByIp, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
  
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoorsByIp('174.119.247.242', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , coordinates);
// });

// const coors = { latitude: '43.6508', longitude: '-79.4803' };
// fetchISSFlyOverTimes(coors, (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , coordinates);
// });

// const passTimes = [
//   { risetime: '1636217359', duration: '388' },
//   { risetime: '1636253759', duration: '152' },
//   { risetime: '1636290159', duration: '201' },
//   { risetime: '1636326559', duration: '573' },
//   { risetime: '1636362959', duration: '144' }
// ];

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (const time of passTimes) {
    const date = new Date(time.risetime);
    console.log(`Next pass at ${date} for ${time.duration} seconds!`);
  }
});