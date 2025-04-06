// header code hidden nav bar and show nav bar

const mobileBtn = document.querySelector("#mobile-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const insuranceStart = document.querySelector("#insurance-start");
const primaryGoal = document.querySelector("#primary-goal-second");
const preferPremium = document.querySelector("#prefer-premium-third");
const sectionGlobal = document.querySelector("#section-global-third");
const reCheck = document.querySelector("#re-check-third");
var countImage=1;

// Get the image element by id
let imgElement = document.getElementById("dynamicImage");
imgElement.src = `./assets/${countImage}.png`; 

// Set the source dynamically using template literals
mobileBtn.addEventListener("click", () =>
  mobileMenu.classList.toggle("hidden")
);
const menuList = () => mobileMenu.classList.add("hidden");

// hidden insurance and show primary goal
const insuranceHidden = () => {
    countImage=countImage==2?1:2
    
    insuranceStart.classList.toggle("hidden")
    imgElement.src = `./assets/${countImage}.png`; 

    primaryGoal.classList.toggle("hidden")
};
const preferPremiumHiddenAndShow=()=>{
    countImage=countImage==3?2:3
    primaryGoal.classList.toggle("hidden")
    imgElement.src = `./assets/${countImage}.png`; 

    preferPremium.classList.toggle("hidden")
}
const reCheckToggle=()=>{
    countImage=1
    sectionGlobal.classList.toggle("hidden")
    reCheck.classList.toggle("hidden")
}





