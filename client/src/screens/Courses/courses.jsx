import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Layout from "../../Layouts/Layout";

export default function Courses(props) {
	const { allCourses } = props;
	return (
		<Layout>
			<div style={{ marginTop: props.courses && "6rem" }} className="cardList">
				<div className="container-fluid">
					<div className="row mt-2">
						{[1, 1, 1, 1, 1, 1, 1].map((course, i) => {
							return (
								<div className="col-sm-6 col-md-4 col-xl-3 mt-3">
									<Link
										className="text-dark text-decoration-none"
										to={`/courses/${course.id}`}
									>
										<Card
											key={i}
											name={course.name}
											imageurl={course.imageurl}
											description={course.description}
											category={course.category}
										/>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* <div className="card-list">
				{allCourses.map((course) => (
					<React.Fragment key={course.id}>
						<Link to={`/courses/${course.id}`}>
							<Card
								name={course.name}
								imageurl={course.imageurl}
								description={course.description}
								category={course.category}
							/>
						</Link>
					</React.Fragment>
				))}
			</div>
			{props.currentUser && !props.currentUser.is_student && (
				<Link to="/courses/new">
					<button>New course</button>
				</Link>
			)} */}
		</Layout>
	);
}
