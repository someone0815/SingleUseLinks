//Toggle Quokka
const randomHashes = [
  {
    text: '4gSdW',
    isUsed: false,
  },
  {
    text: 'zPFcM',
    isUsed: false,
  },
  {
    text: 'NMp7T',
    isUsed: false,
  },
];

const availableHashes = randomHashes
  .filter(function (hash) {
    return hash.isUsed === false;
  })
  .map(function (hash) {
    return hash;
  });
console.log(availableHashes);

const isAvailable = (hashInput) => {
  ret = availableHashes.filter(function (hash) {
    return hash.text === hashInput && !hash.isUsed;
  });
  // return availableHashes.indexOf(ret.text);
  return ret.length != 0 ? ret : false;
};
console.log(isAvailable('NMp7T'));

const setUsed = (entry) => {
  console.log(entry[0]);
  entry[0] != undefined
    ? (entry[0].isUsed = true)
    : console.warn('entry not defined');
  // entry[0].isUsed = true;
};

const queryReqSim = (hash) => {
  let isAvailableBool = isAvailable(hash) != false ? true : false;
  setUsed(isAvailable(hash));
  return isAvailableBool === true ? 'entry granted' : 'expired';
};

//simulating request of url with key
console.log(queryReqSim('44444')); //first   httpRequest
console.log(queryReqSim('4gSdW')); //second  httpRequest
console.log(queryReqSim('NMp7T')); //third   httpRequest
console.log(queryReqSim('NMp7T')); //fourth  httpRequest
console.log(queryReqSim('zPFcM')); //fifth   httpRequest
console.log(queryReqSim('zPFcM')); //sixth   httpRequest

console.log(randomHashes);
