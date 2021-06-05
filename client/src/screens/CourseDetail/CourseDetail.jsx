import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../Layouts/Layout";
import LessonCreate from "../LessonCreate/LessonCreate";
import Lessons from "../Lessons/Lessons";

export default function CourseDetail(props) {
	const [course, setCourse] = useState(null);
	const { allCourses, removeCourse } = props;
	const [showForm, setShowForm] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		if (allCourses.length > 0) {
			const oneCourse = allCourses.find((course) => course.id === Number(id));
			setCourse(oneCourse);
		}
	}, [allCourses, id]);

	return (
		<Layout>
			<div className="mainDivSignUp">
				<div className="signUpContainer">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12 col-md-6 py-3">
								<h3 className="fw-bold">Data Structure</h3>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Commodi totam in ratione vitae quia, ab quae magni quas harum
									enim. Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Autem voluptatum eveniet fugiat cumque ipsum vel accusantium
									dignissimos incidunt soluta laboriosam. Lorem ipsum dolor sit
									amet, consectetur adipisicing elit. Eius aut totam eligendi
									repellendus odit vero, aliquid sequi molestias. Placeat, sunt.
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
									quod vel nisi vitae? Laudantium ratione incidunt maxime labore
									vel ad. Obcaecati repellat saepe qui, asperiores corrupti vel
									laboriosam molestiae ab?
								</p>
								<h6 className="fw-bold float-end">Computer Sciene</h6>
							</div>
							<div className="imgContainer col-12 col-md-6 pe-0 ps-0 ps-md-3">
								<img
									width="100%"
									height="100%"
									src="https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/curious/uploads/pictures/1512133966-1.jpg"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="course-details">
				{course && (
					<div className="card">
						<h3> {course.name}</h3>
						<img src={course.imageurl} alt={course.name} />
						<p>{course.description}</p>
						<p>{course.category}</p>
						{props.currentUser && !props.currentUser.is_student && (
							<>
								<Link to={`/courses/${course.id}/edit`}>
									<button>Update</button>
								</Link>
								<button onClick={() => removeCourse(course.id)}>Delete</button>
								<button onClick={() => setShowForm((prevState) => !prevState)}>
									Add Lesson
								</button>
							</>
						)}
						{showForm && (
							<LessonCreate
								course_id={course.id}
								setShowForm={setShowForm}
								setToggleCourses={props.setToggleCourses}
							/>
						)}
						<Lessons allLessons={course.lessons} />
					</div>
				)}
			</div> */}
		</Layout>
	);
}
