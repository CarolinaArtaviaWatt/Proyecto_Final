const hobbyId = "div-img-hobby";
const petId = "div-img-mascota";
const travelId = "div-img-paseo";
const btnHobbyId = "btn-hobby";
const btnPetId = "btn-mascota";
const btnTravelId = "btn-paseo";

function showPhotosSection(btnClicked) {
    switch(btnClicked) {
        case 1: handleClick(btnHobbyId,btnPetId,btnTravelId,hobbyId,petId,travelId); break;
        case 2: handleClick(btnPetId,btnHobbyId,btnTravelId,petId,hobbyId,travelId); break;
        case 3: handleClick(btnTravelId,btnHobbyId,btnPetId,travelId,petId,hobbyId); break;
    }
}

function handleClick(btnClicked, secondBtn, thirdBtn, divToShow, divTwo, divThree) {
    //add show style to selected div
    document.getElementById(divToShow).style.display = "inline";

    //hide other divs
    document.getElementById(divTwo).style.display = "none";
    document.getElementById(divThree).style.display = "none";

    //add class name to clicked button
    document.getElementById(btnClicked).classList.add("selected");

    //remove class name from other buttons
    document.getElementById(secondBtn).classList.remove("selected");
    document.getElementById(thirdBtn).classList.remove("selected");
}