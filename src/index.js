console.log('%c HI', 'color: firebrick')

//Challenge #1
//This function fetches the images from the URL, converts JSON data to a variable and iterates...
//over each image with a forEach loop.
function getDataChallenge1() {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const promise1 = fetch(imgUrl)
.then(response => response.json())
.then(data => {
    const dogPics = data
    dogPics.message.forEach(picURL => renderImage(picURL))

    
})
}
getDataChallenge1()

//This function should build out the DOM elements
function renderImage(picURL) {
    const dogImgContainer = document.getElementById("dog-image-container")
    const imgTag = document.createElement('img')
    imgTag.src = picURL
    dogImgContainer.appendChild(imgTag)
}

//Challenge #2
//This function fetches the breed names from the API and iterates over them with a forEach loop
function getDataChallenge2() {
fetch('https://dog.ceo/api/breeds/list/all')
.then(response => response.json())
.then(data => {
    const dogData = data
    const dogDataObject = Object.entries(dogData.message)
    dogDataObject.forEach(breeds => renderBreeds(breeds))
})
}
getDataChallenge2()

//This function renders the breed names to the DOM
function renderBreeds(breeds) {
    const breedNameContainer = document.getElementById('dog-breeds')
    let li = document.createElement('li')
    li.textContent = breeds
    breedNameContainer.appendChild(li)  
}

// //Challenge #3
// function eventListener()
// document.addEventListener('click', (event) => {
//     console.log("hello")
// })