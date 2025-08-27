import { renderOrederSummary } from './checkout/orderSummary.js'
import { renderPaymentSummary } from './checkout/paymentSummary.js'
import { loadProducts } from '../data/products.js'
import { loadCart } from '../data/cart.js'
// import '../data/cart-class.js' 
// import '../data/backend-practice.js'


// Promise.all run multiple promises at a time 
Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve('value1') // it passes value to next two .then
    })
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve()
    })
  })
]).then((values) => {
  console.log(values)
  renderOrederSummary()
  renderPaymentSummary()
})


/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1') // it passes value to next two .then
  })
}).then((value) => {
  console.log(value)
  return new Promise((resolve) => {
    loadCart(() => {
      resolve()
    })
  })
}).then(() => {
  renderOrederSummary()
  renderPaymentSummary()
})
  */


/*
loadProducts(() => {
  loadCart(() => {
    renderOrederSummary()
    renderPaymentSummary()
  })
})
  */
