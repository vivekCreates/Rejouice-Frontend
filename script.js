const secOne = document.querySelector(".section-one")
const follower = document.querySelector(".mousefollower")
secOne.addEventListener('mousemove', function (dets) {
    gsap.to(follower,{
        x:dets.x +'px',
        y:dets.y +'px',
        delay:0.1,
        opacity:1
    })
  
   

})


secOne.addEventListener('mouseleave', function () {
    gsap.to(follower,{
      
        opacity:0
    })
  
   

})

gsap.from(".front-page h1 span",{
  y:300,
  stagger:0.1
})
gsap.from("#content span",{
  y:50,
  opacity:0,
  stagger:0.1
})