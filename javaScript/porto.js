  const screenSize = document.getElementById('nav');
  const navCloseButton = document.getElementById('closebtn');
  const navIcon = document.getElementById('navIcon');
/*
  side Nav for Phone sizes and navLinks for Desktop sizes
*/

function respondToScreenSize () {
  if(innerWidth <= 1100) {
/*Remove any initial class of the element as we never want to have both
the phoneSize Navigation style and the Desktop style navigation style
at the same time*/
  screenSize.classList = "";
  screenSize.classList.add('sideNav');
  /*show the menu icon and sideMenu-cancel button on phone sizes*/
  navCloseButton.style.display = "block";
  navIcon.style.display = "block";
}else{
  // remove all classes again, we don't want both classes at once
  screenSize.classList = "";
  screenSize.classList.add('navLinks');
  /*Hide all the menu icon and sideMenu-cancel buttons for phone sizes */
  navCloseButton.style.display = "none";
  navIcon.style.display = "none";
  }
};
/*we call the function first on page load
am guessing you already know why you gotto do that.
okay, it's cuz you have no idea what screen size they'll load your page on
on-start-up
*/
respondToScreenSize();

/*Now lets add an event listener for the window  we know when the window is resized*/
window.addEventListener('resize',respondToScreenSize);

  const animation = document.querySelectorAll(".cardWrapper");
    animation.forEach(item => {
      item.classList.add('animation');
    });


/* Set the width of the side navigation to 250px */
function openNav() {
  //use 100% to cover the whole page
  document.getElementById("nav").style.width = "250px";
  //to use it with the pages main content use this :
  /* Set the width of the side navigation
   to 250px and the left margin of the page content to 250px */
  document.getElementById("main").style.marginLeft = "250px";
  //to highlight the main page whenn the side nav is open use :
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("nav").style.width = "0";
  //to use it with the main page use this :
  /* Set the width of the side navigation to 0 and the left margin
   of the page content to 0 */
  document.getElementById("main").style.marginLeft = "0";
  // to remove the background opacity use :
  //document.body.style.backgroundColor = "white";
}

console.log(window);
console.log(innerWidth);

/*Code for the homepage background*/

 const homeBackground = document.getElementById('homeBg');
          const images = ["url('./images/bg2.jpg')","url('./images/bg9.jpg')"];
          index = 0;

          function changeBackground(){
            // homeBackground.style.backgroundImage = "";
            if(index >= images.length){
              index = 0;
            }
            homeBackground.style.backgroundImage = images[index];
            index++;
            // change the wallpaper every 7 seconds
            setTimeout(changeBackground,7000);
          }

window.onload = () => {
  /*wait a while before animating bg since we already set a fallback background-image
  in the style.css file :)*/
    setTimeout(changeBackground,3000);
}


/*Smooth scroll to a view when a nav link is selected and is on that same page*/
function scrollToView(element){
  document.getElementById(element).scrollIntoView({
  behavior: 'smooth'
});
  console.log(document.getElementById(element));
}


// I'll be adding a sticky active menu later below..... using the observer  API
