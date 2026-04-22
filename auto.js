const totalSales = document.querySelector("#total_sales_value")
const itemSold = document.querySelector("#items_sold_value")
const cost = document.querySelector("#revenue_value")
const startButton = document.querySelector("#start_auto_button")
const stopButton = document.querySelector("#stop_button")
const resetButton = document.querySelector("#reset_button")
const productList = document.querySelector("#products_list")

let intervalId = null

startButton.addEventListener("click", function () {
  const cars = ["Toyota Camry", "Honda Civic", "Ford Mustang", "Tesla Model 3", "Chevrolet Corvette"]

  let final_sale = []
  let items = []
  let cost1 = []

  for (let x = 1; x <= 5; x++) {
    final_sale.push(x)
    items.push(x)
    cost1.push(x * 100)
  }

  let index = 0
  let growingList = ""   // this will accumulate items

  clearInterval(intervalId)

  intervalId = setInterval(() => {
    totalSales.innerText = final_sale[index]
    itemSold.innerText = items[index]
    cost.innerText = cost1[index]

    // Add the next car to the growing list
    growingList += `<li>${cars[index]}</li>`

    // Update the list in the DOM
    productList.innerHTML = `<ul>${growingList}</ul>`

    index++

    if (index >= final_sale.length) {
      clearInterval(intervalId)
    }
  }, 3000)
})
