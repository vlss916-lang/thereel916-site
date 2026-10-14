/* Brand settings: one place to change the name and tagline.
   The HTML already contains the final text (better for SEO). This script just keeps
   any element marked data-brand / data-tagline in sync if you change the values below. */
const BUSINESS_NAME = "TheReel916";
const TAGLINE = "Real reels for the 916.";

(function () {
  document.querySelectorAll("[data-brand]").forEach(function (el) { el.textContent = BUSINESS_NAME; });
  document.querySelectorAll("[data-tagline]").forEach(function (el) { el.textContent = TAGLINE; });
})();
