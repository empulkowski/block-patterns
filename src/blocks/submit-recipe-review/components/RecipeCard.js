import React from "react";
import StarRating from "./starRating"
import "../style.scss"

export default class RecipeCard extends React.Component {
	render(){
		let{title, range, review, rating} = this.props;

		return (
			<div className="recipe_card">
				<div className="recipe_title">{title}</div>
				<div className="recipe_range">{range}</div>
				{/*<div className="recipe_rating">{rating}</div>*/}
				<StarRating rating={rating} readonly />
				<div className="recipe_content" dangerouslySetInnerHTML={{__html: review}}></div>

			</div>
		)
	}

}
