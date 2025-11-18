const Benchmark = require('benchmark');
const crypto = require('crypto');


function hashPasswordBcrypt(password) {
    return crypto.pbkdf2Sync(password, 'salt', 10000, 64, 'sha512').toString('hex');
}

function hashPasswordArgon2(password) {
  
    return crypto.scryptSync(password, 'salt', 64).toString('hex');

}

const start = Date.now();
for (let i= 0; i< 100; i++) {
    hashPasswordBcrypt(password);
}

const end = Date.now()

timeDelta = end - start;
throughput = timeDelta / 100


function generateRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
}

const suite = new Benchmark.Suite;

const password = generateRandomString(12);


suite.add('Bcrypt Hashing', function() {
  hashPasswordBcrypt(password);
})
.add('Argon2 Hashing', function() {
  hashPasswordArgon2(password);
}).on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });


