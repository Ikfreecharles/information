//selectors
const doubleLineHamburger = document.querySelector('.doubleLine-hamburger');
const sideNav = document.querySelector('.side-nav');
const mainBody = document.querySelector('.main-body');

//selection from section 1
const statisticsScroll = document.querySelector('.statistics');
const statCards = document.querySelectorAll('.stat-card');
const outerStatistics = document.querySelector('.outer-statistics');
let direction;

//selection from section 2
const cardsArrow = document.querySelector('.cards-arrow');
const watchCards = document.querySelector('.all-cards');
const eachCards = [...document.querySelectorAll('.each-cards')];
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
let numberOfCards = eachCards.length;
let imageIndex = 1;
let translateX = 0;

//selection from section 3
const latestNewsCards = document.querySelector('.cards-all');
const eachNews = document.querySelectorAll('.each-news');

//selection from section 4
const section4Cards = document.querySelector('.section4-card');
const readCards = document.querySelectorAll('.read-cards');

//selection from the nav
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuIconDiv = document.querySelector('.menu-icons-div');
const menuList = document.querySelectorAll('.menu li');

//selection for hint UX
const hint = document.querySelector('.hint');