import React, { useState, useEffect } from "react";
import "./index.css";
import Header from '../common/Header'
import Footer from '../common/Footer'

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

                <div className="Home_section Home_section5">
                    <div className="Home_section5_icon">
                        <img src="/assets/img/university_hat.png" />
                    </div>
                    <div className="Home_section5_content">
                        <p className="Home_section5_title">‘나에게 가장 유리한 대학 찾기’란 무엇인가?</p>
                        <p className="Home_section5_text">
                            한 학생의 대학별 점수는 반영 과목, 과목별 반영 비율, 과목별 가중치, 내신 반영비율, 표점 or 백분위에 따라, 대학별로 유불리가 존재합니다. <br/>
                            그리고 이러한 유불리는 전형 총점이 1000점 만점일 때, 보통 3~10점의 큰 점수차가 납니다. <br/>
                            (최초합격생과 추가합격생의 점수 차가 보통 0.1점이라는 점을 고려해보면, 꽤 큰 차이입니다). <br/>
                        </p>
                        <p className="Home_section5_text">
                            현재 모든 입시기관에서는 특정 과목을 선택했을 때의 유불리는 제공하지만, 과목별 반영비율, 과목별 가중치, <br/>
                            내신 반영비율, 표점 or 백분위에 따른 유불리 차이는 제공하지 않습니다. <br/>
                            ING는 이 부분을 특허출원하여, 유일하게 제공합니다. <br/>
                        </p>
                    </div>
                </div>

                <div className="Home_section Home_section6">
                    <div className="Home_section6_content" style={{backgroundImage : 'url( "/assets/img/mockup_phone2.png" )'}}>
                        <div className="Home_section6_infomation_top">
                            <div className="Home_section6_infomation_icon">
                                <img src="/assets/img/info_icon.png" />
                            </div>
                            <div className="Home_section6_infomation_text">
                                <p className="Home_section6_text_title">맞춤식 정보란?</p>
                                <p>예를 들어 서연고에 지망하고자 하는 학생에게 중하위 대학 정보는 필요 없을것입니다.</p>
                                <p>학생의 점수와 계열에 맞춘 입시정보를 앱 푸쉬로 제공합니다.</p>
                            </div>
                        </div>
                        {/* <div className="Home_section6_phone">
                            <img src="/assets/img/mockup_phone2.png" />
                        </div> */}
                        <div className="Home_section6_infomation_bottom">
                            <div className="Home_section6_infomation_icon">
                                <img src="/assets/img/bell_icon.png" />
                            </div>
                            <div className="Home_section6_infomation_text">
                                <p className="Home_section6_text_title">앱 푸쉬로 보내는 정보</p>
                                <p>특정 대학이나 부문에 있어서는 고급 정보를 소지하지만, 모든 대학들의 고급 정보를 소지하긴 힘듭니다. </p>
                                <p>그래서, 이런 정보들은 외부적으로 매뉴얼화 하기 보다는, 앱푸쉬로 해당 학생에게 제공하려 합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Home_section Home_section7">
                    <div className="Home_section7_icon">
                        <img src="/assets/img/teacher_icon.png" />
                    </div>
                    <div className="Home_section7_content">
                        <p className="Home_section7_title">대표가 대치동 입시 학원 원장으로 20년이라던데, 입시 컨설팅에 노하우는?</p>
                        <p className="Home_section7_text">
                            20년간의 컨설팅의 노하우는 케이스 바이 케이스라서, 일반적으로 제공하기 보단 <br/>
                            AI와 앱의 기술적인 도움을 받아서, ‘맞춤식’으로 제공할 예정입니다.
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;