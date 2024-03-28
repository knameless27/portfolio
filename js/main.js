// projects
const list = document.getElementById("list");
const badgesSkills = document.getElementById("badges-skills");

projects.forEach(({ name, image, url, description }, i) => {
  const container = createHtmlElement({
    classList: "job-text",
    tag: "a",
    id: `${name}-${i}`,
    href: url,
    blank: true,
  });

  const containerImg = createHtmlElement({ classList: "containerImg" });
  const containerText = createHtmlElement({ classList: "containerText" });

  const newImage = createHtmlElement({
    tag: "img",
    classList: "project-image",
    src: image,
    alt: name,
  });
  const title = createHtmlElement({
    tag: "h2",
    textContent: name,
  });
  const desc = createHtmlElement({ tag: "p", textContent: description });

  containerImg.appendChild(newImage);
  containerText.appendChild(title);
  containerText.appendChild(desc);
  container.appendChild(containerImg);
  container.appendChild(containerText);

  list.appendChild(container);
});

function generarLetrasRandom() {
  return (
    String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
    String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
    String.fromCharCode(65 + Math.floor(Math.random() * 26))
  );
}

skills.forEach((text, i) => {
  const badge = createHtmlElement({
    tag: "a",
    classList: "badge",
    id: `${text}-${i}-${generarLetrasRandom()}`,
    textContent: text,
    href: `https://www.google.com/search?q=${text}`,
    blank: true,
  });

  badgesSkills.appendChild(badge);
});

const badgesSkillsContainer = document.getElementById("badges-skills");

const badgesSkillsContent = badgesSkillsContainer.innerHTML;
badgesSkillsContainer.innerHTML += badgesSkillsContent;

function infiniteScroll() {
  if (
    badgesSkillsContainer.scrollLeft ===
    badgesSkillsContainer.scrollWidth - badgesSkillsContainer.clientWidth
  ) {
    badgesSkillsContainer.scrollLeft = 0;
  } else {
    badgesSkillsContainer.scrollLeft++;
  }
}

setInterval(infiniteScroll, 20);

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

document.addEventListener("mousemove", function (event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const background = document.getElementById("dynamic-background");

  const gradientX = (mouseX / window.innerWidth) * 100;
  const gradientY = (mouseY / window.innerHeight) * 100;

  const gradient = `radial-gradient(600px at ${gradientX}% ${gradientY}%, rgba(29, 78, 216, 0.15), transparent 80%)`;

  background.style.background = gradient;
});

function createHtmlElement({
  textContent = "",
  tag = "div",
  id = "",
  classList = "",
  src = "",
  alt = "",
  href = "",
  blank = false,
}) {
  const elementProperties = {
    textContent: textContent,
    src: src,
    alt: alt,
  };

  if (id) elementProperties.id = id;

  const newTag = document.createElement(tag);
  Object.assign(newTag, elementProperties);

  if (href) {
    newTag.href = href;
    if (blank) newTag.setAttribute("target", "_blank");
  }

  if (classList) newTag.classList.add(classList);

  return newTag;
}

// contact
document.getElementById("sendEmail").addEventListener("click", function () {
  var mailtoURL =
    "mailto:" +
    "andresgvelasquezdev@gmail.com" +
    "?subject=" +
    encodeURIComponent(document.getElementById("subject").value) +
    "&body=" +
    encodeURIComponent(document.getElementById("body").value);

  window.open(mailtoURL, "_blank");
});
