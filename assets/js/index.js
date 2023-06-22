const openNavIcon = document.querySelector(".nav-icon");
const closeNavIcon = document.querySelector(".close");
const toggleNavBar = document.querySelector(".close-navbar");
const navList = document.querySelectorAll(".nav-list");
const body = document.querySelector("body");

// Navbar functions
const handleClick = () => {
  toggleNavBar.classList.toggle("open-navbar");
};

openNavIcon.addEventListener("click", handleClick);
closeNavIcon.addEventListener("click", handleClick);

navList.forEach((navItem) => {
  navItem.addEventListener("click", handleClick);
});

// 1. Create array of objects to host all recent work data

// Array of objects for recent works

const recentWork = [
  {
    id: 1,
    title: "Multi-Post Stories",
    shortDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",

    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.   \n<br> \n<br>   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    previewImage: "/assets/images/multiplestory.png",
    technologies: [
      { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "BOOTSTRAP", link: "https://getbootstrap.com/" },
      { name: "RUBY", link: "https://www.ruby-lang.org/en/documentation/" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 2,
    title: "Data Dashboard Healthcare",
    shortDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",

    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.   \n<br> \n<br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",

    previewImage: "/assets/images/cardImg3.png",
    technologies: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "BOOTSTRAP", link: "https://getbootstrap.com/" },
      { name: "RUBY", link: "https://www.ruby-lang.org/en/documentation/" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 3,
    title: "Data Dashboard Healthcare",
    shortDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",

    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.    \n<br> \n<br>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",

    previewImage: "/assets/images/cardImg2.png",
    technologies: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "BOOTSTRAP", link: "https://getbootstrap.com/" },
      { name: "RUBY", link: "https://www.ruby-lang.org/en/documentation/" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 4,
    title: "Data Dashboard Healthcare",
    shortDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",

    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.    \n<br> \n<br>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",

    previewImage: "/assets/images/cardImg.png",
    technologies: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "BOOTSTRAP", link: "https://getbootstrap.com/" },
      { name: "RUBY", link: "https://www.ruby-lang.org/en/documentation/" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 5,
    title: "Data Dashboard Healthcare",
    shortDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",

    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.    \n<br> \n<br>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",

    previewImage: "/assets/images/cardImg3.png",
    technologies: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "BOOTSTRAP", link: "https://getbootstrap.com/" },
      { name: "RUBY", link: "https://www.ruby-lang.org/en/documentation/" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 6,
    title: "Data Dashboard Healthcare",
    shortDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",

    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.    \n<br> \n<br>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",

    previewImage: "/assets/images/cardImg2.png",
    technologies: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "BOOTSTRAP", link: "https://getbootstrap.com/" },
      { name: "RUBY", link: "https://www.ruby-lang.org/en/documentation/" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 7,
    title: "Data Dashboard Healthcare",
    shortDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",

    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.    \n<br> \n<br>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",

    previewImage: "/assets/images/cardImg.png",
    technologies: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "BOOTSTRAP", link: "https://getbootstrap.com/" },
      { name: "RUBY", link: "https://www.ruby-lang.org/en/documentation/" },
    ],
    liveLink: "#",
    sourceLink: "#",
  },
];

// 2. Create Recent work html using createElement method
// get hompage container class so as to append popModal as child
const homePage = document.querySelector(".home");
// get recentwork container class so as to append workCard as child
const recentWorkContainer = document.querySelector(".works-container");

// 3. Iterate over recent work data to display them on the browser using the document elements created

window.addEventListener("DOMContentLoaded", () => {
  // reder the featured recent work card
  recentWork.slice(0, 1).map((work) => {
    let featuredWork = document.createElement("article");
    let workContents = document.createElement("div");
    let workTitle = document.createElement("h3");
    let workDescription = document.createElement("p");
    let seeProjectBtn = document.createElement("button");
    let stackUl = document.createElement("ul");
    let figure = document.createElement("figure");
    let imageSrc = document.createElement("img");

    featuredWork.className = "work-card";
    featuredWork.id = "Multi-Post";
    workContents.className = "Multi-Post-content";

    recentWorkContainer.appendChild(featuredWork);
    featuredWork.appendChild(figure);
    figure.appendChild(imageSrc);
    featuredWork.appendChild(workContents);

    workContents.append(workTitle, workDescription, stackUl, seeProjectBtn);

    seeProjectBtn.id = work.id;

    // Onclick of the see project button, the modal popup, and we used the corresponding id to display the project details
    seeProjectBtn.addEventListener("click", function () {
      handleModalToggle(work.id);
      seeProjectDetails(work);
    });

    imageSrc.src = work.previewImage;
    imageSrc.alt = "Codeeq Portfolio project samples";

    work.technologies.forEach((tech) => {
      let stackLi = document.createElement("li");
      let stackLink = document.createElement("a");
      stackUl.appendChild(stackLi);
      stackLi.appendChild(stackLink);

      stackLink.textContent = tech.name;
      stackLink.href = tech.link;
      stackLink.target = "_blank";
      stackLink.rel = " noopener noreferrer";
    });

    workTitle.textContent = work.title;
    workDescription.textContent = work.shortDescription;
    seeProjectBtn.textContent = "See Project";
  });

  // reder the general recent work card

  // I used the .slice medthod to remove the first item in array and loop through the rest
  recentWork.slice(1).forEach((work) => {
    // Append workCard inside recent work div container and so on
    let workCard = document.createElement("article");
    let workContents = document.createElement("div");
    let workTitle = document.createElement("h3");
    let workDescription = document.createElement("p");
    let seeProjectBtn = document.createElement("button");
    let stackUl = document.createElement("ul");

    workCard.className = "work-card";
    workContents.className = "work-contents";
    seeProjectBtn.id = work.id;

    // Onclick of the see project button, the modal popup, and we used the corresponding id to display the project details
    seeProjectBtn.addEventListener("click", function () {
      handleModalToggle(work.id);
      seeProjectDetails(work);
    });

    recentWorkContainer.appendChild(workCard);
    workCard.appendChild(workContents);

    workContents.append(workTitle, workDescription, stackUl);
    workCard.appendChild(seeProjectBtn);

    work.technologies.forEach((tech) => {
      let stackLi = document.createElement("li");
      let stackLink = document.createElement("a");
      stackUl.appendChild(stackLi);
      stackLi.appendChild(stackLink);

      stackLink.textContent = tech.name;
      stackLink.href = tech.link;
      stackLink.target = "_blank";
      stackLink.rel = " noopener noreferrer";
    });

    workTitle.textContent = work.title;
    workDescription.textContent = work.shortDescription;
    seeProjectBtn.textContent = "See Project";
  });
});

// 3. Modal to toggle the popup
popUp = document.createElement("section");
homePage.appendChild(popUp);
popUp.className = "closeModal";

// 4. Create an onclick event for the "see project button" based on the id of the clicked button and render the project details

let workDetails = document.createElement("article");
let workContentsTitle = document.createElement("div");
let workContents = document.createElement("div");
let BtnsContent = document.createElement("div");
let workTitle = document.createElement("h3");
let workDescription = document.createElement("p");
let seeProjectBtn = document.createElement("button");
let stackUL = document.createElement("ul");
let closeIcon = document.createElement("figure");
let figure = document.createElement("figure");
let closeImg = document.createElement("img");
let featuredImg = document.createElement("img");
let BtnContainer = document.createElement("aside");
let liveLinkBtn = document.createElement("button");
let sourceLinkBtn = document.createElement("button");
let liveImg = document.createElement("img");
let gitImg = document.createElement("img");

const toggleModal = document.querySelector(".closeModal");
function handleModalToggle() {
  toggleModal.classList.toggle("showModal");

  // Preventing the body scroll when popup is active
  toggleModal.classList.contains("showModal")
    ? (body.style.overflow = "hidden")
    : (body.style = "");
}

// Close popup
closeIcon.addEventListener("click", handleModalToggle);

// add classNames
workDetails.className = "project-card";
workContents.className = "project-contents";
BtnsContent.className = "btnNtext";
workContentsTitle.className = "project-title";
closeIcon.className = "closePop";
BtnContainer.className = "Btns";
stackUL.className = "stackContainer";

// appendChildren

popUp.appendChild(workDetails);
workDetails.append(workContentsTitle, workContents);
workContentsTitle.append(closeIcon, workTitle, stackUL);
workContents.append(figure, BtnsContent);
BtnsContent.append(workDescription, BtnContainer);
BtnContainer.append(liveLinkBtn, sourceLinkBtn);
closeIcon.appendChild(closeImg);
figure.appendChild(featuredImg);

liveLinkBtn.textContent = "See live";
sourceLinkBtn.textContent = "See source";

sourceLinkBtn.appendChild(gitImg);
liveLinkBtn.appendChild(liveImg);

liveImg.src = "/assets/images/live.png";
gitImg.src = "/assets/images/github.png";
closeImg.src = "/assets/images/Cancel.png";

function seeProjectDetails(work) {
  stackUL.innerHTML = "";
  if (work.id) {
    workTitle.textContent = work.title;
    workDescription.innerHTML = work.description.replace(/\n<br\?>/g, "<br>");
    featuredImg.src = work.previewImage;

    work.technologies.map((tech) => {
      let stackLi = document.createElement("li");
      let stackLink = document.createElement("a");

      stackLi.appendChild(stackLink);

      stackLi.className = "stackList";

      stackLink.textContent = tech.name;
      stackLink.href = tech.link;
      stackLink.target = "_blank";
      stackLink.rel = " noopener noreferrer";

      stackUL.appendChild(stackLi);
    });
  }
}

// 5. Display the corresponding data.
