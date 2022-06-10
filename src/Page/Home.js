import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStop,faSmile,faAngry,faCaretDown,faUser,faBars,faHome,faSignal,faBookmark,faExternalLink,faShoppingBag,faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import './Home.css'

const Home = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div className='container-fluid'>
 {/* --------------------for desktop-------------   */}
    <div className=''>  
      <div className='row'>
        <div className='col-2  d-lg-block d-none '>
            <div className='h-100 side-menu' style={{backgroundColor:'#F8F9FA',paddingTop:"20px"}}>
            <div className='ms-3'>
            <li><FontAwesomeIcon icon={faHome} /> <Link to=""><span style={{color:"#0D6EFD"}}>Instant</span></Link></li>
            <li><FontAwesomeIcon icon={faSignal} /> <Link to="">Schcdule</Link></li>
            <li><FontAwesomeIcon icon={faSignal} /> <Link to="">Usage</Link></li>
            </div>
            <div className='user '>
                <div className='d-flex align-items-center my-1'>
                <FontAwesomeIcon className='ms-2 me-2' icon={faUser} style={{color:'white',backgroundColor:"#CFD4D9",padding:"10px",borderRadius:"50px",fontSize:"15px"}} /> 
                <h6 className='mt-2 me-4'>User Name</h6>
            <FontAwesomeIcon icon={faCaretDown} style={{color:'#6C757D'}}/> 
                </div>
            </div>
            </div>
        </div>
{/* --------------------for Mobile-------------   */}
    <div className='col-12  mt-3 d-lg-none d-block'>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <li><FontAwesomeIcon icon={faHome} /> <Link to=""><span style={{color:"#0D6EFD"}}>Instant</span></Link></li>
            <li><FontAwesomeIcon icon={faSignal} /> <Link to="">Schcdule</Link></li>
            <li><FontAwesomeIcon icon={faSignal} /> <Link to="">Usage</Link></li>
        </Offcanvas.Body>
      </Offcanvas>
  </div>
      <div className='col-12 col-md-10  py-3 side-content'>
      <div className='row align-items-center  '>
            <div className=' col-4 text-end'>
                <button className='home-btn'>URL</button>
            </div>   
            <div className='col-4 text-center '>
                <h2 style={{color:'#0D6EFD',fontSize:'16px'}}>Text</h2>      
            </div>   
            <div className='col-4 d-flex align-items-center text-center'>
                <h2 style={{color:'black',fontSize:'16px'}}>Document</h2>
                <div className='d-lg-none d-block ms-5 '>
            <Button  onClick={handleShow} style={{padding:0,backgroundColor:"transparent",border:'0'}}>
            <FontAwesomeIcon icon={faBars} style={{color:'black'}} /> 
            </Button>
            </div>
        </div>
        </div>  
        <div className='row'style={{marginTop:"55px"}}>
            <div className='col-md-4 col-12'>
            <input type="text" className="form-control" id="exampleFormControlInput1" />
            <button type="submit" className="submit-btn mb-4">Confirm identity</button>
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
                        <FontAwesomeIcon className='me-2' icon={faShoppingBag} style={{}} />
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
                       <button className='comment-bt-1'> <FontAwesomeIcon icon={faPlusSquare} style={{}}/>  share Summary</button>
                        <button className='comment-bt-2'><FontAwesomeIcon icon={faPlusSquare} style={{background:"white"}}/>  View Original</button>
                        <p>How was This Summery?</p>
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