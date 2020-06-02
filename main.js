const sumOfDigits = n => [...n + ''].map(Number).reduce((a, b) => a + b, 0)

const alternatingSumOfDigits = input => {
  let flag = true
  let total = 0
  let arr = digitsArr(input)
  for (i = 0; i < arr.length; i++ ) {
    if (!flag) {
      total -= arr[i]
    } else {
      total += arr[i]
    }
    flag = !flag
  }
  return total
}

const digitsArr = n => Array.from(String(n), Number)

const multipliedLastDigit = (n, multiplier, sign) => {
  let arr = digitsArr(n)
  let lastDigit = arr.pop()
  if (sign === "+") {
    return Number(arr.join(''))+(lastDigit*multiplier)
  } else if (sign === "-") {
    return Number(arr.join(''))-(lastDigit*multiplier)
  }
}

const divByNumber = (numerator, denominator) => {
    if (Number.isInteger(numerator/denominator)) {
        return true
    } else {
        return false
    }
}

//////////////////
//////////////////



// const divByEleven = input => {
//   let value = alternatingSumOfDigits(input)
//   return divByNumber(value, 11)
// }



const threeFunc = input => divByNumber(sumOfDigits(input), 3)

const eleven = {
  number: 11,
  lastDigitMultiplier: 1,
  lastDigitSign: "-"
}

const seventeen = {
  number: 17,
  lastDigitMultiplier: 5,
  lastDigitSign: "-"
}

const twentyOne = {
  number: 21,
  lastDigitMultiplier: 2,
  lastDigitSign: "-"
}

const twentySeven = {
  number: 27,
  lastDigitMultiplier: 8,
  lastDigitSign: "-"
}

const twentyNine = {
  number: 29,
  lastDigitMultiplier: 3,
  lastDigitSign: "+"
}

const thirtyOne = {
  number: 31,
  lastDigitMultiplier: 3,
  lastDigitSign: "-"
}

const thirtyThree = {
  number: 33,
  lastDigitMultiplier: 10,
  lastDigitSign: "+"
}

///

const mainFunc = (input, numberObj) => {
  const {
    number,
    lastDigitMultiplier,
    lastDigitSign
  } = numberObj

  let value =
    multipliedLastDigit(
      input,
      lastDigitMultiplier,
      lastDigitSign
    )

  return divByNumber(value, number)
}