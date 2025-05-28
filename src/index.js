document.addEventListener("DOMContentLoaded", function () {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const imageContainer = document.getElementById("dog-image-container");
  const breedList = document.getElementById("dog-breeds");
  const breedDropdown = document.getElementById("breed-dropdown");
  let allBreeds = [];
  fetch(imgUrl)
    .then((res) => res.json())
    .then((json) =>
      json.message.forEach((dogImageUrl) => {
        const image = document.createElement("img");
        image.src = dogImageUrl;
        image.alt = "Different types of dog breeds";
        imageContainer.appendChild(image);
      })
    );
  fetch(breedUrl)
    .then((res) => res.json())
    .then((json) => {
      allBreeds = Object.keys(json.message);
      allBreeds.forEach((breedName) => {
        const listOfDogs = document.createElement("li");
        listOfDogs.textContent = breedName;
        listOfDogs.addEventListener("click", function () {
          listOfDogs.style.color = "pink";
        });
        breedList.appendChild(listOfDogs);
      });
      breedDropdown.addEventListener("change", function () {
        const selectedLetter = breedDropdown.value;
        const filteredBreeds = allBreeds.filter(
          (breed) => breed[0].toLowerCase() === selectedLetter.toLowerCase()
        );

        breedList.innerHTML = "";

        filteredBreeds.forEach((breed) => {
          const listOfDogs = document.createElement("li");
          listOfDogs.textContent = breed;
          listOfDogs.addEventListener("click", function () {
            listOfDogs.style.color = "pink";
          });
          breedList.appendChild(listOfDogs);
        });
      });
    });
});

console.log("%c HI", "color: firebrick");
