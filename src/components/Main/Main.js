import React from 'react'
import "./Main.css"
import { AiFillCheckCircle } from "react-icons/ai";

function Main() {
    return (
        <div className='main-container'>

            <div className="main-content">

                <div className="tag-line-container">

                    <h1 className='heading'>
                        Convert your videos to GIFs for free.
                    </h1>

                    <div className="para">Transform your videos into GIFs with our fast, easy, and free online converter tool. Convert to GIFs in just a few taps.</div>

                    <div className="btn-pricing-section">

                        <div className="upload-btn">
                            Upload your video
                        </div>

                        <div className="pricing-section">
                            <div className="pricing-content">
                              <AiFillCheckCircle/>  Free use forever
                            </div>
                            <div className="pricing-content">
                            <AiFillCheckCircle/>  No credit card required
                            </div>
                        </div>
                    </div>

                </div>

                <div className="tag-line-video-container">
                    <video width={600} height={610} src="https://www.adobe.com/express/feature/video/convert/media_157d5d74df4e234ac665835ea426a2ca667c7c5bf.mp4" autoPlay={true} loop={true} controls={false} muted></video>
                </div>

            </div>

        </div>

    )
}

export default Main