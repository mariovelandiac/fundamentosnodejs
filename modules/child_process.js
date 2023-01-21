const {exec} = require("child_process");

let cb = function(err, stdout, sterr) {
    if (err) {
        console.error(err)
        return false
    }
    console.log(stdout);
}
exec("git add .; git commit -m 'adentrándonos en en los modulos de node'", cb)