// Import modules and Material-UI icons
import React,{useState} from 'react'
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import "./SideBar.css"


/* This component receives 3 props from the Navbar component. The "direction" prop decides the side to anchor the drawer.
The "openDrawer" is a boolean value which is used to initialize the state of the drawer. "drawerContents" is the 
data to be displayed in the drawer*/

function SideBar({direction,openDrawer,drawerContents}) {

    // State for the drawer, required to close the drawer by pressing the 'arrow' icon at the top
    const [drawer, setDrawer] =  useState(openDrawer)

    return (

        // Material-UI module to render a Drawer component
        <Drawer
        className="drawer"
        variant="temporary"
        anchor={direction}
        open={drawer}
        >

            {/* Conditionally render 'arrow' icon at the top, depending on the direction of the drawer */}

            <div className = "drawer_header">
                <IconButton onClick={() => setDrawer(false)}>
                {direction === 'left' ? <ChevronLeftIcon fontSize="large" /> : <ChevronRightIcon fontSize="large" />}
                </IconButton>
            </div>

            <hr  style={{color:"white"}}/>


            {/* Show Profile Picture on the left menu sidebar */}

            {direction === 'left' && (
                <div className="profile_avatar" style={{backgroundImage:`url(https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80)`}}>
                    <h3>Hi, <br/> Doug Thompson</h3>        
                </div>
            )}

            {/* Loop through the data and display items as Menu List*/}

            <div className="drawer_contents">
                {drawerContents.map(item => (
                    <div key={item.header}>
                    <p>{item.header}</p>
                    <List>
                        {item.subHeader.map(content => (
                            <ListItem button key={content.id} className="list_items">
                                <ListItemIcon>{content.icon}</ListItemIcon>
                                <ListItemText primary = {content.title} />
                            </ListItem>
                        ))}
                    </List>
                    <br />
                    </div>
                )
                    
                
                )}

            </div>

        </Drawer>
    )
}

export default SideBar
