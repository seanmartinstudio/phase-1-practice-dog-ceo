console.log('%c HI', 'color: firebrick')
const dogImgContainer = document.getElementById("dog-image-container")
console.log(dogImgContainer)

//URL 1
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
    const imgTag = document.createElement('img')
    imgTag.src = picURL
    console.log(imgTag)
    dogImgContainer.appendChild(imgTag)
}
