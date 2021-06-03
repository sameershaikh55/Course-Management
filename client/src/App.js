import "./Style/style.scss";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import { verifyUser } from "./services/auth";
import Home from "./screens/Home/Home";
import CourseContainer from "./containers/CourseContainer/CourseContainer";
import LessonContainer from "./containers/LessonContainer/LessonContainer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/Sidebar/Sidebar";

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const [isOpen, setIsOpen] = useState(false);

	const ClickEvent = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		verify();
	}, []);

	const verify = async () => {
		let user = await verifyUser();
		console.log(user);
		setCurrentUser(user);
	};

	return (
		<div className="App">
			<Header
				ClickEvent={ClickEvent}
				currentUser={currentUser}
				setCurrentUser={setCurrentUser}
			/>
			<SideBar
				isOpen={isOpen}
				ClickEvent={ClickEvent}
				currentUser={currentUser}
				setCurrentUser={setCurrentUser}
			/>
			<Switch>
				<Route path="/signup" exact>
					<SignUp />
				</Route>
				<Route path="/courses">
					<CourseContainer currentUser={currentUser} />
				</Route>
				<Route path="/lessons/:id">
					<LessonContainer />
				</Route>
				<Route path="/lessons">
					<LessonContainer />
				</Route>
				<Route path="/login">
					<LogIn verify={verify} setCurrentUser={setCurrentUser} />
				</Route>
				<Route path="/" exact>
					<Home currentUser={currentUser} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
