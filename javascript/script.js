//collapse and expand the screen by clicking on the hamburger icon-------------------------------
doubleLineHamburger.addEventListener('click', ()=>{
    sideNav.classList.toggle('hide');
    mainBody.classList.toggle('expand');
});

//drag and drop horizontal scroll funtion of overflow---------------------------------------------
function horizontalScroll(theElement){
    let isDown = false;
    let startX;
    let scrollLeft;

    theElement.addEventListener('mousedown', (e)=>{
        isDown = true;
        startX = e.pageX - theElement.offsetLeft;
        scrollLeft = theElement.scrollLeft;
    });
    theElement.addEventListener('mouseleave', ()=>{
        isDown = false;
    });
    theElement.addEventListener('mouseup', ()=>{
        isDown = false;
    });
    theElement.addEventListener('mousemove', (e)=>{
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - theElement.offsetLeft;
        const walk = x - startX;
        theElement.scrollLeft = scrollLeft - walk;
    });
};
horizontalScroll(statisticsScroll);
if(window.innerWidth <= 700){
    horizontalScroll(cardsArrow);
    dragToScrollHint(watchCards, hint, overflowCondition(watchCards, eachCards));
    previous.classList.add('hidden');
    next.classList.add('hidden');
}else{
    previous.classList.remove('hidden');
    next.classList.remove('hidden');
}
horizontalScroll(latestNewsCards);
horizontalScroll(section4Cards);

//hamburger and nav display function--------------------------------------------------
const navSlide = ()=>{    
    hamburgerMenu.addEventListener('click', ()=>{
        //Toggle nav
        menuIconDiv.classList.toggle('nav-active');
        //Animate Links
        menuList.forEach((element, index) => {
            if(element.style.animation){
                element.style.animation='';
            }else{
                element.style.animation = `menuListFade 0.5s ease forwards ${index/7}s`;
            };
        });
        //Burger animation
        hamburgerMenu.classList.toggle('toggle');
    });
};

navSlide();

//Script for hint in the scrolling divs---------------
function overflowCondition(outerContainer, innerContainerArray){
    let allElementWidth = 0;
    let isGreater = false;
    let containerWidth = outerContainer.getBoundingClientRect().width;
    innerContainerArray.forEach((element) => {
        let actualWidtheachElement = element.getBoundingClientRect().width;
        allElementWidth+=actualWidtheachElement;
    });
    if(containerWidth < allElementWidth){
        isGreater = true;
    }else{
        isGreater = false;
    }
    return isGreater;
}
    //function to set the top and left of the hint--------------------
function cursor (e){
    hint.style.top = e.pageY + 'px';
    hint.style.left = e.pageX + 'px';
}

    //function to call the hint and make it move with the direction---------------
function dragToScrollHint(element, hint, overflowCond){
    element.addEventListener('mousemove', (e)=>{
        if(MouseEvent && overflowCond){
            hint.style.opacity = "1";
            cursor(e);
        }
    });
    element.addEventListener('mouseleave', ()=>{
        hint.style.opacity = "0";
    })
}
dragToScrollHint(statisticsScroll, hint, overflowCondition(statisticsScroll, statCards));
dragToScrollHint(latestNewsCards, hint, overflowCondition(latestNewsCards, eachNews));
dragToScrollHint(section4Cards, hint, overflowCondition(section4Cards, readCards));

//next and previous button to slide through carousel
function carousel(element){
    previous.addEventListener('click', ()=>{
        if(imageIndex !== 1){
            imageIndex--;
            translateX += 680;
        }
        element.style.transform = `translateX(${translateX}px)`
    });
    next.addEventListener('click', ()=>{
        if(imageIndex !== numberOfCards){
            imageIndex++;
            translateX -= 680;
        }
        element.style.transform = `translateX(${translateX}px)`
    });
}

carousel(watchCards);

//content fadein effect
function isVisible(element){
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -150

    if (elementBox.top - document.body.clientHeight < distanceFromTop) return true
    else return false
}
function scanDocument(){
    let sectionList = document.querySelectorAll('.hidden-effect');
    sectionList.forEach(element => {
        if(isVisible(element)){
            element.classList.remove('hidden-effect');
        } else if(!isVisible(element)){
            element.classList.add('hidden-effect')
        }
    });
}
document.addEventListener('scroll', (e)=>{
    e.preventDefault();
    scanDocument();
});

//infinite scroll section 1
function carouselScrollAuto(outerElement, innerElement, eachItem){
    function scroll(){
        direction = -1;
        outerElement.style.justifyContent = 'flex-start';
        innerElement.style.transform = 'translate(-240px)';
    };
    innerElement.addEventListener('transitionend', (e)=>{
        e.preventDefault;
        if(direction === -1){
            innerElement.appendChild(innerElement.firstElementChild);
        }
        innerElement.style.transition = 'none';
        innerElement.style.transform = 'translate(0)';
        setTimeout(() => {
            innerElement.style.transition = 'all 0.3s ease-in-out'   
        });
    });
    
    setInterval(() => {
        scroll()
    }, 3000);
}
carouselScrollAuto(outerStatistics, statisticsScroll, statCards);