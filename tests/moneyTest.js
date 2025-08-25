import {formatCurrency} from '../scripts/utils/money.js'

console.log('test suit: formatcurrency')

if (formatCurrency(2095) === '20.95'){
  console.log('pased')
} else{
  console.log('failed')
}

if (formatCurrency(2000.5) === '20.01'){
  console.log('pased')
} else{
  console.log('failed')
}

if (formatCurrency(0) === '0.00'){
  console.log('pased')
} else{
  console.log('failed')
}

