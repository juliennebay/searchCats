function loadScript(){
   const button = document.getElementsByTagName("button")[0];
   
   function underConstruction(){
       const message = document.getElementsByTagName("p")[0]
       message.textContent = "site under construction. check back l8r"
   }

   button.addEventListener("click", underConstruction)
}
document.addEventListener("DOMContentLoaded", loadScript)