import React from "react";
// import AddRecipeForm from "./AddRecipeForm";
// import RecipeList from "./RecipeList";
import RecipeList from "./RecipeList";
import AddRecipeForm from "./AddRecipeForm";

export default class BlockApp extends React.Component {
	state = {
		reviews: [],
		loggedIn: null,
	};

	addReview(newReview){
		const review = new wp.api.models.Review(newReview);
		review.save().done(data => {
			console.log('saved!', data);
			this.getReviews();
		}).fail(jqXHR => {
			console.error('failed!' , jqXHR)
		});
	}

	getReviews(getReview) {
		const reviewCollection = new wp.api.collections.Review();
		reviewCollection.fetch()
			.done(data => {
				console.log('recipe reviews!', data, reviewCollection);
				//store the models in our state
				this.setState({reviews: reviewCollection.models})
			})
			.fail(jqXHR => {
				console.error('failed :/' , jqXHR)
			});
	}


	getLoggedInUSer() {
		const user = new wp.api.models.UsersMe(); //get logged in user
		user.fetch()
			.done(user => {
				//logged in
				this.setState({loggedIn: true});

			})
			.fail(jqXHR=> {
				//not logged in
				this.setState({loggedIn: false});
			})
	}

	componentDidMount() {
		this.getReviews();
		this.getLoggedInUSer();
	}


	render() {
		return (
			<div>
				<h3>Latest Reviews</h3>
				<RecipeList reviews={this.state.reviews} />
				<hr />
				<h3>Submit a Review</h3>
				{this.state.loggedIn === true && <AddRecipeForm addReview={reviewObj => this.addReview(reviewObj)}/>}
				{this.state.loggedIn === false && <div className="error-msg">You must be logged in to submit a review</div>}

			</div>
		);
	}
}
