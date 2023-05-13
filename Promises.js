const promise1 = new Promise((resolve, reject) => {
    const number = Math.random();

    setTimeout(() => {
        if(number> 0.5) {
            resolve(number);
        } else {
            reject(number);
        }
    }, 3000);
});
  

//Use
// promise1.then((data) => {
//     console.log("success", data);
// }).catch((err) => {
//     console.log("fail", err);
// })

//Promise.all
//Promise.race
// console.log("promise", promise1);

//
const resolveAfter2s = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done in 2 second");
        }, 2000);
    });
}

