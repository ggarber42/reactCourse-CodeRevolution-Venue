import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import './SideDrawer';
import SideDrawer from './SideDrawer';

const Header = () => {

    const [open, setOpen] = useState(false);
    const [headerShow, setHeaderShow] = useState(false)

    const toogleDrawer = (value) =>{
        setOpen(value);
    }

    const handleScroll = () => window.scrollY ? setHeaderShow(true) : setHeaderShow(false);
    

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
    },[])

        return (
            <AppBar 
                position="fixed"
                style ={{
                    backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
                    boxShadow: 'none',
                    padding: '10px 0px'
                }}
            >
               <Toolbar>

                    <div className="header_">
                        <div className="font_righteous header_logo_venue">The Venue</div>
                        <div className="header_logo_title">Musical Events</div>
                    </div>

                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={()=> toogleDrawer(true)}
                    >
                       
                        <MenuIcon/>

                    </IconButton>

                    <SideDrawer 
                        open={open}
                        onClose={() => toogleDrawer(false)}
                    />

               </Toolbar> 
            </AppBar>
        );
}

export default Header;