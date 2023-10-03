let rect = document.querySelector(".rectangle");

rect.addEventListener("mousemove",function(mousedetails){
    let rect_pos = rect.getBoundingClientRect();
    let mousepos = mousedetails.clientX;

    let posinrec = mousepos - rect_pos.left;

    if(posinrec < rect_pos.width/2 ){
        let red = gsap.utils.mapRange(0,rect_pos.width/2,255,0,posinrec);
        gsap.to(rect,{
            backgroundColor: `rgb(${red},0,0)`,
            ease: Power4
        });
    } 
    else{
        let blue = gsap.utils.mapRange(rect_pos.width/2,rect_pos.width,0,255,posinrec);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${blue})`,
            ease:Power4
        });
    }
})

// 1st step make sure mouse rectangle ka andr ho
// 2nd step m pta lgao rectangle li pos
// 3rd step m mouse ki pos
// 4th m check l or r
// 5th step use gsap for mapping mouse pos with col

