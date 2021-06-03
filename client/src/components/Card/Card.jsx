import React from "react";

export default function Card(props) {
	const { name, imageurl, description, category } = props;
	return (
		<>
			<div className="cardInner_div pt-1">
				<h5 className="text-center mt-1 mb-2 fw-bold">Data Structure</h5>
				<img
					src="https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/curious/uploads/pictures/1512133966-1.jpg"
					alt=""
				/>
				<h6 className="my-3 text-center px-2">
					Lorem ipsum dolor sit amet nemo consectetur sit amet, adipisicing
					elit. Aperiam,?
				</h6>
				<h5 className="text-center lastText pt-2 pb-2 text-white">
					Programming
				</h5>
			</div>
			{/* <div className="card">
				<h3>{name}</h3>
				<img src={imageurl} alt={name} />
				<p>{description}</p>
				<h3>{category}</h3>
			</div> */}
		</>
	);
}
