import React from "react";
import StarRating from "./starRating";
import { RangeControl } from '@wordpress/components';
import { CheckboxControl } from '@wordpress/components';

export default class AddRecipeForm extends React.Component {
	state = {
		title: '',
		review: '',
		rating: 0,
		range: 2,
		cookingSkill: {
			beginner: false,
			intermediate: false,
			advanced: false,
		},
	};
	constructor(props) {
		super(props);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
	}

	// Rest of the component code...

	handleCheckboxChange(skill) {
		const updatedSkill = { ...this.state.cookingSkill, [skill]: !this.state.cookingSkill[skill] };
		this.setState({ cookingSkill: updatedSkill });
	}
	addReview(e) {
		e.preventDefault();

		const { title, review, rating, range, cookingSkill } = this.state;
		const selectedCookingSkills = Object.entries(cookingSkill)
			.filter(([_, isChecked]) => isChecked)
			.map(([skill, _]) => skill);

		const newReview = {
			title: this.state.title,
			content: this.state.review,
			acf: {
				recipe_rating: parseInt(this.state.rating) || 0,
				recipe_range: this.state.range || 2,
				cooking_skill: selectedCookingSkills,
			},


			// maybe you should validate better before doing this?
			status: 'publish',
		}

		// we can't assume any props are provided
		// ?. only calls the method if it exists
		if (this.props && this.props.addReview) {
			this.props.addReview(newReview, this.state.cookingSkill);

		}

		this.setState({title: '',
			range: 0,
			review: '',
			rating: 0,
			cookingSkill: {
				beginner: false,
				intermediate: false,
				advanced: false,
			},

		})
	}

	handleCheckboxChange(skill) {
		const updatedSkill = { ...this.state.cookingSkill, [skill]: !this.state.cookingSkill[skill] };
		this.setState({ cookingSkill: updatedSkill });
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
					<RangeControl
						label="Cooking Time"
						value={this.state.range} // Ensure this is correct
						onChange={(value) => {
							console.log("New range value:", value); // Adding console.log
							this.setState({range: value});
						}}
						min={0}
						max={300}
					/>
				</div>

				<div>
					<label>Recipe Skill:</label>
					<CheckboxControl
						label="Beginner"
						checked={this.state.cookingSkill.beginner}
						onChange={() => this.handleCheckboxChange('beginner')}
					/>
					<CheckboxControl
						label="Intermediate"
						checked={this.state.cookingSkill.intermediate}
						onChange={() => this.handleCheckboxChange('intermediate')}
					/>
					<CheckboxControl
						label="Advanced"
						checked={this.state.cookingSkill.advanced}
						onChange={() => this.handleCheckboxChange('advanced')}
					/>
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
