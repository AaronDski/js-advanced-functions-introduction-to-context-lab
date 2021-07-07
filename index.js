// Your code here
document.addEventListener("DOMContentLoaded", () => {

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    function getJson(url) {
        fetch(url)
        .then(res => res.json())
        .then(results => {renderDogs(results.message)
        console.log(results)})

    }

    getJson("https://dog.ceo/api/breeds/image/random/4")

    function renderDogs(dogsArray){
        let imageContainer = document.querySelector('#dog-image-container')

        dogsArray.forEach(image => {
            let img = document.createElement('img')
            img.src = image
            imageContainer.append(img)
        });

    }






    
})




// const imgUrl = "https://dog.ceo/api/breeds/image/random/4" ;
    
//     let startDogimg = document.createElement('img')

//     function fetchAllDogs(){
//         fetch(imgUrl)
//         .then(resp => resp.json())
//         .then(json => json.forEach(renderImg));

//     }
//     function renderImg(){
//         let dogPic = document.createElement('img')
//         dogPic.className = 'dog1'
//         dogPic.src = imgUrl
        
//         // console.log(dogPic)
        
//     }

    
// function createPriorityDropdown() {
//     let dropdown = document.createElement("select");
//     let highPriority = document.createElement("option");
//     let mediumPriority = document.createElement("option");
//     let lowPriority = document.createElement("option");
//     let form = document.querySelector("#create-task-form");
//     dropdown.id = "dropdown";
//     highPriority.textContent = "HIGH";
//     mediumPriority.textContent = "MEDIUM";
//     lowPriority.textContent = "LOW";
//     dropdown.appendChild(highPriority);
//     dropdown.appendChild(mediumPriority);
//     dropdown.appendChild(lowPriority);
//     // form.appendChild(dropdown);
//   }

