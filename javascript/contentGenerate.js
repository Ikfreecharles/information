//selection from section 1
const statisticsDiv = document.querySelector('.statistics');
//selection from section 2
const allCards = document.querySelector('.all-cards');
//selection from section 3
const cardsAll = document.querySelector('.cards-all');
//selection from section 4
const section4Card = document.querySelector('.section4-card');

//Generate the content inside the statistics in section 1
for (const items of statistics) {
    let statCard, h5, p;
    statCard = generateContent('div', statisticsDiv, 'stat-card');
    h5 = generateContent('h5', statCard,'', items.number);
    p = generateContent('p', statCard,'', items.description)
}

//Generate the content inside the statistics in section 2
for (const items of watch) {
    let eachCards, cardText, cardDescription, pDescription, cardData, pViews, pTimer, play;
    eachCards = generateContent('div', allCards, 'each-cards','', '', items.img);
    cardText = generateContent('div', eachCards, 'card-text', '', '', '');
    cardDescription = generateContent('div', cardText, 'card-description', '', '', '');
    pDescription = generateContent('p', cardDescription, '', items.description, '', '');
    cardData = generateContent('div', cardText, 'card-data', '', '', '');
    pViews = generateContent('p', cardData, '', items.views, '', '');
    pTimer = generateContent('p', cardData, '', items.time, '', '');
    play = generateContent('div', cardData, 'play', items.playButton, '', '');
}

//Generate the content inside the statistics in section 3
for (const items of news) {
    let eachNews, eachNewsImg, img, pDiv, pDescription, newsData, pView, pDuration;
    eachNews = generateContent('div', cardsAll, 'each-news', '', '', '');
    eachNewsImg = generateContent('div', eachNews, 'each-news-img', '','','');
    img = generateContent('img', eachNewsImg, '', '', items.image, '');
    pDiv = generateContent('div', eachNews, 'each-news-description', '', '', '');
    pDescription = generateContent('p', pDiv, '', items.description, '');
    newsData = generateContent('div', eachNews, 'news-data', '', '', '');
    pView = generateContent('p', newsData, '', items.views, '', '');
    pDuration = generateContent('p', newsData, '', items.duration, '', '');
}

//Generate the content inside the statistics in section 4
for (const items of read) {
    let readCards, h4, readImg, img, pDescription, readAuthorImg;
    readCards = generateContent('div', section4Card, 'read-cards', '', '', '');
    h4 = generateContent('h4', readCards, '', items.title, '', '');
    readImg = generateContent('div', readCards, 'read-img', '', '', '');
    img = generateContent('img', readImg, '', '', items.img, '');
    pDescription = generateContent('p', readCards, '', items.description, '', '');
    readAuthorImg = generateContent('img', readCards, 'read-author-img', '', items.authorImage, '');
}

//generic function to generate content
function generateContent(elementType, appendTo, classToAdd, innerContent, setAttributeImg, setBackground){
    let variableName;
    //create element
    variableName = document.createElement(elementType);
    //append as necessary
    if(appendTo) appendTo.append(variableName);
    //add classes
    if(classToAdd) variableName.classList.add(classToAdd);
    //fill in with content from database
    if(innerContent) variableName.innerHTML = innerContent;
    //set src attribute on image tag
    if(setAttributeImg) variableName.setAttribute('src', setAttributeImg);
    //set background image if necessary
    if(setBackground) variableName.style.backgroundImage = `url(${setBackground})`;

    //return variable created from the function
    return variableName;
}