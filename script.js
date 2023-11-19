/*gsap.to('#arrow', {
    duration: 1.5,
    transform: 'translateY(38.5vh)',
    repeat: -1,
    yoyo: true,
    ease: 'elastic.inOut'
});
*/

var hasTouchScreen = false;

var UA = navigator.userAgent;
        hasTouchScreen = (
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
        ); 

if (hasTouchScreen) {
    window.location.replace('mobile.html');
}

const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

gsap.to('#preloader span', {
    duration: 1,
    opacity: 0,
    delay: 1
    
})

gsap.to('#preloader', {
    duration: 1,
    opacity: 0,
    delay: 1.3,
    zIndex: -50
    
})

gsap.from('#stationary', {
    duration: 0.5,
    opacity: 0,
    delay: 2.5

})

gsap.from('#first-page', {
    duration: 0.5,
    opacity: 0,
    delay: 2.5

})



gsap.to('#arrow', {
    duration: 1,
    delay: 0,
    opacity: 0,
    ease: 'expo',
    scrollTrigger: {
        trigger: "#arrow",
        start: 'top 600vh',
        toggleActions: 'play reverse play reverse'
    }
})



gsap.to('#first-page img:first-child', {
    duration: 1,
    delay: 0,
    opacity: 0,
    ease: 'expo',
    scrollTrigger: {
        trigger: "#arrow",
        start: 'top 600vh',
        toggleActions: 'play reverse play reverse'
    }
})






gsap.to('#second-page', {
    duration: 0.5,
    opacity: 1,
    scrollTrigger: {
        trigger: "#second-page",
        start: 'top 400vh',
        end: 'bottom top',
        toggleActions: 'play reverse play reverse',
    }
})

gsap.to('#third-page', {
    duration: 0.5,
    opacity: 1,
    scrollTrigger: {
        trigger: "#third-page",
        start: 'top 400vh',
        end: 'bottom top',
        toggleActions: 'play reverse play reverse',
    }
})

gsap.to('#fourth-page', {
    duration: 0.5,
    opacity: 1,
    scrollTrigger: {
        trigger: "#fourth-page",
        start: 'top 400vh',
        end: 'bottom top',
        toggleActions: 'play reverse play reverse',
    }
})

gsap.to('#contact-page', {
    duration: 0.5,
    opacity: 1,
    scrollTrigger: {
        trigger: "#fourth-page",
        start: 'top 400vh',
        end: 'bottom top',
        toggleActions: 'play reverse play reverse',
    }
})

gsap.to('#project-page', {
    duration: 0.5,
    opacity: 1,
    scrollTrigger: {
        trigger: "#fourth-page",
        start: 'top 400vh',
        end: 'bottom top',
        toggleActions: 'play reverse play reverse',
    }
})



const changeTo = Array('building web experiences', 'sports', 'tech', 'cybersecurity', 'AI');

const changeText = document.getElementById("change");
let idx = 0;

setInterval(() => {
    
    changeText.innerText = changeTo[idx++ % changeTo.length];



}, 2000);


function copyMail(){
    var copyText = "youssef.abdelsalam1234@gmail.com";
    navigator.clipboard.writeText(copyText);
    var show = document.getElementById("copied");
    show.style.opacity = 1;
    setTimeout(() => {
        show.style.opacity = 0;
    }, 3000);
}
