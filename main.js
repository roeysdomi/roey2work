gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline();
const tl2=gsap.timeline();


/*
See https://www.greensock.com/splittext/ for details.
This demo uses SplitText which is a membership benefit of Club GreenSock, https://www.greensock.com/club/
*/


/*
See https://www.greensock.com/splittext/ for details.
This demo uses SplitText which is a membership benefit of Club GreenSock, https://www.greensock.com/club/
*/




//
// document.getElementById("animate").onclick = function() {
//   tl.restart();
// }




gsap.from(".firstitle2" , 1.3, {
  y:400,
  opacity:0,
  scale:3,
  ease: "power4.out",
  delay: 1,
  skewY: 0,
  stagger: {
    amount: 2.3
  }
})
gsap.from(".secondtitle2" , 1.3, {
  x:-400,
  opacity:0,
  scale:3,
  ease: "power4.out",
  delay: 1.3,
  skewY: 0,
  stagger: {
    amount: 2.3
  }
})

gsap.from(".secondtitle1" , 1.3, {
  x:400,
  opacity:0,
  scale:3,
  letterSpacing:"10px",
  ease: "power4.out",
  delay: 1.3,
  skewX: 30,
  stagger: {
    amount: 2.3
  }
})
gsap.from(".secondtitle3 h3" , 1, {
  y:50,
  opacity:0,
  scale:0.1,
  ease: "power4.out",
  delay: 2.3,
  stagger: {
    amount: 2.3
  }
})

gsap.to(".text span" , 1, {
  color:"red",
  skewY:30,
  scale:2,
  ease: "power4.out",
  delay: 2.3,
  stagger: {
    amount: 2.3
  }
})
gsap.from(".shapered" , 2.3, {
  y:200,
  opacity:0,
  ease: "power4.out",
  delay: 1.3,
  stagger: {
    amount: 0.3
  }
})
gsap.from(".shapegrey" , 2.3, {
  y:-200,
  opacity:0,
  ease: "power4.out",
  delay: 1.3,
  stagger: {
    amount: 0.3
  }
})
gsap.from(".shapeblack" , 2.3, {

  y:100,
  opacity:0,
  ease: "power4.out",
  delay: 1.3,
  stagger: {

    amount: 0.3
  }
})
// gsap.set(".shapeblack", { y:-200});


// ---------------------------about------------------------------------------


gsap.from('.title-about', {
  scrollTrigger: {
    trigger:'.title-about',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "bottom 40%",
    toggleActions: "play resume resume resume"
  },

  opacity:0,
  y:50,
})


gsap.from('.sec-right', {
  scrollTrigger: {
    trigger:'.sec-right',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "bottom 40%",
    toggleActions: "play resume resume resume"

  },

  opacity:0,
  x:100,
})

gsap.from('.sec-left', {
  scrollTrigger: {
    trigger:'.sec-right',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "bottom 40%",
    toggleActions: "play resume resume resume"

  },

  opacity:0,
  x:-100,
})
gsap.from('.sec-pic', {
  scrollTrigger: {
    trigger:'.sec-right',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "10% 40%",
    toggleActions: "play resume resume resume"

  },

  opacity:1,
  y:150,
})

gsap.from('.left .sec-pic2', {
  scrollTrigger: {
    trigger:'.sec-left',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "10% 40%",
    toggleActions: "play resume resume resume"

  },

  opacity:1,
  y:150,
})



gsap.from('.hoz-line', {
  scrollTrigger: {
    trigger:'.hoz-line',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "bottom 40%",
    toggleActions: "play resume resume resume"

  },

  opacity:0,
  x:-100,
})
// ---------------------------skills----------------------------------
gsap.from('.title-skills', {
  scrollTrigger: {
    trigger:'.title-skills',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "bottom 40%",
    toggleActions: "play resume resume resume"

  },

  opacity:0,
  y:50,
})

gsap.from('.tech', {
  scrollTrigger: {
    trigger:'.tech',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "10% 40%",
    toggleActions: "play resume resume resume"

  },

  opacity:0,
  y:50,
})

gsap.from('.tech h2', {
  scrollTrigger: {
    trigger:'.tech',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "20% 40%",
    toggleActions: "play resume resume resume"

  },
  stagger: {
    amount: 1.2
  },
  opacity:0,
  y:50,
})
gsap.from('.con-skills .pic-logo',2, {
  repeat:-1,
  stagger: {
    amount: 2,
     from: "random"
  },
 // filter:"blur(10px
 y:50,
 yoyo:true,
  yoyoEase:true,
 // scale:0.3,
 // from: "random"
}
)

// -----------------------------------------------------------
gsap.from('.title-work', {
  scrollTrigger: {
    trigger:'.title-work',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "bottom 40%",
      toggleActions: "play resume resume resume"
  },

  opacity:0,
  y:50,
})

gsap.from('.work', {
  scrollTrigger: {
    trigger:'.title-work',
    // markers:true,
    // scrub: 1,
    start:"30% 40%" ,
    end: "110% 40%",
      toggleActions: "play resume resume resume"
  },

  opacity:0,
  y:50,
})


gsap.from('.ikea', {
  scrollTrigger: {
    trigger:'.work',
    // markers:true,
    scrub: 1,
    start:"top 40%" ,
    end: "10% 40%",
  },


  x:-180,

  y:150,
})

gsap.from('.whatsapp', {
  scrollTrigger: {
    trigger:'.work',
    // markers:true,
    scrub: 1,
    start:"top 40%" ,
    end: "10% 40%",
  },



   x:-180,

})
gsap.from('.instagram', {
  scrollTrigger: {
    trigger:'.work',
    // markers:true,
    scrub: 1,
    start:"top 40%" ,
    end: "10% 40%",
  },
  x:-90,
  y:-110,
})
gsap.from('.shlish', {
  scrollTrigger: {
    trigger:'.work',
    // markers:true,
    scrub: 1,
    start:"top 40%" ,
    end: "10% 40%",
  },
  x:90,
  y:-90,
})
gsap.from('.discord', {
  scrollTrigger: {
    trigger:'.work',
    // markers:true,
    scrub: 1,
    start:"top 40%" ,
    end: "10% 40%",
  },

  x:90,
  y:100
})
gsap.from('.house', {
  scrollTrigger: {
    trigger:'.work',
    // markers:true,
    scrub: 1,
    start:"top 40%" ,
    end: "10% 40%",
  },

  x:150,

})
// ----------------contact------------------------
gsap.from('.title-contact', {
  scrollTrigger: {
    trigger:'.title-contact',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "bottom 40%",
    toggleActions: "play resume resume resume"

  },

  opacity:0,
  y:50,
})
gsap.from('.contact', {
  scrollTrigger: {
    trigger:'.title-contact',
    // markers:true,
    // scrub: 1,
    start:"30% 40%" ,
    end: "110% 40%",
    toggleActions: "play resume resume resume"

  },

  opacity:0,
  y:50,
})
gsap.from('.rightbox', {
  scrollTrigger: {
    trigger:'.title-contact',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "top 40%",
    toggleActions: "play resume resume resume"

  },
 opacity:0,
  x:-100,
})
gsap.from('.leftbox', {
  scrollTrigger: {
    trigger:'.title-contact',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "top 40%",
    toggleActions: "play resume resume resume"

  },
 opacity:0,
  x:100,
})
gsap.from('.bottombox', {
  scrollTrigger: {
    trigger:'.title-contact',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "top 40%",
    toggleActions: "play resume resume resume"

  },
 opacity:0,
  y:-100,
})
// ----------------------------------------------projects---------------------------------------
gsap.from('.pics', {
  scrollTrigger: {
    trigger:'.pics',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "bottom 40%",
    toggleActions: "play resume resume resume"

  },
  x:200,
 opacity:0,
})
gsap.from('.info', {
  scrollTrigger: {
    trigger:'.info',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "bottom 40%",
    toggleActions: "play resume resume resume"

  },
  x:-200,
 opacity:0,
})
gsap.from('.pro-shlish', {
  scrollTrigger: {
    trigger:'.pro-shlish',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "bottom 40%",
    toggleActions: "play resume resume resume"

  },
 opacity:0.3,
})
gsap.from('.pro-ikea', {
  scrollTrigger: {
    trigger:'.pro-ikea',
    // markers:true,
    // scrub: 1,
    start:"top+50px 40%" ,
    end: "top 40%",
    toggleActions: "play resume resume resume"

  },
  opacity:0.3,

})
gsap.from('.pro-discord', {
  scrollTrigger: {
    trigger:'.pro-discord',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "top 40%",
    toggleActions: "play resume resume resume"

  },
  opacity:0.3,
})
gsap.from('.pro-whatsapp', {
  scrollTrigger: {
    trigger:'.pro-whatsapp',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "top 40%",
    toggleActions: "play resume resume resume"

  },
  opacity:0.3,
})
gsap.from('.pro-instagram', {
  scrollTrigger: {
    trigger:'.pro-instagram',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "top 40%",
    toggleActions: "play resume resume resume"

  },
  opacity:0.3,
})
gsap.from('.pro-final', {
  scrollTrigger: {
    trigger:'.pro-final',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "top 40%",
    toggleActions: "play resume resume resume"

  },
  opacity:0.3,
})
gsap.from('.pro-dirot', {
  scrollTrigger: {
    trigger:'.pro-dirot',
    // markers:true,
    // scrub: 1,
    start:"top 40%" ,
    end: "top 40%",
    toggleActions: "play resume resume resume"

  },
  opacity:0.3,
})
