const openNavIcon = document.querySelector('.nav-icon');
const closeNavIcon = document.querySelector('.close');
const toggleNavBar = document.querySelector('.close-navbar');
const navList = document.querySelectorAll('.nav-list');
const body = document.querySelector('body');

// Navbar functions
const handleClick = () => {
  toggleNavBar.classList.toggle('open-navbar');
};

openNavIcon.addEventListener('click', handleClick);
closeNavIcon.addEventListener('click', handleClick);

navList.forEach((navItem) => {
  navItem.addEventListener('click', handleClick);
});

// 1. Create array of objects to host all recent work data

// Array of objects for recent works

const recentWork = [
  {
    id: 1,
    title: 'Moview DB',
    shortDescription:
      ' Explore the world of cinema with our innovative web app crafted using React. Immerse yourself in a curated collection of globally acclaimed movies, elegantly presented in a user-friendly interface. From Hollywood blockbusters to international gems, our app showcases the best in cinematic entertainment. ',

    description:
      'Introducing our latest creation: a cutting-edge web application built using React, designed to curate and showcase a comprehensive list of the most popular movies worldwide. With seamless integration of React technology, users can effortlessly explore an extensive array of globally acclaimed films, all within a user-friendly and intuitive interface. Stay informed, entertained, and captivated as you navigate through our meticulously curated collection of popular movies, right at your fingertips. Discover the cinematic wonders that captivate audiences around the globe with our React-powered web app.',

    previewImage: '/assets/images/spraay.png',
    technologies: [
      { name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      {
        name: 'HTML',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      { name: 'BOOTSTRAP', link: 'https://getbootstrap.com/' },
      { name: 'REACTJS', link: 'https://react.dev/learn' },
    ],
    liveLink: 'https://errytage-rmdb.netlify.app/',
    sourceLink: 'https://github.com/Errytagedesign/react-mdb',
  },
  {
    id: 2,
    title: 'WenFoods Web App',
    shortDescription:
      'A web app developed to sell and promote healthy foods, like Basmati Rice.',

    description:
      'A web app developed to sell and promote healthy foods, like Basmati Rice.  \n<br> \n<br> Elevate your culinary creations with the exceptional taste of 507 Gold Basmati Rice, renowned for its aromatic fragrance and culinary excellence, and experience a fusion of tradition and taste with Duru Bulgur Basmati Rice, where the wholesome goodness of bulgur meets the fragrant allure of Basmati rice, adding health benefits and exquisite flavor to your recipes.',

    previewImage: '/assets/images/wenfoods.png',
    technologies: [
      { name: 'NEXTJS', link: 'https://nextjs.org/docs' },
      { name: 'AOS', link: 'https://michalsnik.github.io/aos/' },
      {
        name: 'Slick Carousel',
        link: 'https://react-slick.neostack.com/docs/example/center-mode/',
      },
      { name: 'BOOTSTRAP', link: 'https://getbootstrap.com/' },
    ],
    liveLink: 'https://wenfoods.vercel.app/',
    sourceLink: 'https://github.com/Errytagedesign/wenfoods',
  },
  {
    id: 3,
    title: 'Our Wedding Story',
    shortDescription:
      'Join us on a journey of love, laughter, and unforgettable moments as we celebrate the union of Aroun and Tiffany.',

    description:
      'Join us on a journey of love, laughter, and unforgettable moments as we celebrate the union of Aroun and Tiffany. Our interactive web app invites you to explore the beautiful chapters of their love story, from the magical moment they met to the joyous occasion of their wedding day. \n<br> \n<br> Experience the romance unfold through stunning visuals, heartfelt messages, and captivating anecdotes shared by the couple and their loved ones. From cherished memories to future dreams, every detail of their journey is delicately woven into this digital narrative.',

    previewImage: '/assets/images/ourwedding.png',
    technologies: [
      { name: 'REACTJS', link: 'https://react.dev/learn' },
      { name: 'AOS', link: 'https://michalsnik.github.io/aos/' },
      {
        name: 'Slick Carousel',
        link: 'https://react-slick.neostack.com/docs/example/center-mode/',
      },
      { name: 'BOOTSTRAP', link: 'https://getbootstrap.com/' },
    ],
    liveLink: 'https://twotogetherasone.com/',
    sourceLink: 'https://github.com/Errytagedesign/aroun-tiffany',
  },
  {
    id: 4,
    title: 'CommunityPro Meets',
    shortDescription:
      'A Tech events Project developed with the best combo of HTML,CSS and JAVASCRIPT. In addition, i added Linters for Html,Css and Javascript.',

    description:
      "At Community Pro Tech Meets 2023, you'll have the opportunity to connect with like-minded individuals, expand your knowledge, and gain valuable insights from experts in the field. Whether you're a seasoned developer, a blockchain enthusiast, or simply curious about the latest innovations, this event is designed to cater to all levels of expertise and interest.",

    previewImage: '/assets/images/comPro.png',
    technologies: [
      {
        name: 'HTML',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      { name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'JS', link: 'https://www.javascript.com/' },

      { name: 'BOOTSTRAP', link: 'https://getbootstrap.com/' },
    ],
    liveLink: 'https://communitypro-meets.netlify.app',
    sourceLink: 'https://github.com/Errytagedesign/communitypro',
  },
  {
    id: 5,
    title: 'Fin Market Update',
    shortDescription:
      'Financial Market Capstone project developed with React, gitflow, and githubflow. ',

    description:
      'A web-app to get updated financial statements in real time, every statements is audited, standardized, and up to date. It cover NYSE, NASDAQ, AMEX, EURONEXT, TSX, INDEXES, ETFs, MUTUAL FUNDS, and FOREX.',

    previewImage: '/assets/images/finMarket.png',
    technologies: [
      {
        name: 'HTML',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      { name: 'BOOTSTRAP', link: 'https://getbootstrap.com/' },
      { name: 'RUBY', link: 'https://www.ruby-lang.org/en/documentation/' },
    ],
    liveLink: 'https://finmarket.netlify.app/',
    sourceLink: 'https://github.com/Errytagedesign/microverse-finMarket',
  },
  {
    id: 6,
    title: 'Destiny Travel and Tours',
    shortDescription:
      'Welcome to Destiny E Travels and Tours, your trusted partner for visa application assistance and travel services. ',

    description:
      "Welcome to Destiny Travel and Tours, your trusted global travel specialist with over 10 years of expertise in making travel dreams come true. Whether you are an individual seeking exciting adventures or a professional looking to explore new opportunities, we are here to make your journey unforgettable. \n<br> \n<br> At Destiny Travel and Tours, we pride ourselves on offering a unique range of travel products that cater to diverse needs. From exclusive discounts on airfare to carefully curated accommodation packages and more, we ensure that you get the best value for every travel experience. With us, you can rest assured that your journey will be planned with precision and attention to detail. \n<br> \n<br> With a vast network of over 200 partner airlines, we have the privilege of sending thousands of travelers to their desired destinations every year. Our partnerships with reputable airlines enable us to provide you with a wide range of flight options and competitive prices. Whether you're flying to a local hotspot or exploring a faraway paradise, we've got you covered.",

    previewImage: '/assets/images/destinyTravels.png',
    technologies: [
      { name: 'NEXTJS', link: 'https://nextjs.org/docs' },
      { name: 'AOS', link: 'https://michalsnik.github.io/aos/' },
      {
        name: 'Slick Carousel',
        link: 'https://react-slick.neostack.com/docs/example/center-mode/',
      },
      { name: 'BOOTSTRAP', link: 'https://getbootstrap.com/' },
    ],
    liveLink: 'https://travelandtours.vercel.app/',
    sourceLink: 'https://github.com/Errytagedesign/travelandtours',
  },
  {
    id: 7,
    title: 'My Danicare',
    shortDescription: 'Psychiatry transformed for everyone',

    description:
      'Psychiatry transformed for everyone \n<br> \n<br> Shifting the Dialogue: \n<br>Through eradicating stigma, conveying that individuals are not alone, and ensuring dependable access to in-network care.\n<br> \n<br> Genuine Connections: \n<br>Transforming each visit into a dialogue, delivering impactful treatment, and approaching every patient with humanity. \n<br> \n<br>Establishing the Benchmark: \n<br> Through recruiting top-notch psychiatrists, leveraging cutting-edge research, and dedicating ourselves to technologies that facilitate communication.',

    previewImage: '/assets/images/danicare.png',
    technologies: [
      { name: 'NEXTJS', link: 'https://nextjs.org/docs' },
      { name: 'AOS', link: 'https://michalsnik.github.io/aos/' },
      {
        name: 'React-Icons',
        link: 'https://react-icons.github.io/react-icons/search/#q=call',
      },
      { name: 'BOOTSTRAP', link: 'https://getbootstrap.com/' },
    ],
    liveLink: 'https://www.mydanicare.com/',
    sourceLink: 'https://github.com/jupitaco/danicare',
  },
];

// 2. Create Recent work html using createElement method
// get hompage container class so as to append popModal as child
const homePage = document.querySelector('.home');
// get recentwork container class so as to append workCard as child
const recentWorkContainer = document.querySelector('.works-container');

// 3. Iterate over recent work data to display them on the browser using the document elements created

window.addEventListener('DOMContentLoaded', () => {
  // reder the featured recent work card
  recentWork.slice(0, 1).map((work) => {
    let featuredWork = document.createElement('article');
    let workContents = document.createElement('div');
    let workTitle = document.createElement('h3');
    let workDescription = document.createElement('p');
    let seeProjectBtn = document.createElement('button');
    let stackUl = document.createElement('ul');
    let figure = document.createElement('figure');
    let imageSrc = document.createElement('img');

    featuredWork.className = 'work-card';
    featuredWork.id = 'Multi-Post';
    workContents.className = 'Multi-Post-content';

    recentWorkContainer.appendChild(featuredWork);
    featuredWork.appendChild(figure);
    figure.appendChild(imageSrc);
    featuredWork.appendChild(workContents);

    workContents.append(workTitle, workDescription, stackUl, seeProjectBtn);

    seeProjectBtn.id = work.id;

    // Onclick of the see project button, the modal popup, and we used the corresponding id to display the project details
    seeProjectBtn.addEventListener('click', function () {
      handleModalToggle(work.id);
      seeProjectDetails(work);
    });

    imageSrc.src = work.previewImage;
    imageSrc.alt = 'Codeeq Portfolio project samples';

    work.technologies.forEach((tech) => {
      let stackLi = document.createElement('li');
      let stackLink = document.createElement('a');
      stackUl.appendChild(stackLi);
      stackLi.appendChild(stackLink);

      stackLink.textContent = tech.name;
      stackLink.href = tech.link;
      stackLink.target = '_blank';
      stackLink.rel = ' noopener noreferrer';
    });

    workTitle.textContent = work.title;
    workDescription.textContent = work.shortDescription;
    seeProjectBtn.textContent = 'See Project';
  });

  // reder the general recent work card

  // I used the .slice medthod to remove the first item in array and loop through the rest
  recentWork.slice(1).forEach((work) => {
    // Append workCard inside recent work div container and so on
    let workCard = document.createElement('article');
    let workContents = document.createElement('div');
    let workTitle = document.createElement('h3');
    let workDescription = document.createElement('p');
    let seeProjectBtn = document.createElement('button');
    let stackUl = document.createElement('ul');

    // // Set background image on hover
    // workCard.addEventListener('mouseenter', function () {
    //   workCard.style.background = `url(${work.previewImage}) center center no-repeat`;
    //   workCard.style.backgroundSize = 'cover';
    // });

    // // Remove background image on mouse leave
    // workCard.addEventListener('mouseleave', function () {
    //   workCard.style.background = `linear-gradient(#2626265a, #262626), url(${work.previewImage}) center center no-repeat`;
    //   workCard.style.backgroundSize = 'cover';
    // });

    workCard.className = 'work-card';
    workCard.style.background = `linear-gradient(#262626b2, #262626), url(${work.previewImage}) center center no-repeat`;
    workCard.style.backgroundSize = 'fill';
    workContents.className = 'work-contents';
    seeProjectBtn.id = work.id;

    // Onclick of the see project button, the modal popup, and we used the corresponding id to display the project details
    seeProjectBtn.addEventListener('click', function () {
      handleModalToggle(work.id);
      seeProjectDetails(work);
    });

    recentWorkContainer.appendChild(workCard);
    workCard.appendChild(workContents);

    workContents.append(workTitle, workDescription, stackUl);
    workCard.appendChild(seeProjectBtn);

    work.technologies.forEach((tech) => {
      let stackLi = document.createElement('li');
      let stackLink = document.createElement('a');
      stackUl.appendChild(stackLi);
      stackLi.appendChild(stackLink);

      stackLink.textContent = tech.name;
      stackLink.href = tech.link;
      stackLink.target = '_blank';
      stackLink.rel = ' noopener noreferrer';
    });

    workTitle.textContent = work.title;
    workDescription.textContent = work.shortDescription;
    seeProjectBtn.textContent = 'See Project';
  });
});

// 3. Modal to toggle the popup
popUp = document.createElement('section');
homePage.appendChild(popUp);
popUp.className = 'closeModal';

// 4. Create an onclick event for the "see project button" based on the id of the clicked button and render the project details

let workDetails = document.createElement('article');
let workContentsTitle = document.createElement('div');
let workContents = document.createElement('div');
let BtnsContent = document.createElement('div');
let workTitle = document.createElement('h3');
let workDescription = document.createElement('p');
let seeProjectBtn = document.createElement('button');
let stackUL = document.createElement('ul');
let closeIcon = document.createElement('figure');
let figure = document.createElement('figure');
let closeImg = document.createElement('img');
let featuredImg = document.createElement('img');
let BtnContainer = document.createElement('aside');
let liveLinkBtn = document.createElement('a');
let sourceLinkBtn = document.createElement('a');
let liveImg = document.createElement('img');
let gitImg = document.createElement('img');

const toggleModal = document.querySelector('.closeModal');
function handleModalToggle() {
  toggleModal.classList.toggle('showModal');

  // Preventing the body scroll when popup is active
  toggleModal.classList.contains('showModal')
    ? (body.style.overflow = 'hidden')
    : (body.style = '');
}

// Close popup
closeIcon.addEventListener('click', handleModalToggle);

// add classNames
workDetails.className = 'project-card';
workContents.className = 'project-contents';
BtnsContent.className = 'btnNtext';
workContentsTitle.className = 'project-title';
closeIcon.className = 'closePop';
BtnContainer.className = 'Btns';
stackUL.className = 'stackContainer';

// appendChildren

popUp.appendChild(workDetails);
workDetails.append(workContentsTitle, workContents);
workContentsTitle.append(closeIcon, workTitle, stackUL);
workContents.append(figure, BtnsContent);
BtnsContent.append(workDescription, BtnContainer);
BtnContainer.append(liveLinkBtn, sourceLinkBtn);
closeIcon.appendChild(closeImg);
figure.appendChild(featuredImg);

liveLinkBtn.textContent = 'See live';
sourceLinkBtn.textContent = 'See source';

sourceLinkBtn.appendChild(gitImg);
liveLinkBtn.appendChild(liveImg);

liveImg.src = '/assets/images/live.png';
gitImg.src = '/assets/images/github.png';
closeImg.src = '/assets/images/Cancel.png';

// 5. Display the corresponding data.

function seeProjectDetails(work) {
  stackUL.innerHTML = '';
  if (work.id) {
    workTitle.textContent = work.title;
    workDescription.innerHTML = work.description.replace(/\n<br\?>/g, '<br>');
    featuredImg.src = work.previewImage;

    work.technologies.map((tech) => {
      let stackLi = document.createElement('li');
      let stackLink = document.createElement('a');

      stackLi.appendChild(stackLink);

      stackLi.className = 'stackList';

      stackLink.textContent = tech.name;
      stackLink.href = tech.link;
      stackLink.target = '_blank';
      stackLink.rel = 'noopener noreferrer';

      stackUL.appendChild(stackLi);
    });

    // Live link
    liveLinkBtn.href = work.liveLink;
    liveLinkBtn.target = '_blank';
    liveLinkBtn.rel = 'noopener noreferrer';

    // Source Link
    sourceLinkBtn.href = work.sourceLink;
    sourceLinkBtn.target = '_blank';
    sourceLinkBtn.rel = 'noopener noreferrer';
  }
}

// Client side validation
const form = document.getElementById('form');
const error = document.getElementById('error');
const email = document.getElementById('email');

// Whenever the email input field is active, the error message should be removed
email.addEventListener('click', function () {
  if (email === document.activeElement) error.style.display = 'none';
});

form.addEventListener('submit', (event) => {
  const regexMail = /[A-Z]/;
  if (regexMail.test(email.value)) {
    event.preventDefault();
    error.style.display = 'block';
  }
});
