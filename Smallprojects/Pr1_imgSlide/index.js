
const initSlider = () =>{
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButton = document.querySelectorAll(".slider-wrapper .slide-button");
    slideButton.forEach(button =>{
        button.addEventListener('click', ()=>{
            const direction = button.id === "prev-slide" ? -1:1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left:scrollAmount, behavior: "smooth"});
            console.log("hello whooood!");
        });
    });
}
window.addEventListener('load', initSlider);