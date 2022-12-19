function createelement(type, name) {
  const element = document.createElement(type);
  element.id = name;
  element.setAttribute('class', name);
  return element;
}

function loadImages() {
  const snapshot = document.getElementsByClassName('card-works-snapshot');
  snapshot[0].style['background-size'] = 'cover';
  snapshot[0].style['background-position'] = 'center';

  if (window.screen.width < 768) {
    snapshot[0].style['background-image'] = 'url("./images/Snapshoot Portfolio1.png")';
  } else {
    snapshot[0].style['background-image'] = 'url("./images/Desktop-Snapshoot Portfolio1.jpg")';
  }
}

function createframe2() {
  const frame2 = createelement('div', 'card-works-frame-2');
  const dot = createelement('div', 'card-works-frame-2-dot');
  const dot2 = createelement('div', 'card-works-frame-2-dot');
  const client = createelement('div', 'card-works-frame-2-client');
  const role = createelement('div', 'card-works-frame-2-role');
  const year = createelement('div', 'card-works-frame-2-year');
  frame2.appendChild(client);
  frame2.appendChild(dot);
  frame2.appendChild(role);
  frame2.appendChild(dot2);
  frame2.appendChild(year);
  return frame2;
}

function shutdownBackground2() {
  const container = document.querySelector('#container');

  if (window.screen.width < 768) {
    container.style['aspect-ratio'] = '375 / 812';
  } else {
    container.style['aspect-ratio'] = '1440 / 1577';
  }

  document.querySelector('#app-bar-compact').style.display = 'none';
  document.querySelector('#headline').style.display = 'none';
  document.querySelector('#works-section').style.display = 'none';
  document.querySelector('#about-myself-base').style.display = 'none';
  document.querySelector('#about-myself').style.display = 'none';
  document.querySelector('#contact-form-base').style.display = 'none';
  document.querySelector('#contact-form-shapes').style.display = 'none';
  document.querySelector('#contact-form-data').style.display = 'none';
  document.querySelector('#header-shapes-mobile').style.display = 'none';
}

function restoreView() {
  const element = document.getElementById('mobile-menu');
  element.remove();
  document.querySelector('#icon-button-button').style.display = 'flex';
  document.querySelector('#div-logo').style.display = 'flex';
  document.querySelector('#headline').style.display = 'block';
  document.querySelector('#div-logo').scrollIntoView();
}

function restoreView2() {
  const element = document.getElementById('work-details');
  element.remove();
  const container = document.querySelector('#container');

  if (window.screen.width < 768) {
    container.style['aspect-ratio'] = '375 / 5410';
  } else {
    container.style['aspect-ratio'] = '1440 / 5125';
  }

  document.querySelector('#app-bar-compact').style.display = 'block';
  document.querySelector('#headline').style.display = 'block';
  document.querySelector('#works-section').style.display = 'grid';
  document.querySelector('#about-myself-base').style.display = 'block';
  document.querySelector('#about-myself').style.display = 'block';
  document.querySelector('#contact-form-base').style.display = 'block';
  document.querySelector('#contact-form-shapes').style.display = 'block';
  document.querySelector('#contact-form-data').style.display = 'block';
  document.querySelector('#header-shapes-mobile').style.display = 'block';
  document.querySelector('#div-logo').scrollIntoView();
}

const worksMobile = {
  work1: {
    name: 'Tonic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: '../images/Snapshoot Portfolio1.png',
    technologies: ['html', 'css', 'javaScript'],
    linkLiveVersion: '',
    linkSource: '',
  },
  work2: {
    online: true,
  },
  work3: {
    online: false,
  },
  work4: {
    online: false,
  },
};
const worksDesktop = {
  work1: {
    name: 'Tonic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: '../images/Desktop-Snapshoot Portfolio1.jpg',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    linkLiveVersion: '',
    linkSource: '',
  },
  work2: {
    online: true,
  },
  work3: {
    online: false,
  },
  work4: {
    online: false,
  },
};

function technologies() {
  const technologiesList = createelement('ul', 'card-works-technologies');

  if (window.screen.width < 768) {
    for (let i = 0; i < worksMobile.work1.technologies.length; i += 1) {
      const technologiesItem = createelement('li', 'card-works-technologies-item');
      const liText = document.createTextNode(worksMobile.work1.technologies[i]);
      technologiesItem.appendChild(liText);
      technologiesList.appendChild(technologiesItem);
    }
  } else {
    for (let i = 0; i < worksDesktop.work1.technologies.length; i += 1) {
      const technologiesItem = createelement('li', 'card-works-technologies-item');
      const liText = document.createTextNode(worksDesktop.work1.technologies[i]);
      technologiesItem.appendChild(liText);
      technologiesList.appendChild(technologiesItem);
    }
  }
  return technologiesList;
}

function createWorkDetails() {
  shutdownBackground2();
  const container = document.querySelector('#container');
  const menu = createelement('div', 'work-details');
  container.appendChild(menu);
  const cardWorks = createelement('div', 'card-works');
  menu.appendChild(cardWorks);
  cardWorks.appendChild(createelement('div', 'card-works-snapshot'));
  const buttonClose = createelement('button', 'card-works-close');
  buttonClose.addEventListener('click', restoreView2);
  cardWorks.appendChild(buttonClose);
  cardWorks.appendChild(createelement('h2', 'card-works-project-title'));
  cardWorks.appendChild(createframe2());
  cardWorks.appendChild(createelement('p', 'card-works-description'));

  loadImages();

  cardWorks.appendChild(technologies());

  const buttonSeeLive = createelement('button', 'card-works-see-live');
  buttonSeeLive.addEventListener('click', restoreView2);
  cardWorks.appendChild(buttonSeeLive);
  buttonSeeLive.style['background-size'] = 'cover';
  buttonSeeLive.style['background-position'] = 'center';
  buttonSeeLive.style['background-image'] = 'url("./images/seelive.svg")';

  const buttonSeeSource = createelement('button', 'card-works-see-source');
  buttonSeeSource.addEventListener('click', restoreView2);
  cardWorks.appendChild(buttonSeeSource);
  buttonSeeSource.style['background-size'] = 'cover';
  buttonSeeSource.style['background-position'] = 'center';
  buttonSeeSource.style['background-image'] = 'url("./images/seesource.svg")';
}

function work1Click() {
  createWorkDetails();
}

function work2Click() {
  createWorkDetails();
}

function work3Click() {
  createWorkDetails();
}

function work4Click() {
  createWorkDetails();
}

const bigString = '<div id="align-section"> <div id="works-section-div1" class="works-section-class"> <div id="snapshot-portfolio-1" class="snapshot-portfolio-class"></div> <div id="block-apart1"> <div id="block-apart-primary-text-1"> <div id="block-apart-primary-text-1-project-title"> <h2 id="block-apart-primary-text-1-project-title-text-1" class="block-apart-primary-text"></h2> </div> <div id="works-section-1-frame-2"> <div id="client"><p id="works-section-1-client-text" class="style-1-font"></p></div> <div id="counter"></div> <div id="role"><p id="works-section-1-role-text" class="style-1-font"></p></div> <div id="counter"></div> <div id="year"><p id="works-section-1-year-text" class="style-1-font"></p></div> </div> </div> <div id="works-section-1-block-apart-primary-text-2"> <p id="works-section-1-block-apart-primary-text-2-p"></p> </div> <div id="works-section-1-block-apart-tags"> <ul id="block-apart-tags-li"> <li id="block-apart-tags-item-1" class="block-apart-tags"><a class="block-apart-tags-item">html</a></li> <li id="block-apart-tags-item-2" class="block-apart-tags"><a class="block-apart-tags-item">css</a></li> <li id="block-apart-tags-item-3" class="block-apart-tags"><a class="block-apart-tags-item">javaScript</a></li> </ul> </div> <div id="works-section-1-block-apart-action"><button id="block-apart-action-button" type="button">See Project</button></div> </div> </div>  <div id="works-section-div2" class="works-section-class"> <div id="snapshot-portfolio-2" class="snapshot-portfolio-class"></div> <div id="block-apart2"> <div id="block-apart-primary-text-1"> <div id="block-apart-primary-text-1-project-title-2"> <h2 id="block-apart-primary-text-1-project-title-text-2" class="block-apart-primary-text"></h2> </div> <div id="works-section-2-frame-2"> <div id="client"><p id="works-section-2-client-text" class="style-1-font"></p></div> <div id="counter"></div> <div id="role"><p id="works-section-2-role-text" class="style-1-font"></p></div> <div id="counter"></div> <div id="year-label"><p id="works-section-2-year-text" class="style-1-font"></p></div> </div> </div> <div id="works-section-2-block-apart-primary-text-2"> <p id="works-section-2-block-apart-primary-text-2-p"></p> </div> <div id="works-section-2-block-apart-tags"> <ul id="block-apart-tags-li"> <li id="block-apart-tags-item-1" class="block-apart-tags"><a class="block-apart-tags-item">html</a></li> <li id="block-apart-tags-item-aux" class="block-apart-tags-aux"><a class="block-apart-tags-item-aux"></a></li> <li id="block-apart-tags-item-2" class="block-apart-tags"><a class="block-apart-tags-item">css</a></li> <li id="block-apart-tags-item-3" class="block-apart-tags"><a class="block-apart-tags-item">javaScript</a></li> </ul> </div> <div id="works-section-2-block-apart-action"><button id="block-apart-action-button" type="button">See Project</button></div> </div> </div>  <div id="works-section-div3" class="works-section-class"> <div id="snapshot-portfolio-3" class="snapshot-portfolio-class"></div> <div id="block-apart1"> <div id="block-apart-primary-text-1"> <div id="block-apart-primary-text-1-project-title-3"> <h2 id="block-apart-primary-text-1-project-title-text-3" class="block-apart-primary-text"></h2> </div> <div id="works-section-3-frame-2"> <div id="client"><p id="works-section-3-client-text" class="style-1-font"></p></div> <div id="counter"></div> <div id="role"><p id="works-section-3-role-text" class="style-1-font"></p></div> <div id="counter"></div> <div id="year"><p id="works-section-3-year-text" class="style-1-font"></p></div> </div> </div> <div id="works-section-3-block-apart-primary-text-2"> <p id="works-section-3-block-apart-primary-text-2-p"></p> </div> <div id="works-section-3-block-apart-tags"> <ul id="block-apart-tags-li"> <li id="block-apart-tags-item-1" class="block-apart-tags"><a class="block-apart-tags-item">html</a></li> <li id="block-apart-tags-item-aux" class="block-apart-tags-aux"><a class="block-apart-tags-item-aux"></a></li> <li id="block-apart-tags-item-2" class="block-apart-tags"><a class="block-apart-tags-item">css</a></li> <li id="block-apart-tags-item-3" class="block-apart-tags"><a class="block-apart-tags-item">javaScript</a></li> </ul> </div> <div id="works-section-3-block-apart-action"><button id="block-apart-action-button" type="button">See Project</button></div> </div> </div>  <div id="works-section-div4" class="works-section-class"> <div id="snapshot-portfolio-4" class="snapshot-portfolio-class"></div> <div id="block-apart2" class="block-apart-class"> <div id="block-apart-primary-text-1"> <div id="block-apart-primary-text-1-project-title-4"> <h2 id="block-apart-primary-text-1-project-title-text-4" class="block-apart-primary-text"></h2> </div> <div id="works-section-4-frame-2"> <div id="client"><p id="works-section-4-client-text" class="style-1-font"></p></div> <div id="counter"></div> <div id="role"><p id="works-section-4-role-text" class="style-1-font"></p></div> <div id="counter"></div> <div id="year"><p id="works-section-4-year-text" class="style-1-font"></p></div> </div> </div> <div id="works-section-4-block-apart-primary-text-2"> <p id="works-section-4-block-apart-primary-text-2-p"></p> </div> <div id="works-section-4-block-apart-tags"> <ul id="block-apart-tags-li"> <li id="block-apart-tags-item-1" class="block-apart-tags"><a class="block-apart-tags-item">html</a></li> <li id="block-apart-tags-item-aux" class="block-apart-tags-aux"><a class="block-apart-tags-item-aux"></a></li> <li id="block-apart-tags-item-2" class="block-apart-tags"><a class="block-apart-tags-item">css</a></li> <li id="block-apart-tags-item-3" class="block-apart-tags"><a class="block-apart-tags-item">javaScript</a></li> </ul> </div> <div id="works-section-4-block-apart-action"><button id="block-apart-action-button" type="button">See Project</button></div> </div> </div> </div> </section>';

function initialExec() {
  const worksSection = document.getElementById('works-section');
  worksSection.innerHTML += bigString;

  const workSection1button = document.querySelectorAll('#block-apart-action-button');
  workSection1button[0].addEventListener('click', work1Click);
  workSection1button[1].addEventListener('click', work2Click);
  workSection1button[2].addEventListener('click', work3Click);
  workSection1button[3].addEventListener('click', work4Click);
}

function portfolioClick() {
  restoreView();
  document.querySelector('#works-section-div1').scrollIntoView();
}

function aboutClick() {
  restoreView();
  document.querySelector('#about-myself').scrollIntoView();
}

function contactClick() {
  restoreView();
  document.querySelector('#contact-form-data-h1').scrollIntoView();
}

function shutdownBackground() {
  document.querySelector('#icon-button-button').style.display = 'none';
  document.querySelector('#div-logo').style.display = 'none';
  document.querySelector('#headline').style.display = 'none';
}

function hamburgClick() {
  const container = document.querySelector('#container');
  shutdownBackground();
  const menu = document.createElement('div');
  menu.id = 'mobile-menu';
  menu.setAttribute('class', 'mobile-menu');
  container.appendChild(menu);
  const button = document.createElement('button');
  button.id = 'mobile-menu-button';
  button.setAttribute('class', 'mobile-menu-button-close');
  button.onclick = function () { restoreView(); };
  menu.appendChild(button);
  const navbar = document.createElement('nav');
  const buttonPortfolio = document.createElement('button');
  const buttonAbout = document.createElement('button');
  const buttonContact = document.createElement('button');
  navbar.setAttribute('class', 'mobile-menu-navbar');
  buttonPortfolio.setAttribute('class', 'mobile-menu-buttons');
  buttonAbout.setAttribute('class', 'mobile-menu-buttons');
  buttonContact.setAttribute('class', 'mobile-menu-buttons');
  buttonPortfolio.appendChild(document.createTextNode('Portfolio'));
  buttonAbout.appendChild(document.createTextNode('About'));
  buttonContact.appendChild(document.createTextNode('Contact'));
  buttonPortfolio.addEventListener('click', portfolioClick);
  buttonAbout.addEventListener('click', aboutClick);
  buttonContact.addEventListener('click', contactClick);
  navbar.appendChild(buttonPortfolio);
  navbar.appendChild(buttonAbout);
  navbar.appendChild(buttonContact);
  menu.appendChild(navbar);
}

window.onresize = function () {
  const container = document.querySelector('#container');
  if (window.screen.width < 1000) {
    container.style['aspect-ratio'] = '375 / 5410';
  } else {
    container.style['aspect-ratio'] = '1440 / 5125';
  }
  restoreView2();
};

const menuhamb = document.querySelector('#icon-button-button');
menuhamb.onclick = function () { hamburgClick(); };
document.querySelector('#ico').onclick = function () { initialExec(); };
