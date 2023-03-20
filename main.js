const collectAllObj = [];
const collectItems = document.getElementsByTagName('input')
const showItem = document.getElementById('showItems')
const form = document.getElementById('form')

form.addEventListener("submit", (event) => {
  event.preventDefault()
  form.reset()
})

// const SubmitItem = () => {
//   const payLoad = {
//     title: collectItems[0].value,
//     author: collectItems[1].value
//   }

//   collectAllObj.push(payLoad)

//   collectAllObj.forEach(item => {
//     showItem.innerHtml += ` <aside>
//       <h3>${item.title}</h3>
//       <p>${item.author}</p>
//       <button>Remove</button>
//     </aside>
//     <hr>`
//   })
// }