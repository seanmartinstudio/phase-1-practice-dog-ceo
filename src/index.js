console.log('%c HI', 'color: firebrick')
// const dogImgContainer = document.getElementById("dog-image-container")
// console.log(dogImgContainer)

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
function getDataChallenge2() {
fetch('https://dog.ceo/api/breeds/list/all')
.then(response => response.json())
.then(data => {
    const dogData = data
    const dogDataObject = Object.entries(dogData.message)
    dogDataObject.forEach(breeds => rednerBreeds(breeds))
    
})
}
getDataChallenge2()

function rednerBreeds(breeds) {
    const breedNameContainer = document.getElementById('dog-breeds')
    const li = document.createElement('li')
    li.src = breeds
    breedNameContainer.appendChild(li)
}
