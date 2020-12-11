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

                <div className="Home_section Home_section2">
                    <div className="Home_section2_title_box">
                        <div className="Home_section2_title">InG 정시 합격 예측</div>
                        <div className="Home_section2_subtitle">대입 정시 컨설팅</div>
                    </div>
                    <div className="Home_section2_video_box">
                        <video autoplay controls loop muted>
                            <source src="/assets/video/최종본.mp4" type="video/mp4" />
                            해당 브라우저는 동영상 재생을 지원하지 않습니다.
                        </video>
                    </div>
                    <div className="Home_section2_sub_box">
                        <div className="Home_section2_sub">
                            입시 빅데이터를 기반으로 한 <br/>
                            AI 맞춤형 입시 코칭 시스템
                        </div>
                    </div>
                </div>

                <div className="Home_section Home_section3">
                    <div className="Home_section3_title_box">
                        <div className="Home_section3_title">왜 ‘InG’ 정시 합격 예측을 사용해야 하는가?</div>
                    </div>
                    <div className="Home_section3_content">
                        <img src="/assets/img/section3_icons.png" />
                    </div>
                </div>

                <div className="Home_section Home_section4">
                    <div className="Home_section4_content">
                        <img src="/assets/img/section4_icons.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;