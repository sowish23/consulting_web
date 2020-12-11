import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = (props) => {
    return(
        <div className="Footer">
            <div className="Footer_content">
                <div className="Footer_logo">
                    <img src ="/assets/logo/logo.png" />
                </div>
                <div className="Footer_company_name">InG 입시연구소</div>
                <div className="Footer_info_box">
                    <div className="Footer_info">사업체명 : 코딱지닷컴</div>
                    <div className="Footer_info">대표자 : 강준호</div>
                    <div className="Footer_info">사업자 등록번호 : 127-56-00490 </div>
                    <div className="Footer_info">위치 : 대치동 906-23 만수빌딩 502 </div>
                    <div className="Footer_info">이메일 : ingconsulting@naver.com </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;