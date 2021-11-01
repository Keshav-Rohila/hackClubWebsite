import React, {useRef, useState, useEffect} from 'react';
import Carousel from "react-elastic-carousel";
import ReactRoundedImage from "react-rounded-image";
import "./Team.css";

import Image from "../assests/images/noPerson.png"

const members = [{
        name: "Shubham Gupta",
        position: "Lead",
        imageURL: Image
    },{
        name: "Keshav Kumar Rohila",
        position: "Co-Lead",
        imageURL: Image
    },{
        name: "Vinay Sharma",
        position: "Secretary",
        imageURL: Image
    },{
        name: "Shristi Agarwal",
        position: "Jr. Secretary",
        imageURL: Image
    },{
        name: "Manash Khetan",
        position: "Tech Lead",
        imageURL: Image
    },{
        name: "Deepak Verma",
        position: "Web Development Lead",
        imageURL: Image
    },{
        name: "Shruti Agarwal",
        position: "Management Lead",
        imageURL: Image
    },{
        name: "Dheeraj Sharma",
        position: "Designer / Editor",
        imageURL: Image
    },{
        name: "Pooja Verma",
        position: "Designer / Editor",
        imageURL: Image
    },{
        name: "Arjun Sharma",
        position: "Outreach Manager",
        imageURL: Image
    },
]


function Team() {
    console.log("width " + window.innerWidth);
    const [itemsToShow, setItemsToShow] = useState(4);
    const carouselRef = useRef(null)

    useEffect(() => {
        if(window.innerWidth < 500)
            setItemsToShow(1);
        else if(window.innerWidth < 800)
            setItemsToShow(2);
        else if(window.innerWidth < 1100)
            setItemsToShow(3);
    }, [window.innerWidth])

    const onNextStart = (currentItem, nextItem) => {
        console.log(currentItem);
        if (currentItem.index >= nextItem.index/4) {
          // we hit the last item, go to first item

          carouselRef.current.goTo(0);
        }
      };
      
      const onPrevStart = (currentItem, nextItem) => {
          console.log(currentItem);
        if (currentItem.index <= nextItem.index/4) {
          // we hit the first item, go to last item
          carouselRef.current.goTo(9);
        }
      };
    
    return (
        <div id = "team" className = "team">
            <h1>Meet Our Team</h1>
            
           <Carousel className = "team__carousel" autoPlaySpeed = {3000} 
                    enableAutoPlay
                    itemsToShow = {itemsToShow}
                    infinite = {true}
                    ref={carouselRef}
                    onPrevStart={onPrevStart}
                    onNextStart={onNextStart}
                    >
                    
                {members.map(member => (<div className = "team__member">
                   <ReactRoundedImage 
                        image = {member.imageURL}
                        imageWidth = "160"
                        imageHeight = "160"
                        roundedSize = "5"
                        hoverColor = "#DD1144"
                    />
                    <h3 className = "team__name">{member.name}</h3>
                    <h4 className = "team__position">{member.position}</h4>
               </div>))}
               
           </Carousel> 
        </div>
    )
}

export default Team
