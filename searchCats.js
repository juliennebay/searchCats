function loadScript() {
    const button = document.getElementsByTagName("button")[0];
    const input = document.querySelector("#desired-search")
   
    function search(){
        const ul = document.querySelector(".search-results")
        // clear old results, if any
        Array.from(ul.children).forEach(e => e.remove())

        const queryURL = input.value.length ? 
         "https://api.thecatapi.com/v1/breeds/search?q=" + input.value :
         "https://api.thecatapi.com/v1/breeds"  

        fetch(queryURL)
            .then(response => response.json())
            .then(breeds => {
                if (breeds.length === 0) {
                    const li = document.createElement("li") 
                    li.textContent = "no results found" 
                    ul.appendChild(li)   
                } else {
                    breeds.forEach(breed => {
                        const li = document.createElement("li") 
                        li.textContent = breed.name //some breed
                        ul.appendChild(li)  
                    })
                }
              })
    }
    button.addEventListener("click", search)
}
document.addEventListener("DOMContentLoaded", loadScript)