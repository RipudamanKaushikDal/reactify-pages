// import necessary modules and icons
import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Welcome.css'

function Welcome() {
    return (

        // Define the welcome section
        <div className="welcome">
            <h2>Namaste and Welcome</h2>
            <div className="welcome_icon">
                <div className="icon_BorderLeft" />
                <IconButton  >
                    <FavoriteIcon fontSize="large"/>
                </IconButton>
                <div className="icon_BorderRight" />
            </div>
                
            <p>Your catchy intro goes here</p>
        </div>
    )
}

export default Welcome
