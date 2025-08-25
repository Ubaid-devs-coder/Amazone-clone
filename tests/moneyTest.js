//  Testing frameworks Jasmine , Jest for(ReactJS)


import {formatCurrency} from '../scripts/utils/money.js'

console.log('test suit: formatcurrency')

console.log('converts cents into dollars')

if (formatCurrency(2095) === '20.95'){
  console.log('pased')
} else{
  console.log('failed')
}

console.log('Round up nearest cents')

if (formatCurrency(2000.5) === '20.01'){
  console.log('pased')
} else{
  console.log('failed')
}

console.log('works with 0')

if (formatCurrency(0) === '0.00'){
  console.log('pased')
} else{
  console.log('failed')
}

