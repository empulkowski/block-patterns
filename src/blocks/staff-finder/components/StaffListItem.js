import React from 'react';
export default class StaffListItem extends React.Component {
	render() {
		const {person} = this.props;
		return (

			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<img src={person._embedded['wp:featuredmedia']['0'].source_url}/>
							</div>
					<div className="flip-card-back">
						<h3 className="name">{person.acf.staff_name}</h3>
						<div className="position">{person.acf.staff_position}</div>
						<div className="bio">
							<p>If I Was A Bird, I’d Fly Into A Ceiling Fan.</p>
						</div>
					</div>
				</div>
			</div>

		)
	}
}
