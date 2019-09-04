function loadScript(){
   const button = document.getElementsByTagName("button")[0];
   
   function search(){
       const ul = document.querySelector(".search-results")
       // clear old results, if any
       Array.from(ul.children).forEach(e => e.remove())
       
       // adding new search results
       const li = document.createElement("li")
       li.textContent = new Date()
       ul.appendChild(li)  
   }

   button.addEventListener("click", search)
}
document.addEventListener("DOMContentLoaded", loadScript)