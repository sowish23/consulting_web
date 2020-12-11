import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = (props) => {
    const {headerOpacity} = props
    return(
        <div className={headerOpacity ? "Header Header_opacity" : "Header"}>
            <div className="Header_content">
                <div className="Header_logo">
                    <img src ="/assets/logo/logo.png" />
                </div>
                <div className="Header_nav_box">
                    <div className="Header_nav">홈</div>
                    <div className="Header_nav">합격 예측</div>
                    <div className="Header_nav">AI맞춤 컨설팅</div>
                    <div className="Header_nav">모의지원</div>
                    <div className="Header_nav">설정</div>
                </div>
            </div>
        </div>
    );
}

export default Header;