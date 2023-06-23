'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   // console.log(request);

//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // const curr = Object.keys(data.currencies)[0];
//     // console.log(Object.keys(data.currencies)[0]);
//     const html = `
//   <article class="country">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)}M people</p>
//     <p class="country__row"><span>🗣️</span>${
//       data.languages[Object.keys(data.languages)[0]]
//     }</p>
//     <p class="country__row"><span>💰</span>${
//       data.currencies[Object.keys(data.currencies)[0]].name
//     }</p>
//   </div>
// </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${
        data.languages[Object.keys(data.languages)[0]]
      }</p>
      <p class="country__row"><span>💰</span>${
        data.currencies[Object.keys(data.currencies)[0]].name
      }</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
/*
const getCountryAndNeighbour = function (country) {
  //AJAX cll country 1
  const request = new XMLHttpRequest();
  // console.log(request);

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // const curr = Object.keys(data.currencies)[0];
    // console.log(Object.keys(data.currencies)[0]);

    //Render Country 1
    renderCountry(data);

    //get neighbour country 2
    const [neighbour] = data.borders;

    if (!neighbour) return;

    //AJAX cll country 2
    const request2 = new XMLHttpRequest();
    // console.log(request);

    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');
// getCountryAndNeighbour('germany');
*/

//OLD XML way
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// MOdern way of making AJAX call - fetch api

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(
//       response => {
//         console.log(response);
//         if (!response.ok)
//           throw new Error(`Country not found ${response.status}`);
//         return response.json();
//       }
//       //,err => alert(err)
//     )
//     .then(data => {
//       renderCountry(data[0]);
//       // console.log(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       //country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       console.log(response);
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       // console.log(data[0]);
//       renderCountry(data[0], 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err}👍`);
//       renderError(`something went wrong ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       // console.log(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error('no neighbour found');

//       //country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })

//     .then(data => {
//       // console.log(data[0]);
//       renderCountry(data[0], 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err}👍`);
//       renderError(`something went wrong ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('germany');
// });

//Coding Challenge 1

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=15862110326232523093x123851`
//   )
//     .then(response => {
//       console.log(response);
//       console.log(typeof response.status);
//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${response.status}`);
//       if (response.status === 403) throw new Error('limit your request');

//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       if (data.hasOwnProperty('success') && data.error.code === '006')
//         throw new Error('limit your request');
//       console.log(`You are in ${data.city}, ${data.country}`);
//       const countrynew = data.country;
//       console.log(countrynew);

//       return fetch(`https://restcountries.com/v3.1/name/${countrynew}`);
//     })
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0]);
//     })
//     .catch(err => console.log(err.message));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// console.log('test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('resolver promise 1').then(res => console.log(res));
// console.log('test end');
/*
const prom = new Promise(function (resolve, reject) {
  console.log('lootery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('won the lottery');
    } else {
      reject(new Error('lost'));
    }
  }, 2000);
});

prom.then(res => console.log(res)).catch(err => console.error(err));
// console.log(prom);

//promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('1 second');
    return wait(1);
  })
  .then(() => {
    console.log('2 second');
    return wait(1);
  })
  .then(() => {
    console.log('3 second');
    return wait(1);
  })
  .then(() => console.log('4 second'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem')).catch(x => console.error(x));
*/

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );
// console.log('getting position');
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      console.log(pos.coords);
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=15862110326232523093x123851`
      );
    })

    .then(response => {
      console.log(response);
      console.log(typeof response.status);
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      if (response.status === 403) throw new Error('limit your request');

      return response.json();
    })
    .then(data => {
      console.log(data);
      if (data.hasOwnProperty('success') && data.error.code === '006')
        throw new Error('limit your request');
      console.log(`You are in ${data.city}, ${data.country}`);
      const countrynew = data.country;
      console.log(countrynew);

      return fetch(`https://restcountries.com/v3.1/name/${countrynew}`);
    })
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
    })
    .catch(err => console.log(err.message));
};

btn.addEventListener('click', whereAmI);

*/
/*
const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imagePath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imagePath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('image 1 loaded');
    return wait(2);
  })
  .then(() => {
    console.log('time');
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
*/
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
/*
const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=15862110326232523093x123851`
    );
    if (!resGeo.ok) throw new Error('problem getting location data');
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('prolem getting country');
    console.log(res);
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
    return `you are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.log(err);
    renderError(`${err.message}`);

    //reject promise returned from aysnc function
    throw err;
    //if we want to still catch the error then we need to rethrow the error
  }
};*/
/*
console.log('1:starting');
// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then(res => console.log(res))
//   .catch(err => console.error(err.message))
//   .finally(() => console.log('3:of wherea m ifiniahed'));
//even if there is an error in aync function its promise is still fulfilled and not rejected it will return undefined then block is executed and not he catch block even if there is an error
//if we want to still catch the error then we need to rethrow the error
console.log('3:finished');

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (error) {
//   alert(error.message);
// }

// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(err.message))
//   .finally(() => console.log('3:of wherea m ifiniahed'));
//converting it into async await
(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (error) {
    console.error(error.message);
  }
  console.log('3:of wherea m ifiniahed');
})();
*/
/*
const get3countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // console.log(data1);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // console.log(data2);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log(data3);
    // console.log([data1.capital[0], data2.capital[0], data3.capital[0]]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data);
    console.log(data.map(d => d[0].capital[0]));
  } catch (error) {
    console.error(error.message);
  }
};

get3countries('portugal', 'canada', 'tanzania');
*/

//Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/egypt`),
//     getJSON(`https://restcountries.com/v3.1/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();
/*
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/mexico`),
  timeout(0.5),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/
/*
//Promise.allSettled
Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('anothone one'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

Promise.all([
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('anothone one'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//Promise.any
Promise.any([
  Promise.reject('error'),
  Promise.resolve('anothone one'),
  Promise.resolve('success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/
const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imagePath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imagePath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;
const loadNPause = async function () {
  try {
    //load img 1
    const img = await createImage('img/img-1.jpg');
    console.log('image 1 loaded');
    await wait(2);
    console.log('time');
    img.style.display = 'none';

    //load img 2
    const img2 = await createImage('img/img-2.jpg');
    console.log('image 2 loaded');
    await wait(2);
    img2.style.display = 'none';
  } catch (error) {
    console.error(error.message);
  }
};
// loadNPause();
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async function (arr) {
      await createImage(arr);
    });
    console.log(imgs);
  } catch (error) {
    console.error(error.message);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
