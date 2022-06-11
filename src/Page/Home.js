import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStop,faSmile,faAngry,faCaretDown,faUser,faHome,faSignal,faBookmark,faExternalLink,faShoppingBag,faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Home = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div className=''>
        <div className=''>
            <div>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky="top" className='text-white p-0'>
          <Container fluid> 
            <Navbar.Brand >
             <h4 className='logo'><FontAwesomeIcon icon={faShoppingBag} style={{color:'white'}}/> Summary</h4>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="ms-3 mt-3">
                  <p className='ps-2'>Search</p>
                  <div className='d-lg-none d-block'>
                  <li className="list-unstyled pb-1"><FontAwesomeIcon icon={faHome} /> <a className='text-decoration-none ' href="http://">Instant</a></li>
                  <li className="list-unstyled pb-1"> <FontAwesomeIcon icon={faSignal} /> <a className='text-decoration-none text-white'href="http://">Schcdule</a></li>
                    <li className="list-unstyled"><FontAwesomeIcon icon={faSignal} /> <a className='text-decoration-none text-white'href="http://">Usage</a></li>
                  </div>
             </Nav>
             <Nav className="ms-auto mt-3">
                <p className='ps-2 ps-none'>Sign Out</p>
             </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
         </div>
        </div>
 {/* --------------------for desktop-------------   */}
    <div className='container-fluid'>  
      <div className='row'>
        <div className='col-2  d-lg-block d-none '>
            <div className='h-100 side-menu position-relative' style={{backgroundColor:'#F8F9FA',paddingTop:"20px"}}>
            <div className='ms-3'>
            <li className="list-unstyled pb-1"><FontAwesomeIcon icon={faHome} /> <a className='text-decoration-none ' href="http://">Instant</a></li>
           <li className="list-unstyled pb-1"> <FontAwesomeIcon icon={faSignal} /> <a className='text-decoration-none text-dark'href="http://">Schcdule</a></li>
            <li className="list-unstyled"><FontAwesomeIcon icon={faSignal} /> <a className='text-decoration-none text-dark'href="http://">Usage</a></li>
            </div>
            <div className='user position-absolute bottom-0 border-top w-100' >
                <div className='d-flex align-items-center my-1'>
                <FontAwesomeIcon className='ms-2 me-2' icon={faUser} style={{color:'white',backgroundColor:"#CFD4D9",padding:"10px",borderRadius:"50px",fontSize:"15px"}} /> 
                <h6 className='mt-2 me-4'>User Name</h6>
             <FontAwesomeIcon icon={faCaretDown} style={{color:'#6C757D'}}/> 
                </div>
            </div>
            </div>
        </div>

      <div className='col-12 col-md-10  py-3 side-content'>
      <div className='row align-items-center  '>
            <div className=' col-4 text-end'>
                <button className='btn btn-primary w-75'>URL</button>
            </div>   
            <div className='col-4 text-center '>
                <h2 style={{color:'#0D6EFD',fontSize:'16px'}}>Text</h2>      
            </div>   
            <div className='col-4 d-flex align-items-center text-center'>
                <h2 style={{color:'black',fontSize:'16px'}}>Document</h2>
                <div className='d-lg-none d-block ms-5 '>
            </div>
        </div>
        </div>  
        <div className='row'style={{marginTop:"55px"}}>
            <div className='col-md-4 col-12'>
            <input type="text" className="form-control" id="exampleFormControlInput1" />
            <button type="submit" className="btn btn-primary w-100 mt-2 mb-4">Confirm identity</button>
            </div>
            <div className='col-md-8 col-12'>
                <div className='card p-4'>
                    <div className='comment-area row align-items-top'>
                        <div className='comment-box col-6'>
                            <h3><FontAwesomeIcon icon={faStop} style={{color:'#0D6EFD'}} /> Virtual Commute</h3>
                            <div className='comment-date d-flex'>
                                <div className='mail'>
                                    <p>microsoft.com</p>
                                </div>
                                <div className='date'>
                                    <p>April 14 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 text-end'>
                        <FontAwesomeIcon className='me-2' icon={faShoppingBag} />
                        <FontAwesomeIcon className='me-2' icon={faExternalLink} style={{faExternalLink}} />
                        <FontAwesomeIcon icon={faBookmark} style={{faBookmark}} />
                        </div>
                    </div>
                    <div className='comment-description'>
                        <div className='comment-top'>
                        <p>The Up-next card prompts you to "wrap up your day," you can select it to start your virtual commute now. If you've configured virtual commute reminders, the message appears 30 minutes before the time that you configured. For information about making this and other settings, see Insights app settings.</p>
                        <p> Within Protect time </p>
                        <p>In Protect time, when prompted with Ready to wrap up, select Start. This causes your virtual commute to start immediately. Set up virtual commutes The first time you open Protect time, you are prompted to schedule your virtual-commute reminders. Select the days and time of day you want to see the virtual commute reminders, and then select Set reminder. You can schedule reminders for any day of the week, including days not configured as workdays.</p>
                        </div>
                       <div className='text-center mt-5'>
                       <button className='comment-bt-1 btn btn-primary me-2'> <FontAwesomeIcon icon={faPlusSquare} />  share Summary</button>
                        <button className='comment-bt-2 btn border border-2 border-primary'><FontAwesomeIcon icon={faPlusSquare} style={{background:"white"}}/>  View Original</button>
                        <p className='mt-3'>How was This Summery?</p>
                        <FontAwesomeIcon className='me-2' icon={faAngry} />   
                        <FontAwesomeIcon icon={faSmile} /> 
                       </div>
                    </div>
                </div>
            </div>
        </div> 
      </div>
      </div>
    </div>
     </div>
  
    );
};

export default Home;