var vd = document.querySelector('.vd')
var play = document.querySelector('.play')
var h1 = document.querySelectorAll('.page1 h1')


vd.addEventListener('mouseenter',function(){
  gsap.to(play,{
   opacity:1,
   scale:1
  })
}
)
vd.addEventListener('mouseleave',function(){
    gsap.to(play,{
     opacity:0,
     scale:0
    })
  }
  )
  vd.addEventListener('mousemove',function(dets){
    gsap.to(play,{
    left:dets.x-80,
    top:dets.y-80
    })
  }
  )
  gsap.from(h1,{
    y:100,
    opacity:0,
    duration:0.6,
    stagger:0.2
  })
  gsap.from(vd,{
    scale:.8,
    opacity:0,
    duration:0.6,
   
  })


  

document.addEventListener("mousemove",function(dets){
   gsap.to(".curs",{
    left:dets.x,
    top:dets.y
   })
})
document.querySelectorAll('#chul').forEach(function(elem){
  elem.addEventListener('mouseenter',function(){
    gsap.to('.curs',{
      transform: 'translate(-50%,-50%) scale(1)'
    })
  })
  })
  document.querySelectorAll('#chul').forEach(function(elem){
    elem.addEventListener('mouseleave',function(){
      gsap.to('.curs',{
        transform: 'translate(-50%,-50%) scale(0)'
      })
    })
    })
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

gsap.to("#nav-part1 svg", {
  transform: "translateY(-100%)",
  scrollTrigger: {
    trigger: ".page1",
    scroller: ".main",
    start: "top 0",
    end: "top -5%",
    scrub: true,
  }})
  gsap.to("#nav-part2 #links", {
    transform: "translateY(-100%)",
    opacity:0,
    scrollTrigger: {
      trigger: ".page1",
      scroller: ".main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    }})
    gsap.from("#chul", {
     scale:0.1,
      opacity:0,
      duration:1,
      
      
      scrollTrigger: {
        trigger: ".text",
        scroller: ".main",
      
        start: "top 10%",
        end: "top 50%",
        scrub: true,
        stagger:.5,
      }})


