
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal");

  // Make everything visible if animations aren't supported.
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -30px 0px"
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });

  // Ensure the section linked in the URL is revealed.
  if (window.location.hash) {
    const target = document.querySelector(
      window.location.hash
    );

    if (target) {
      target.classList.add("is-visible");

      target.querySelectorAll(".reveal").forEach((element) => {
        element.classList.add("is-visible");
      });
    }
  }
});
