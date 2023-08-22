document.addEventListener("DOMContentLoaded", () => {
  const productImgContents = document.querySelectorAll(".product_img_content");
  const cartIcons = document.querySelectorAll(".cart-icon");

  productImgContents.forEach((imgContent, index) => {
      imgContent.addEventListener("mouseover", () => {
          cartIcons[index].style.display = "block";
      });

      imgContent.addEventListener("mouseout", () => {
          cartIcons[index].style.display = "none";
      });
  });
});

const bar = document.querySelector(".uil-bars");
const cross = document.querySelector(".uil-multiply");
const list = document.querySelector(".logo-nav");

if (window.matchMedia("(max-width: 1024px)").matches){
    bar.addEventListener('click', ()=>{
    list.style.display = "flex"; 
});
cross.addEventListener('click', ()=>{
    list.style.display = "none"; 
});
};
