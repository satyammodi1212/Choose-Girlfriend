let ratingEls = document.querySelectorAll(".rating");
let btnEl = document.getElementById("btn");

let containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEl) =>{
    ratingEl.addEventListener("click", (event) =>{
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});


btnEl.addEventListener("click",()=>{
    if(selectedRating !== ""){
        containerEl.innerHTML = `
        <strong>Thank you! </strong>
        <strong>Waah Kya Soch Hai Teri </strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>Chala Jaa Bsdk Teri Kismat Me Nahi Hai</p>
        `;
    }
})

function removeActive(){
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    });
}

