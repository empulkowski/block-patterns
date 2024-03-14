import React from "react";
import RecipeCard from "./RecipeCard";


export default class RecipeList extends React.Component {
	render() {
		return (
			<div className="review-list">
				{this.props.reviews.map(review => {
					console.log("Recipe Range:", review.attributes.acf.recipe_range);
					return (
						<RecipeCard
							title={review.attributes.title.rendered}
							range={review.attributes.acf.recipe_range}
							review={review.attributes.content.rendered}
							rating={review.attributes.acf.recipe_rating}
							cookingSkill={review.attributes.acf.cooking_skill}
							key={review.attributes.id}
						/>
					);
				})}
			</div>
		);
	}
}
