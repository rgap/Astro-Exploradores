function stars() {
    let count = 40;
    let scene = document.querySelector(".hero-section");
    let i = 0;
    while (i < count) {
      let star = document.createElement("i");
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * window.innerHeight); // Random vertical position
  
      let duration =
        Math.random() * 10 + 5; /* Random duration between 5 and 15 seconds */
      let minSize = 2; // Minimum size of a star
      let maxSize = 10; // Maximum size of a star (you can adjust as needed)
      let size = Math.random() * (maxSize - minSize) + minSize;
  
      star.style.left = x + "px";
      star.style.top = y + "px"; // Use the random y position
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.animationDuration = duration + "s";
  
      scene.appendChild(star);
      i++;
    }
  }
  
  stars();