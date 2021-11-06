const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = (passTimes) => {
  for (const pass of passTimes) {
    const date = new Date(pass.risetime);
    console.log(`Next pass at ${date} for ${pass.duration} seconds!`);
  }
}

nextISSTimesForMyLocation()
.then((passTimes) => {
  printPassTimes(passTimes);
})
.catch((error) => {
  console.log("It didn't work: ", error);
})
