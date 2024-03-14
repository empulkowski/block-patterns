import React from "react";
import StarRating from "./starRating";
import {RangeControl} from '@wordpress/components';
import {CheckboxControl} from '@wordpress/components';

export default class AddRecipeForm extends React.Component {
	state = {
		title: '',
		review: '',
		rating: 0,
		range: 0,
		cookingSkill: 'beginner',

	};

	// This function toggles the checkbox values in the state
	// handleCheckboxChange = (skill) => {
	// 	this.setState(prevState => ({
	// 		cookingSkill: {
	// 			...prevState.cookingSkill,
	// 			[skill]: !prevState.cookingSkill[skill]
	// 		}
	// 	}));
	// }

	addReview = (e) => {
		e.preventDefault();

		// const { title, review, rating, range, cookingSkill } = this.state;

		const newReview = {
			title: this.state.title,
			content: this.state.review,
			acf: {
				recipe_rating: parseInt(this.state.rating) || 0,
				recipe_range: parseInt(this.state.range) || 0,
				cooking_skill: this.state.cookingSkill,
			},
			status: 'publish'
		}

		// Invoking the addReview function from props, sending the new Review data and the cooking skill
		if (this.props && this.props.addReview) {
			this.props.addReview(newReview);
		}

		// Resetting the state
		this.setState({
			title: '',
			range: 0,
			review: '',
			rating: 0,
			cookingSkill: 'beginner'
		});
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

				{/*<div>*/}
				{/*	<label>*/}
				{/*		Cooking Time:*/}
				{/*	<input type="number"*/}
				{/*		value={this.state.range}*/}
				{/*		onInput={e => this.setState({range: e.target.value})}*/}

				{/*		   />*/}
				{/*	</label>*/}
				{/*</div>*/}
				<div>
					<label>
						Cooking Time:
						<input type="range"
							   value={this.state.range}
							   onChange={e => this.setState({range: e.target.value})}
							   min={0}
							   max={300}
							   step={5}
						/>
					</label>

					<span>{this.state.range}</span>

				</div>


				{/*<div>*/}
				{/*	<label>Recipe Skill:</label>*/}
				{/*	<CheckboxControl*/}
				{/*		label="Beginner"*/}
				{/*		checked={this.state.cookingSkill.beginner}*/}
				{/*		onChange={() => this.handleCheckboxChange('beginner')}*/}
				{/*	/>*/}
				{/*	<CheckboxControl*/}
				{/*		label="Intermediate"*/}
				{/*		checked={this.state.cookingSkill.intermediate}*/}
				{/*		onChange={() => this.handleCheckboxChange('intermediate')}*/}
				{/*	/>*/}
				{/*	<CheckboxControl*/}
				{/*		label="Advanced"*/}
				{/*		checked={this.state.cookingSkill.advanced}*/}
				{/*		onChange={() => this.handleCheckboxChange('advanced')}*/}
				{/*	/>*/}
				{/*</div>*/}

				<div class="skill">
					<label>Recipe Skill:</label>
					<select value={this.state.cookingSkill} onChange={e=>this.setState({cookingSkill:e.target.value})}>

						<option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
					</select>
				</div>


				<div>
					<label>
						Rating:
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
