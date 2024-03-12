import React from "react";
import RecipeCard from "./RecipeCard";
import "../style.scss"

export default class RecipeList extends React.Component {
	render() {
		return (
			<div className="review-list">
				{this.props.reviews.map(review => (
					<RecipeCard title={review.attributes.title.rendered}
								range={review.attributes.acf.recipe_range}
								review={review.attributes.content.rendered}
								rating={review.attributes.acf.recipe_rating}
								key={review.attributes.id}
					/>
				))}
			</div>
		)
	}

}
