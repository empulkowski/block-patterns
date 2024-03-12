import React from "react";
import StarRating from "./starRating";
import "../style.scss"
export default class AddRecipeForm extends React.Component {
	state = {
		title: '',
		review: '',
		rating: 0,
		range: 0,
	};

	addReview(e) {
		e.preventDefault();

		const newReview = {
			title: this.state.title,
			content: this.state.review,
			acf: {
				recipe_rating: parseInt(this.state.rating) || 0,
				recipe_range: this.state.range,
			},


			// maybe you should validate better before doing this?
			status: 'publish',
		}

		// we can't assume any props are provided
		// ?. only calls the method if it exists
		if (this.props && this.props.addReview) {
			this.props.addReview(newReview);

		}

		this.setState({title: '', range: 0, review: '', rating: 0})
	}


	render() {
		return (
			<form
				className="new-review-form"
				onSubmit={e => this.addReview(e)}
			>
				<div>
					<label>
						Recipe Name:
						<input type="text"
							   value={this.state.title}
							   onInput={e => this.setState({title: e.target.value})}
						/>
					</label>
				</div>

				<div>
					<label>
						Cooking Time:
						<input type="number"
							   value={this.state.range}
							   onChange={e => this.setState({range: e.target.value})}


						/>
					</label>
				</div>

				<div>
					<label>
						{/*<input type="number"*/}
						Rating:
						{/*<input type="number"*/}
						{/*	   value={this.state.rating}*/}
						{/*	   onInput={e => this.setState({rating: e.target.value})}*/}
						{/*/>*/}
						<StarRating rating={this.state.rating} setRating={rating => this.setState({rating})}/>

					</label>
				</div>

				<div>
					<label>
						Comments:
						<textarea
							value={this.state.review}
							onInput={e => this.setState({review: e.target.value})}
						/>
					</label>
				</div>

				<button type="submit">Add Your Review</button>
			</form>
		);
	}

};
