// Import necessary modules
import React from 'react'
import './Banner.css'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { virtualize } from 'react-swipeable-views-utils';



function Banner({data}) {

    const propData = data;

    // Library to add auto-carousel effect to banner
    const AutoPlaySwipeableViews = autoPlay(virtualize(SwipeableViews));

    // Function to render slides
    const BannerData = () =>
        (

        propData.map((selectedData,index) => (
            <header className="banner" style={{backgroundImage:`url(${selectedData.image})`}} key={index}>
                <div className="banner_contents">
                    <h1 className="banner_title">
                        {selectedData.title}
                    </h1>

                    <div className="banner_description">
                        <h4>{selectedData.description}</h4>
                    </div>

                    <div >
                        <button className={`banner_button ${index%2===0 && "banner_alternate"}`} >Start Now</button>
                    </div>                
                </div>
                <div className="banner--fadebottom"></div>
        </header> 


        ))
    )



    return (

        // Render various banner components with a carousel effect
        <AutoPlaySwipeableViews interval={4000} slideCount={propData.length} slideRenderer={BannerData} / >
    
    )
}



export default Banner
