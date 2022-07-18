"use strcit";

const scrollProgressElement = document.querySelector('#scroll-progress');

function scrollProgress () {
   const totalHeightOfWebPage = document.body.scrollHeight; 
   const currentDistanceFromTop = document.documentElement.scrollTop; 
   const windowHeight = document.documentElement.clientHeight;

   const scrolledPercentage = (currentDistanceFromTop/(totalHeightOfWebPage-windowHeight))*100; 

   scrollProgressElement.style.width = Math.round(scrolledPercentage) + '%';
}

document.addEventListener('scroll', scrollProgress); 