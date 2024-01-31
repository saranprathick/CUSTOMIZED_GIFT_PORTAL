import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import img1 from "/src/assets/images/ad1.png"
// import img2 from "/src/assets/images/ad2.png"
// import img3 from "/src/assets/images/ad3.png"
// import img4 from "/src/assets/images/ad.jpeg"
// import img5 from "/src/assets/images/gift.gif"
import '../assets/css/admin.css';
import { useNavigate } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: calc(1em + ${theme.spacing(4)}),
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



function Adminspages() {
    const navigate = useNavigate()
    const navi = () =>{
        navigate('/remove')
    }
    const navi1 = () =>{
        navigate('/')
    };
    const navi2 = () =>{
        navigate('/mainpage')
    };
    const navi3 = () =>{
        navigate('/about')
    };
    const navi4 = () =>{
        navigate('/gift')
    };
    const navi5 = () =>{
        navigate('/pay')
    };
    const handleClick = () =>{
        alert("Successfully Added")
    };
    return ( 
    //     <Box sx={{ flexGrow: 1 }}>
    //     <AppBar position="static">
    //       <Toolbar>
    //         <IconButton
    //           size="large"
    //           edge="start"
    //           color="inherit"
    //           aria-label="open drawer"
    //           sx={{ mr: 2 }}
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Typography
    //           variant="h6"
    //           noWrap
    //           component="div"
    //           sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
    //         >
    //           MUI
    //         </Typography>
    //         <Search>
    //           <SearchIconWrapper>
    //             <SearchIcon />
    //           </SearchIconWrapper>
    //           <StyledInputBase
    //             placeholder="Search…"
    //             inputProps={{ 'aria-label': 'search' }}
    //           />
    //         </Search>
    //       </Toolbar>
    //     </AppBar>
    //   </Box>
    <div>
        <div className="sidebar">
          <div className="sidebar__sections">
          <ul>
              <li><a onClick={navi1}>
                  <svg className="lnr lnr-layers icon"><use xlinkHref="#lnr-layers" /></svg>
                  <img src={img1}/>
                  Home</a></li>
              <li><a onClick={navi2}>
                  <svg className="lnr lnr-map-marker icon"><use xlinkHref="#lnr-map-marker" /></svg>
                  <img src={img2}/>
                  Category</a>
              </li>
              <li><a onClick={navi3}>
                  <svg className="lnr lnr-book icon"><use xlinkHref="#lnr-book" /></svg>
                  <img src={img3}/>
                  About</a></li>
              <li><a onClick={navi5}>
                  <svg className="lnr lnr-bus icon"><use xlinkHref="#lnr-bus" /></svg>
                  <img src={img4} style={ {height:"66px",width:"66px"} }/>
                  Payment</a></li>
              <li><a onClick={navi4}>
                  <svg className="lnr lnr-bubble icon"><use xlinkHref="#lnr-bubble" /></svg>
                  <img src={img5}/>
                  Gifts</a></li>
            </ul>
          </div>
          <div className="sidebar__subsections">
            <div className="sidebar__subsections-brand">Admin 1.0</div>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Edit About</a></li>
              <li><a onClick={navi}>Remove</a></li>
              <li><a href="#">Showcase</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="page">
          <div className="header">
            <div className="header__search">
              <input type="text" placeholder="Search..." />
            </div>
            <div className="header__date">
              <span id="date" />
            </div>
            <div className="header__user">
              Hello, Admin <svg className="lnr lnr-cog icon"><use xlinkHref="#lnr-cog" /></svg>
            </div>
          </div>
          <div className="content">
            <div className="title" id="title-bar">
              <div className="title__text">
                <span>Welcome</span>
                <h1>Add Gifts</h1>
              </div>
              <div className="title__extras">
                <svg className="lnr lnr-star icon"><use xlinkHref="#lnr-star" /></svg> Featured post
              </div>
            </div>
            <div className="content__main">
              <div className="content__main-page">
                <div className="box" style={{height: '2000px'}}>
                  <form>
                    <div className="field__group">
                      <label>Title</label>
                      <input type="text" />
                    </div>
                    <div className="field__group">
                      <label>Subtitle</label>
                      <input type="text" />
                    </div>
                    <div className="field__group">
                    <label for="cars">Choose a category:</label>
                        <select name="cars" id="cars">
                        <option value="volvo">Birthday Gifts</option>
                        <option value="saab">Roses</option>
                        <option value="mercedes">Teddy</option>
                        <option value="audi">Rings</option>
                        </select>
                    </div>

                    <div className="field__group">
                      <label>Image</label>
                      <div className="imagedrop">
                        {/* <svg className="lnr lnr-cloud-upload icon"><use xlinkHref="#lnr-cloud-upload" /></svg> */}
                        <span>Drop image here to upload</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="content__main-sidebar" id="status">
                <div className="box">
                  <div className="box__line">
                    <h5>Status</h5>
                    <a href="#" className="published">
                      Published
                    </a>
                    <a href="#" className>
                      Draft
                    </a>
                  </div>
                  <div className="box__line">
                    <h5>Schedule</h5>
                    <a href="#" className>
                      Now
                    </a>
                  </div>
                  <button id="submit" className="button" onClick={handleClick}>Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     );
}

export default Adminspages;