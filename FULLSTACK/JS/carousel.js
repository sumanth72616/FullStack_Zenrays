(function(){
    function carousel(){
        var carouselItems = [
            {
                img:'image1.jpg',
                text:'This is image 1'
            },
            {
                img:'image2.jpg',
                text:'This is image 2'
            },
            {
                img:'image3.jpg',
                text:'This is image 3'
            },
            {
                img:'image4.jpg',
                text:'This is image 4'
            }
        ]
    
        var play,
        stop,
        next,
        prev,
        order, 
        imgEle,
        textEle,
        timerObj,
        cIndx=0,
        cIndx_prev,
        playOrder,
        carouselEle,
        indicatorEle,
        forward=true;
    
        carouselEle = document.getElementById("carousel");
    
        function loopImages(){
            cIndx_prev = cIndx;
            if(forward){
                cIndx++;  
                if(cIndx == carouselItems.length){
                    cIndx = 0;
                }       
            }else{
                cIndx--;  
                if(cIndx < 0){
                    cIndx = carouselItems.length - 1;
                }
            }
        }
        function slideLoop(){
            loopImages();
            changeSlides();
        }
        function changeSlides()
        {
            
            var imgUrl = "../images/" + carouselItems[cIndx].img;
            imgEle.setAttribute("src",imgUrl);
            textEle.textContent = carouselItems[cIndx].text;
            indicatorEle[cIndx_prev].style.backgroundColor = "black";
            indicatorEle[cIndx].style.backgroundColor = "white";
        }
        function startInterval(){
            if(!timerObj)
                timerObj = setInterval(slideLoop,1500);
        }
        function stopInterval(){
            clearInterval(timerObj);
            timerObj = null;
        }
        function prevSlide(){
            stopInterval();
            playOrder =forward;
            forward=false;
            
            loopImages();
            changeSlides();
            forward = playOrder;
        }
        function nextSlide(){
            playOrder = forward;
            stopInterval();
            forward=true;
            
            loopImages();
            changeSlides();
            forward = playOrder;

        }
        function changePlayOrder(){
            forward = !forward;
            startInterval();
        }
    
        function bindElements(){
            imgEle = carouselEle.querySelector("img");
            textEle = carouselEle.querySelector("figcaption");
            play = carouselEle.querySelector(".play");
            stop = carouselEle.querySelector(".stop");
            prev = carouselEle.querySelector(".prev");
            next = carouselEle.querySelector(".next");
            order = carouselEle.querySelector(".order");


            indicatorEle = carouselEle.querySelectorAll(".slide_value");

            play.addEventListener('click', startInterval);
            stop.addEventListener('click', stopInterval);
            prev.addEventListener('click', prevSlide);
            next.addEventListener('click', nextSlide);
            order.addEventListener('click', changePlayOrder);




        }
        bindElements();
        
    }
   carousel(); 
})();

