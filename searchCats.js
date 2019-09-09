function loadScript() {
    const button = document.getElementsByTagName("button")[0];
    const input = document.querySelector("#desired-search")
    const loading = document.querySelector(".loading")
    loading.hidden = true

    function search(){
        const ul = document.querySelector(".search-results")
        // clear old results, if any
        Array.from(ul.children).forEach(e => e.remove())

        const queryURL = input.value.length ? 
         "https://api.thecatapi.com/v1/breeds/search?q=" + input.value :
         "https://api.thecatapi.com/v1/breeds"  

        loading.hidden = false
        button.disabled = true

        fetch(queryURL)
            .then(response => response.json())
            .then(breeds => {
                loading.hidden = true
                button.disabled = false
                if (breeds.length === 0) {
                    const li = document.createElement("li") 
                    li.textContent = "no results found" 
                    li.classList.add("list-group-item")
                    ul.appendChild(li)   
                } else {
                    breeds.forEach(breed => {
                        const li = document.createElement("li") 
                        li.textContent = breed.name //some breed
                        li.classList.add("list-group-item")
                        ul.appendChild(li)  
                    })
                }
              })
    }
    button.addEventListener("click", search)
}
document.addEventListener("DOMContentLoaded", loadScript)