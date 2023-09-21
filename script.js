	const throttleFunction=(func, delay)=>{

	let prev = 0;
	return (...args) => {
		let now = new Date().getTime();
		if(now - prev> delay){
            prev = now;
            return func(...args);
		}
	}
	}
    document.querySelector(".center")
	.addEventListener("mousemove", throttleFunction((dets)=>{
        var rnd = Math.floor(Math.random()*10)

        var div = document.createElement("div");
        div.classList.add('imagediv')
        div.style.left = dets.clientX + 'px' ;
        div.style.top = dets.clientY+ 'px' ;
        var myImages= ["https://images.unsplash.com/photo-1694537745700-b4a03c2a9043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60","https://media.istockphoto.com/id/1311345562/photo/ancient-buddhist-temple-at-sanchi-madhya-pradesh-ind.jpg?s=2048x2048&w=is&k=20&c=Qn3mAHpKvpiPSjphIIo48TVVuagj81bPif4a540aIps=","https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        ];

        var img = document.createElement("img");

        myImages.forEach(function(val,index){
            console.log(val,index)
            if(rnd===index){
                console.log("yeeeee" )
                console.log(val)
                img.setAttribute("src", val)
            }
        })
        div.appendChild(img);

        document.body.appendChild(div)

        gsap.to(img, {
            y:"0",
            ease:Power1,
            duration:.6
        })
        
        gsap.to(img, {
            y:"100%",
            ease:Power2,
            delay:.6
        })

        setTimeout(() => {
            div.remove();
        }, 2000);
    }, 300));


   