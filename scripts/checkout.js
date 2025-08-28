import { renderOrderSummary } from './checkout/orderSummary.js'
import { renderPaymentSummary } from './checkout/paymentSummary.js'
import { loadProducts, loadProductsFetch } from '../data/products.js'
import { loadCart } from '../data/cart.js'
// import '../data/cart-class.js' 
// import '../data/backend-practice.js'


async function loadPage() {
  try {
    // throw manually create an error
    // throw 'error1'          

    await loadProductsFetch()

    const value = await new Promise((resolve, reject) => {
      // throw 'error2'
      
      loadCart(() => {
        // reject('error3') // throw error
        resolve('value3')
      })
    })
  } catch (error) {  // Error Handling
    console.log('unexpected error. Pleae try again later.')
  }

  renderOrderSummary()
  renderPaymentSummary()
}
loadPage()



// Promise.all run multiple promises at a time 
/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve()
    })
  })
]).then((values) => {
  console.log(values)
  renderOrderSummary()
  renderPaymentSummary()
})
  */


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
  renderOrderSummary()
  renderPaymentSummary()
})
  */


/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary()
    renderPaymentSummary()
  })
})
  */
