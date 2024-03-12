import React from "react";

export default class ReviewCard extends React.Component {
	render(){
		let {title, review, rating} =this.props;
		return (
			<div className="recipe_card">
				<div className="recipe_title">{title}</div>
					<div className="recipe_rating">{rating}</div>
					<div className="recipe_content" dangerouslySetInnerHTML={{__html: review}}></div>

			</div>
		)
	}

}
