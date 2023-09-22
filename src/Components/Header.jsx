import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

const Header = () => {
  return (
    <div><MDBNavbar light bgColor='info'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        <img
        className='rounded-circle'
          src='https://th.bing.com/th/id/R.32b9989da8299db0cd227117fcf4d8bf?rik=xi3%2flD%2fCtn36Lg&riu=http%3a%2f%2fs.myniceprofile.com%2fmyspacepic%2f2049%2f204945.gif&ehk=cPTsF9aWHUQAMpjXj3XxKQZEtofAM%2bR3SaCzzkp4ZfA%3d&risl=&pid=ImgRaw&r=0'
          height='30'
          alt=''
          loading='lazy'
        />
        <h2 style={{color:'#012046'}}>MessageApp</h2>
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar>
</div>
  )
}

export default Header