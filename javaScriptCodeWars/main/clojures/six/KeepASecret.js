/**
 * Kata url - https://www.codewars.com/kata/can-you-keep-a-secret
 *
 * Description:
 * There's no such thing as private properties on a coffeescript object! But, maybe there are?
 * Implement a function createSecretHolder(secret) which accepts any value as secret and
 * returns an object with ONLY two methods
 *
 * getSecret() which returns the secret
 * setSecret() which sets the secret
 *
 * obj = createSecretHolder(5)
 * obj.getSecret() # returns 5
 * obj.setSecret(2)
 * obj.getSecret() # returns 2
 *
 */

function createSecretHolder(secret) {
    let hideSecret = secret;
    return {
        getSecret: () => hideSecret,
        setSecret: (value) => hideSecret = value
    }
}

let con = createSecretHolder(5);
con.setSecret(9);
console.log(con.getSecret());
module.exports = {createSecretHolder};