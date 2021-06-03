import React from "react";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../services/auth";
import { useHistory } from "react-router-dom";
import "./Sidebar.css";

const SideBar = ({ isOpen, ClickEvent, currentUser, setCurrentUser }) => {
	const history = useHistory();
	const handleLogout = () => {
		logoutUser();
		setCurrentUser(null);
		history.push("/");
	};

	return (
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				top: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<ImCross onClick={ClickEvent} className="CrossBTn" />
			<ul className="list-unstyled">
				<li>
					<NavLink
						className="text-white text-decoration-none"
						activeClass="activeNav"
						to="/"
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						className="text-white text-decoration-none"
						activeClass="activeNav"
						to="/signup"
					>
						Teach Here
					</NavLink>
				</li>
				<li>
					<NavLink
						className="text-white text-decoration-none"
						activeClass="activeNav"
						to="/signup"
					>
						Sign Up
					</NavLink>
				</li>
				<li>
					<NavLink
						className="text-white text-decoration-none"
						activeClass="activeNav"
						to="/login"
					>
						Log In
					</NavLink>
				</li>
				<li>
					<button
						className="text-white bg-transparent border-0"
						onClick={handleLogout}
					>
						logout
					</button>
				</li>
				<li> {currentUser && currentUser.email}</li>
			</ul>
		</div>
	);
};

export default SideBar;
