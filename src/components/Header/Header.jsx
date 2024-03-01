import React, { useState } from "react";
import brandLogo from "../../img/flag_name_white.png";
import "./header.style.scss";
const Header = () => {
	const [menuOn, setMenuOn] = useState(false);

	return (
		<div>
			<div className="menu-container">
				<div className="header--nav--top">
					<div className="header--nav--top--left">
						<small>
							<i className="fa fa-map-marker-alt"></i> वार्ड नंबर 4, कारला रोड,
							महाराष्‍ट्र, भारत
						</small>
						<small className="">
							<i className="fa fa-envelope"></i>info@hindrashtrasangh.org
						</small>
					</div>
					<div className="header--nav--top--right">
						<span>Follow us:</span>
						<a
							className="social-icon"
							href="https://www.facebook.com/profile.php?id=100089551554230&mibextid=ZbWKwL"
						>
							<i className="fab fa-facebook-f"></i>
						</a>
						<a
							className="social-icon"
							href="https://twitter.com/hrs_gs?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3Ahrs_gs%7Ctwcon%5Es2"
						>
							<i className="fab fa-twitter"></i>
						</a>

						<a
							className="social-icon"
							href="https://www.instagram.com/hindrashtrsanghparty/?utm_source=qr&igsh=MXVhOXZramZ2c3Zocg%3D%3D"
						>
							<i className="fab fa-instagram"></i>
						</a>

						<select name="language" id="language">
							<option value="Hindi">हिन्दी</option>
							<option value="English">English</option>
						</select>
					</div>
				</div>

				<div className="header--nav--main" id="sticky-nav">
					<a href="index.html" className="website-logo">
						<img src={brandLogo} alt="logo" />
					</a>

					<nav
						id="Navbar-menu"
						className={menuOn ? "mobile-menu-on" : "mobile-menu-off"}
					>
						<ul className="menu">
							<li className="dropdown dropdown-2">
								<a href="#">प्रथम पृष्ठ</a>
							</li>
							<li className="dropdown dropdown-2">
								हमारे बारे में<i className="fas fa-sort-down"></i>
								<ul className="dropdown_menu dropdown_menu-2">
									<li className="dropdown_item-1">
										<a href="#">हिंदराष्‍ट्र संघ</a>
									</li>
									<li className="dropdown_item-2">
										<a href="">राष्‍ट्रीय अध्‍यक्ष</a>
									</li>
									<li className="dropdown_item-3">
										<a href="#"> राष्‍ट्रीय कार्यकारणी</a>
									</li>
									<li className="dropdown_item-4">
										<a href="#"> हिंदराष्‍ट्र संघ न्‍याय समिति</a>
									</li>
									<li className="dropdown_item-5">
										<a href="#"> प्रांतीय कार्यकारणी</a>
									</li>
								</ul>
							</li>
							<li className="dropdown dropdown-2">
								हिंदराष्‍ट्र मीडिया<i className="fas fa-sort-down"></i>
								<ul className="dropdown_menu dropdown_menu-2">
									<li className="dropdown_item-1">
										<a href="https://hindrashtrasangh.org/">
											प्रेस विज्ञप्तियां
										</a>
									</li>
									<li className="dropdown_item-2">
										<a href="#">फोटो गैलरी</a>
									</li>
									<li className="dropdown_item-3">
										<a href="#">इंटरव्‍यू/भाषण</a>
									</li>
									<li className="dropdown_item-4">
										<a href="#">वीडियो गैलरी</a>
									</li>
								</ul>
							</li>
							<li className="dropdown">
								<a href="#">आगामी कार्यक्रम</a>
							</li>
							<li className="dropdown">
								<a href="#">एचआरएस लाइव</a>
							</li>
						</ul>
						<a href="#">
							<span>ऑनलाइन सदस्यता</span>
						</a>
						<a href="#">
							<span>सहयोग दें</span>
						</a>
					</nav>

					<div className="burger-icon" onClick={() => setMenuOn(!menuOn)}>
						<i className="fa fa-bars"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
