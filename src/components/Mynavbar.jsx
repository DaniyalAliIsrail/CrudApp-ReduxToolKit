import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

const Mynavbar = () => {
  const allUser = useSelector((state)=>{
    return state.app.users;
  });
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <Link to="/"> {/* Use Link component here */}
          <MDBNavbarBrand>ReduxCrud</MDBNavbarBrand>
        </Link>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              {/* Use Link component here */}
                <MDBNavbarLink active>Create Post</MDBNavbarLink>
              
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to="/read"> 
                <MDBNavbarLink>All post : {allUser.length}</MDBNavbarLink>
              </Link>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default Mynavbar;
