import React, { useState, useEffect } from "react";
import "./index.css";
import Header from '../common/Header'

const Home = (props) => {
    const headerOpacity = useState(true)

    return(
        <div className="Home_page">
            <Header headerOpacity={headerOpacity}/>
            <div className="Home_content">
                <div className="Home_section Home_section1">
                    <div className="Home_section1_content">
                        <div className="Home_section1_title_box">
                            <div className="Home_section1_title">InG 입시연구소</div>
                            <div className="Home_section1_subtitle">
                                <button>DOWNLOAD</button>
                            </div>
                        </div>
                        <div className="Home_section1_image">
                            <img src='/assets/img/mockup_phone.png' />
                        </div>
                    </div>
                    <div className="Home_section1_pagination">
                        <div className="Home_pagination_circles">
                            <div className="Home_pagination_circle"></div>
                            <div className="Home_pagination_circle"></div>
                            <div className="Home_pagination_circle"></div>
                            <div className="Home_pagination_circle"></div>
                            <div className="Home_pagination_circle"></div>
                            <div className="Home_pagination_circle"></div>
                            <div className="Home_pagination_circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;