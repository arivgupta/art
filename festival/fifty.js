function makeMarquee() {
  const title = "FIFTY Music Festival - November 10-12, Deset Valley";

  // Make a new empty array with 50 spaces in it and fill with the text, then join them together using -- as a separator
  const marqueeText = new Array(50).fill(title).join(" -- ");

  const marquee = document.querySelector(".marquee span");
  marquee.innerHTML = marqueeText;
}

makeMarquee();
