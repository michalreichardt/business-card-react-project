import React from "react"
import ReactDOM from "react-dom"

export default function About() {
    return(<div>
            <img className="about--image" src="./bio-img.jpg"/>
            <div className="about--texts--wrapper">
                <p className="about--name">Laura Smith</p>
                <p className="about--position">Frontend Developer</p>
                <p className="about--webside">laurasmith.website</p>
                <div className="about--button--wrapper">
                    <button className="about--button about--button-email">
                        <svg width="26" height="12" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.10241 4.70721L8.50001 7.90561L14.8976 4.70721C14.8739 4.29957 14.6953 3.9164 14.3983 3.63619C14.1012 3.35598 13.7083 3.19994 13.3 3.20001H3.70001C3.29167 3.19994 2.89876 3.35598 2.60175 3.63619C2.30473 3.9164 2.12609 4.29957 2.10241 4.70721Z" fill="#1E1F26"/>
                            <path d="M14.9 6.49441L8.50001 9.69441L2.10001 6.49441V11.2C2.10001 11.6244 2.26858 12.0313 2.56864 12.3314C2.86869 12.6314 3.27566 12.8 3.70001 12.8H13.3C13.7244 12.8 14.1313 12.6314 14.4314 12.3314C14.7314 12.0313 14.9 11.6244 14.9 11.2V6.49441Z" fill="#1E1F26"/>
                        </svg>
                        Email</button>
                    <button className="about--button about--button-linkedin">  
                        <svg width="26" height="12" viewBox="0 -2 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7143 0.333344H1.28275C0.758939 0.333344 0.333344 0.764891 0.333344 1.29465V12.7054C0.333344 13.2351 0.758939 13.6667 1.28275 13.6667H12.7143C13.2381 13.6667 13.6667 13.2351 13.6667 12.7054V1.29465C13.6667 0.764891 13.2381 0.333344 12.7143 0.333344ZM4.36311 11.7619H2.38692V5.39882H4.36608V11.7619H4.36311ZM3.37501 4.52977C2.74108 4.52977 2.22918 4.01489 2.22918 3.38394C2.22918 2.75299 2.74108 2.23811 3.37501 2.23811C4.00596 2.23811 4.52084 2.75299 4.52084 3.38394C4.52084 4.01787 4.00894 4.52977 3.37501 4.52977V4.52977ZM11.7708 11.7619H9.79465V8.66668C9.79465 7.92858 9.77977 6.97918 8.76787 6.97918C7.73811 6.97918 7.58037 7.78275 7.58037 8.61311V11.7619H5.60418V5.39882H7.50001V6.26787H7.5268C7.79168 5.76787 8.43751 5.24108 9.39882 5.24108C11.3988 5.24108 11.7708 6.55953 11.7708 8.27382V11.7619V11.7619Z" fill="white"/>
                        </svg>
                        LinkedIn</button>
                </div>
            </div>
        </div>
    )
}