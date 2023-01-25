const bcrypt = require("bcrypt");

const password = "yo no hablo tacataca"

let promise = new Promise(function (resolve, reject) {
    bcrypt.hash(password, 5, (err, encryp) => {
        if (err) {
            reject(err)
        }
        resolve(encryp);
    });
});

promise.then((result) => {
    passwordHash = result;
    console.log(result);
    savetoDatabase(result);
}).catch((e) => {
    console.log(e)
})

function savetoDatabase(result) {
    console.log("Password saved")
}

