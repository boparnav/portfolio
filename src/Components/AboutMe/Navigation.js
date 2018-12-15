import React  from 'react';
import Image from '../../images/img_avatar3.png';


const Navigation=()=>{

    return(

<div >


                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                        </div>

                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-left">
                                <li><a href="#about">ABOUT</a></li>
                                <li><a href="#services">EDUCATION</a></li>
                                <li><a href="#portfolio">WORK </a></li>
                                <li><a href="#contact">CONTACT</a></li>
                            </ul>
                        </div>
                        </div>
                    </nav>
                      <div className="row">
                            <div className="col-sm-4">
                                 <span className="glyphicon glyphicon-signal logo"></span>
                            </div>
                    </div>


<div className="container-fluid bg-grey">
        <div className="row">
                    <div className="col-sm-4">
                        <span classNmae="glyphicon glyphicon-globe logo slideanim"></span>
                     </div>
<div className="col-sm-8">
        <h2>Our Values</h2>
    <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
    <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
</div>
</div>

</div>





    )



}
export default Navigation;