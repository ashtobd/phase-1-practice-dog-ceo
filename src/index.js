console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch(imgUrl)
    .then(response=>response.json())
    .then(data=>data.message.forEach(dog => processData(dog)))
function processData(dog) {
    const imgContainer = document.getElementById('dog-image-container')
    const newImage = document.createElement('img')
    newImage.src = dog
    imgContainer.append(newImage)
}

const breedUrl = "https://dog.ceo/api/breeds/list/all";
fetch(breedUrl)
    .then(response=>response.json())
    .then(data=>processBreeds(data))

function processBreeds(data) {
    const dogData = data.message
    const breeds = Object.keys(dogData)
    const subBreeds = Object.values(dogData)

    for (let i=0;i<subBreeds.length;i++){
        if(subBreeds[i].length > 0){
            subBreeds[i].forEach(item =>breeds.push(item))
        }
    }
    breeds.forEach(breed => listBreeds(breed))
}

function listBreeds(breed){
    const ulList = document.getElementById('dog-breeds')
    const newItem = document.createElement('li')
    newItem.className = 'breed'
    newItem.textContent = breed
    ulList.append(newItem)
}