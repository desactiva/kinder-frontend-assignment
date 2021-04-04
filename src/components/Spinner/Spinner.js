import React from "react";

export const Spinner = ({size}) => (
    <svg version="1.1" id="Layer_1" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
         x="0px" y="0px" viewBox="0 0 297.6 293.7" xmlSpace="preserve"
         height={`${size}px`}
         width={`${size}px`}>
        <g transform="rotate(150 50 50)">
            <path d="M80 50 A30 30 0 0 1 59.270509831248425 78.53169548885461" fill="none" stroke="#ffffcb"
                  strokeWidth="10"/>
            <path d="M59.270509831248425 78.53169548885461 A30 30 0 0 1 25.72949016875158 67.6335575687742" fill="none"
                  stroke="#fac090" strokeWidth="10"/>
            <path d="M25.72949016875158 67.6335575687742 A30 30 0 0 1 25.729490168751575 32.366442431225806" fill="none"
                  stroke="#ff7c81" strokeWidth="10"/>
            <path d="M25.729490168751575 32.366442431225806 A30 30 0 0 1 59.27050983124842 21.46830451114539" fill="none"
                  stroke="#c0f6d2" strokeWidth="10"/>
            <path d="M59.27050983124842 21.46830451114539 A30 30 0 0 1 80 49.99999999999999" fill="none" stroke="#dae4bf"
                  strokeWidth="10"/>
            <animateTransform attributeName="transform" type="rotate" values="0 50 50;360 50 50" times="0;1" dur="1"
    repeatCount="indefinite"/>
        </g>
    </svg>
);