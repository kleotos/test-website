// ================= DEFAULT DISABLE ====================
document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});


// =================== IMAGE CARD =========================
document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.getElementById("cardContainer");
    const imageUrls = [
      "./assets/1.jpeg",
      "./assets/1.jpeg",
      "./assets/1.jpeg"
    ];
  
    imageUrls.forEach(function(url) {
      const card = document.createElement("div");
      card.classList.add("card");
      const img = document.createElement("img");
      img.src = url;
      card.appendChild(img);
      cardContainer.appendChild(card);
    });
  });



// ======================= SLIDER N CLOSE ===================================
  const slideElement = document.getElementById("slide-in");
  const closeElement = document.getElementById("close");
  
  closeElement.addEventListener("click", () => {
    slideElement.style.display = "none";
  });
  
  function showSlideElement() {
    slideElement.style.display = "block";
    slideElement.style.opacity = "1";
    slideElement.style.transition = "opacity 0.5s ease-in-out";
    setTimeout(() => {
        slideElement.style.transition = "opacity 0.5s";
        slideElement.style.opacity = "0";
    }, 5000);
  }
  
  function repeatSlideEffect() {
      let count = 0;
      let maxCount = 3;
      let interval = 3000; // 3 seconds
  
      function repeat() {
          if (count < maxCount) {
              showSlideElement();
            count++;
              setTimeout(repeat, interval + 5000); // 5 seconds + 3 seconds interval
          }
      }
      repeat();
  }
  
  setTimeout(repeatSlideEffect, 0); // Run on page load
  
  