
var tl = gsap.timeline()

tl.from("#nav",{
    opacity:0,
    delay:0.3
})

tl.from("#nav h1,#nav a,#nav h2",{
    y:-100,
    opacity:0,
    duration:2,
    stagger:0.4,
})

tl.from("#left h1",{
    x:-200,
    opacity:0,
    duration:1,
})

tl.from("#right img",{
    scale:0.5,
    duration:1,
    opacity:0,
})

gsap.from("#page2 #card1",{
    scale:0,
    duration:1,
    opacity:0,
    stagger:0.9,
    scrollTrigger:{
        trigger:"#page2 #card1",
        scroller:"body",
        //markers:true,
        start:"top 50%",
        end:"top 70%",
        scrub:3,
    }
})