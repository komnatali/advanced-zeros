module.exports = function getZerosCount(number, base) {
    function findPrimeFactors(base){
      var primeFactors = {};
      var primeNumbers = "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97 101 103 107 109 113 127 131 137 139 149 151 157 163 167 173 179 181 191 193 197 199 211 223 227 229 233 239 241 251".split(' ').map(Number);
      var base2 = base;
      var currentPrimeNumber = 0;
      var div = primeNumbers[currentPrimeNumber];
      while (base2 != 1){
        var div = primeNumbers[currentPrimeNumber];
        if (base2 % div == 0){
          if (!(div in primeFactors)) primeFactors[div] = 0;
          while (base2 % div == 0){
            base2 /= div;
            primeFactors[div]++;
          }
        }
        currentPrimeNumber++;
      }
      return primeFactors;
  }

  function findPower(fact, div){
    var pow = 0;
    var divPow = div;
    while (fact/divPow != 0){
      pow += Math.floor(fact/divPow);
      divPow *= div;
    }
    return pow;
  }

var primeFactors = findPrimeFactors(base);
var maxPows = [];
for (prime in primeFactors) {
  maxPows.push(Math.floor(findPower(number, prime) / primeFactors[prime]));
}

return Math.min.apply(null, maxPows);
}