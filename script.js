// Wait for the DOM content to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", (event) => {
  // --- Set current year in footer ---
  const currentYearElement = document.getElementById("current-year");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  } else {
    console.warn("Element with ID 'current-year' not found.");
  }

  // --- Intersection Observer for fade-in sections ---
  const sections = document.querySelectorAll(".fade-in-section");

  // Configuration for the observer
  const observerOptions = {
    root: null, // Observes intersections relative to the document viewport
    rootMargin: "0px", // No margin around the viewport
    threshold: 0.1, // Trigger when 10% of the section is visible
  };

  // Callback function when an observed section intersects
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      // If the section is intersecting (visible)
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible"); // Add class to trigger animation

        // Optional: Stop observing the element after it becomes visible
        // to improve performance, uncomment the line below if needed.
        // observer.unobserve(entry.target);
      }
      // Optional: Remove the class if the element scrolls out of view upwards
      // This would make the animation re-trigger if scrolled back down.
      // else {
      //     entry.target.classList.remove('is-visible');
      // }
    });
  };

  // Create the Intersection Observer instance
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each section that has the '.fade-in-section' class
  sections.forEach((section) => {
    if (section) {
      observer.observe(section);
    }
  });

  // Note: Keyframe animations are now defined in style.css
  // No need to dynamically add the stylesheet here anymore.
}); // End of DOMContentLoaded listener
