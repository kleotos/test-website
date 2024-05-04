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
  