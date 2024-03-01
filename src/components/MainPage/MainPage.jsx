import React from "react";
import Flag from "../../img/Universal-Humanity-Flag-of-Peace.jpg";
import symble from "../../img/symble.png";
import pic1 from "../../img/pic-2.png";
import pic2 from "../../img/pic-3.png";
import page1bg from "../../img/bg.jpeg";
import "./mainpage.style.scss";

const MainPage = () => {
	return (
		<div>
			<div className="pages-container-main">
				<div className="page-container">
					<div className="pages page1">
						<img className="page-background" src={page1bg} alt="bg" />
						<div className="page-slider">
							<div className="image-container">
								<img src={Flag} alt="pic1" />
								<img src={symble} alt="pic2" />
							</div>
							<div className="slider-content">
								<div className="slider-heading-text-1">धर्म न जात</div>
								<div className="slider-heading-text-2">सिर्फ</div>
								<div className="slider-heading-text-3">मानवता की बात</div>
							</div>
						</div>
					</div>
					<div className="pages page2">
						<img src={pic1} alt="pic2" />
						<h2>I am a web Devloper</h2>
					</div>
					<div className="pages page3">
						<img src={pic2} alt="pic3" />
						<h2>I am from India</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
