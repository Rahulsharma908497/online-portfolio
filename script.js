// Get references to navigation links and sections
const skillLink = document.getElementById("skill-link");
const skillsSection = document.getElementById("skills-section");

const homeLink = document.getElementById("home-link");
const homeSection = document.getElementById("home");

const contactLink = document.getElementById("contact-link");
const contactSection = document.getElementById("contacts-section");

// Hide all sections helper
function hideAllSections() {
  skillsSection.style.display = "none";
  contactSection.style.display = "none";
}

// Show Home (scroll to hero section)
homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  hideAllSections();
  homeSection.scrollIntoView({ behavior: "smooth" });
});

// Show Skills
skillLink.addEventListener("click", (e) => {
  e.preventDefault();
  hideAllSections();
  skillsSection.style.display = "block";
});

// Show Contact Info
contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  hideAllSections();
  contactSection.style.display = "block";
});
