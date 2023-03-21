const collectAllObj = [];
const collectItems = document.getElementsByTagName('input')
const showItem = document.getElementById('showItems')
const form = document.getElementById('form')

form.addEventListener("submit", (event) => {
  event.preventDefault()
  SubmitItem()
  form.reset()
  ShowItem()
})

function SubmitItem() {
  const payLoad = {
    title: collectItems[0].value,
    author: collectItems[1].value
  }
  collectAllObj.push(payLoad)
  localStorage.setItem('payLoad', JSON.stringify(collectAllObj))
}

function ShowItem() {
  showItem.innerHTML = ''
  const getpayLoad = JSON.parse(localStorage.getItem('payLoad'))
  getpayLoad.forEach((item, index) => {
    showItem.innerHTML += ` <aside>
      <h3>${item.title}</h3>
      <p>${item.author}</p>
      <button onclick="removeItem(${index})">Remove</button>
    </aside>
    <hr>`
  })
} ShowItem()

function removeItem(params) {
  const storage = JSON.parse(localStorage.getItem('payLoad'))
  storage.splice(params, 1)
  localStorage.setItem('payLoad', JSON.stringify(storage))
  ShowItem() 
}
