import React, { useEffect, useState } from "react";
import CourseContainer from "../../containers/CourseContainer/CourseContainer";
import Layout from "../../Layouts/Layout";
import CourseCreate from "../CourseCreate/CourseCreate";
import Courses from "../Courses/courses";
import { Route, Switch } from "react-router-dom";
import { getAllCourses } from "../../services/courses";
export default function Home(props) {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		displayCourses();
	}, []);

	const displayCourses = async () => {
		let result = await getAllCourses();
		setCourses(result);
	};

	return (
		<>
			<Layout>
				<h3 className="homeHeading px-3">
					Welcome to the You <span className="themeLine">Teach App</span>
				</h3>
				<CourseContainer currentUser={props.currentUser} />
			</Layout>
		</>
	);
}
