//Toggle Quokka.js
const randomKeys = [
  {
    id: 'bravo',
    used: false,
  },
  {
    id: 'delta',
    used: false,
  },
  {
    id: 'hotel',
    used: false,
  },
];

const availableKeys = () => {
  return randomKeys.filter(function (key) {
    return key.used === false;
  });
};

console.log(availableKeys());

const isAvailable = (keyInput) => {
  value = availableKeys().filter(function (key) {
    return key.id === keyInput && !key.used;
  });
  return value.length != 0 ? value[0] : false;
};

console.log(isAvailable('bravo'));

const setUsed = (entry) => {
  if (entry == false) return false;
  entry.used = true;
  entry.time = new Date().toLocaleString();
};

//simulating request of url with id
const request = (key) => {
  return setUsed(isAvailable(key)) != false ? 'granted' : 'expired';
};

for (let query of ['bravo', 'bravo', 'hotel', 'hotel', 'oscar', 'romeo']) {
  console.log(request(query));
}

console.log(randomKeys);
console.log(availableKeys());
