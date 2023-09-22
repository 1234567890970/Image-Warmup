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
        var myImages= ["https://images.unsplash.com/photo-1694537745700-b4a03c2a9043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60","https://media.istockphoto.com/id/511119796/photo/moti-masjid-pearl-mosque-bhopal-india.jpg?s=2048x2048&w=is&k=20&c=0HaIyC1DAUy51eM471zJt8jDr6HVrPOJ5OKCLGHauwI=","https://media.istockphoto.com/id/1311345562/photo/ancient-buddhist-temple-at-sanchi-madhya-pradesh-ind.jpg?s=2048x2048&w=is&k=20&c=Qn3mAHpKvpiPSjphIIo48TVVuagj81bPif4a540aIps=","https://media.istockphoto.com/id/1511563813/photo/ayutthaya.jpg?s=2048x2048&w=is&k=20&c=HVExo_uLgSKsNQ94vHLQl8ZKbSjSkGixjjL7gBHh5sY=","https://media.istockphoto.com/id/511119796/photo/moti-masjid-pearl-mosque-bhopal-india.jpg?s=2048x2048&w=is&k=20&c=0HaIyC1DAUy51eM471zJt8jDr6HVrPOJ5OKCLGHauwI=",
        "https://media.istockphoto.com/id/895671482/photo/sanchi-stupa-madhya-pradesh-india-ancient-buddhist-building-religion-mystery-carved-stone.jpg?s=2048x2048&w=is&k=20&c=HYgd-2EEVFvzjHzwaSd-FtPeWxgeVbDhRXTZAzE6Ddc=","https://media.istockphoto.com/id/1025923644/photo/yantra-temple-in-amarkantak-madhya-pradesh-india.jpg?s=2048x2048&w=is&k=20&c=lLV9FggUbH1n5_BC97a4AmcagPUDTfjn7CIw5s0IkpM=","https://media.istockphoto.com/id/520412453/photo/wat-yai-chai-mongkhon-ayutthaya-thailand.jpg?s=2048x2048&w=is&k=20&c=eK39gRTz8utbcjmX1nlqdBr2Hcmz1xlVQ0bzsR_ArDM=","https://media.istockphoto.com/id/1006781524/photo/remains-of-buddhist-temples-in-ayutthaya-thailand.jpg?s=612x612&w=0&k=20&c=Ci-whmOdDJJRJcG-Z5eSEOTGRmUssMkBCK9nETpjFgc=","https://media.istockphoto.com/id/1458684438/photo/historical-architecture-wat-yai-chai-mongkol-the-old-temple-in-ayutthaya-province-thailand.jpg?s=612x612&w=0&k=20&c=s3RyMmxLPr0SX-C3hDSyot3QTHypcyyfDr-XP_Htus4=","https://media.istockphoto.com/id/1458684438/photo/historical-architecture-wat-yai-chai-mongkol-the-old-temple-in-ayutthaya-province-thailand.jpg?s=612x612&w=0&k=20&c=s3RyMmxLPr0SX-C3hDSyot3QTHypcyyfDr-XP_Htus4=","https://media.istockphoto.com/id/464378515/photo/buddhist-temple-wat-yai-chai-mongkon.jpg?s=612x612&w=0&k=20&c=puragx5KKri3Y-DRmkudTORjp2pEqYxyWiKwvb8VUq0="
        ];

        var img = document.createElement("img");

        myImages.forEach(function(val,index){
            // console.log(val,index)
            if(rnd===index){
                // console.log("yeeeee" )
                // console.log(val)
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
    }, 200));


   