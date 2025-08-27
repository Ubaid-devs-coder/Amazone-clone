// using browser = get request
const xhr = new XMLHttpRequest()   // new http msg to send to the backend

xhr.addEventListener('load', () => {
  console.log(xhr.response)
})

xhr.open('GET', 'https://supersimplebackend.dev')   // (type of http msg, where to send this http msg)
xhr.send()
