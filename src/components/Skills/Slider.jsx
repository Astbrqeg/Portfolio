import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1
    }
};

const sliderImageUrl = [
    //react
    {
        url:
            "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png"
    },
    //js
    {
        url:
            "https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png"
    },
    //postgresql
    {
        url:
            "https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
    },
    //express
    {
        url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Status_iucn_EX_icon_blank.svg/2048px-Status_iucn_EX_icon_blank.svg.png"
    },
    //sql
    {
        url:
            "https://icons.veryicon.com/png/o/application/designer-icon/sql-5.png"
    },
    //c#
    {
        url:
            "https://cdn-icons-png.flaticon.com/512/381/381704.png"
    },
    //node js
    {
        url:
            "https://cdn-icons-png.flaticon.com/512/919/919825.png"
    },
    //github
    {
        url:
            "https://cdn-icons-png.flaticon.com/512/25/25231.png"
    },
    //linux
    {
        url:
            "https://cdn-icons-png.flaticon.com/512/518/518713.png"
    },
    //css
    {
        url:
            "https://cdn-icons-png.flaticon.com/512/919/919826.png"
    },
    //html
    {
        url:
            "https://cdn-icons-png.flaticon.com/512/919/919827.png"
    },
    //figma
    {
        url:
            "https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&h=670&q=75&fit=max&auto=format"
    }
];
const Slider = () => {
    return (
        <div className="parent">
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
                {sliderImageUrl.map((imageUrl, index) => {
                    return (
                        <div className="slider" key={index}>
                            <img src={imageUrl.url} alt="skills" />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default Slider;
