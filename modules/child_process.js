const {exec} = require("child_process");

let cb = function(err, stdout, sterr) {
    if (err) {
        console.error(err)
        return false
    }
    console.log(stdout);
}
exec("git push origin main", cb)