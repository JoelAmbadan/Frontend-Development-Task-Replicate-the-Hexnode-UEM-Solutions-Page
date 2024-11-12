// Function to add the class on scroll
function handleScroll() {
    const header = document.getElementById("navHeader");
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  
window.addEventListener("scroll", handleScroll);


  