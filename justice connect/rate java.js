function rate(stars) {
    const starElements = document.getElementsByClassName('star');
    
    for (let i = 0; i < starElements.length; i++) {
      const star = starElements[i];
      
      if (i < stars) {
        star.classList.add('gold');
      } else {
        star.classList.remove('gold');
      }
    }
  }
  