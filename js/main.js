// particles.js
const particles = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#ffffff",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

particlesJS(particles);

// container
const leftButton = document.getElementById("leftBtn");
const rightButton = document.getElementById("rightBtn");

let actualContent = "home";

const contents = ["home", "projects", "contact"];

if (window.screen.width > 768) {
  contents.forEach((content) => {
    if (actualContent != content)
      document.getElementsByClassName(content)[0].style.display = "none";
  });
}

function showContent(event) {
  let indexContent = contents.findIndex((content) => content == actualContent);
  if (indexContent == -1) indexContent = 0;
  let indexNewElement = getIndex(contents.length, indexContent, event);

  document.getElementsByClassName(contents[indexContent])[0].style.display =
    "none";

  document.getElementsByClassName(contents[indexNewElement])[0].style.display =
    "";

  actualContent = contents[indexNewElement];
}

function getIndex(arrayLength, index, event) {
  if (index == 0 && event == -1) return arrayLength - 1;
  if (index == arrayLength - 1 && event == 1) return 0;
  if (arrayLength > index + event) return index + event;
  return 0;
}

leftButton.addEventListener("click", () => showContent(-1));
rightButton.addEventListener("click", () => showContent(1));

// projects
const list = document.getElementById("list");

const projectImage = document.getElementsByClassName("project-image")[0];
const projectDescription = document.getElementById("project-description");
const buttonPj = document.getElementById("button-pj");

projectImage.src = projects[0].image;
projectDescription.textContent = projects[0].description;
buttonPj.href = projects[0].url;

projects.forEach(({ name }, i) => {
  const newButton = document.createElement("button");
  const textButton = document.createElement("h3");
  textButton.textContent = name;
  newButton.appendChild(textButton);
  newButton.classList.add("button-project");
  newButton.id = name;
  list.appendChild(newButton);
  newButton.addEventListener("click", (e) => {
    const elementId = e.target.id || e.target.parentElement.id;
    const project = projects.find((project) => project.name == elementId);
    projectImage.src = project.image;
    projectDescription.textContent = project.description;
    buttonPj.href = project.url;
  });
});

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
