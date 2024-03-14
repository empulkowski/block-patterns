import React from "react";
import StarRating from "./starRating"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default class RecipeCard extends React.Component {
	render(){
		let{title, range, review, rating, cookingSkill} = this.props;
		console.log(range);
		return (

			<div className="recipe_card">
				<div className="recipe_title sans-serif">{title}</div>
				<StarRating rating={rating} readonly/>
				<div className="recipe_range sans-serif">
					<i className="fas fa-clock ml-2"></i><strong>Cook Time:</strong> {range} minutes
				</div>

				<div className="recipe_cooking_skills sans-serif">
					<strong>Skill Level:</strong> {cookingSkill}

					{/*<ul>*/}
					{/*	{cookingSkill &&*/}
					{/*		Object.entries(cookingSkill).map(([skill, isChecked]) => (*/}
					{/*		<li key={skill}>{isChecked ? skill : null}</li>*/}
					{/*	))}*/}
					{/*</ul>*/}
				</div>

				<hr/>
				{/* <div className="recipe_rating">{rating}</div> */}

				<div className="recipe_content" dangerouslySetInnerHTML={{__html: review}}></div>
			</div>
		)
	}

}
