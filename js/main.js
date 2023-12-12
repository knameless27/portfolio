// projects
const list = document.getElementById("list");

projects.forEach(({ name, image, url, description }, i) => {
  const container = createHtmlElement({ classList: "container" });

  const containerImg = createHtmlElement({ classList: "containerImg" });

  const newImage = createHtmlElement({
    tag: "img",
    classList: "project-image",
    src: image,
  });
  const title = createHtmlElement({ tag: "h2", textContent: name, classList: "title-project" });
  const desc = createHtmlElement({ tag: "h4", textContent: description });
  const anchorVPButton = createHtmlElement({
    tag: "a",
    id: "button-pj",
    href: url,
    blank: true,
  });

  const viewProjectButton = createHtmlElement({
    tag: "button",
    textContent: "View Project!",
    classList: "button-pj",
  });

  anchorVPButton.appendChild(viewProjectButton);
  containerImg.appendChild(newImage);

  container.appendChild(containerImg);
  container.appendChild(title);
  container.appendChild(desc);
  container.appendChild(anchorVPButton);

  list.appendChild(container);
});

function createHtmlElement({
  textContent = "",
  tag = "div",
  id = "",
  classList = "",
  src = "",
  href = "",
  blank = false,
}) {
  const elementProperties = {
    textContent: textContent,
    src: src,
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
