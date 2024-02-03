let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides(); // Initial call to start the slideshow

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrollPosition = window.scrollY;

  // Add 'fixed' class to header when scrolled down, remove it when scrolled to the top
  if (scrollPosition > 0) {
      header.classList.add('fixed');
  } else {
      header.classList.remove('fixed');
  }
});

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrollPosition = window.scrollY;

  // Add 'transparent' class to header when scrolled down, remove it when scrolled to the top
  if (scrollPosition > 0) {
      header.classList.add('transparent');
  } else {
      header.classList.remove('transparent');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const starContainer = document.getElementById('star-container');
  const ratingInput = document.getElementById('rating-input');

  // Create 5 stars dynamically
  for (let i = 1; i <= 5; i++) {
    const starInput = document.createElement('input');
    starInput.type = 'radio';
    starInput.id = 'star' + i;
    starInput.name = 'star-rating';
    starInput.value = i;

    const starLabel = document.createElement('label');
    starLabel.htmlFor = 'star' + i;

    starContainer.appendChild(starInput);
    starContainer.appendChild(starLabel);
  }

  // Event listener to update hidden input value on star click
  starContainer.addEventListener('change', function(event) {
    const selectedRating = event.target.value;
    ratingInput.value = selectedRating;
  });
});
