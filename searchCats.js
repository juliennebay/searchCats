function loadScript(){
   const button = document.getElementsByTagName("button")[0];
   
   function search(){
       const ul = document.querySelector(".search-results")
       // clear old results, if any
       Array.from(ul.children).forEach(e => e.remove())
       
       // adding new search results. these 3 lines will run for each result (per breed)
       fetch("https://api.thecatapi.com/v1/breeds")
            .then(response => response.json())
            .then(breeds => breeds.forEach(breed => {
                const li = document.createElement("li") 
                li.textContent = breed.name //some breed
                ul.appendChild(li)  
            }))
   }

   button.addEventListener("click", search)
}
document.addEventListener("DOMContentLoaded", loadScript)