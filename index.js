const targetElement = document.querySelectorAll(".animationTarget");

// every per scroll
document.addEventListener('scroll', () => {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].
      getBoundingClientRect().top
    if (window.innerHeight)
      console.log(getElementDistance);
  }
})







// const text = $('.contents');
// let textIndex = -1;
// text.hide()

// function showNextText() {
//   textIndex++;
//   text.eq(textIndex % text.length).fadeIn(2000).delay(100).fadeOut(2000, showNextText);
// }
// showNextText();