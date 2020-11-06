// import Card and related modules from material ui
import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import './Details.css'


function Details({data}) {

    return (

        // The static data is looped through and every even item is displayed in the reverse order
        <>
        {data.map((info,index) => (

            index % 2 === 0 ?

            (<div className="details_container" key={index}>

                <Avatar src={info.image}  />

                <div className="text_info">
                    <h3>{info.title}</h3>
                    <p>{info.description}</p>
                </div>

            </div>)
            : (

            <div className="details_container" key={index}>


            <div className="text_info">
                <h3>{info.title}</h3>
                <p>{info.description}</p>
            </div>

            <Avatar src={info.image}  />

            </div>

            ))
        )}

        </>
    )
}

export default Details
