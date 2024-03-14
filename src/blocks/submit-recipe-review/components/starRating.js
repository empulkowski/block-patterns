import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

export default function StarRating({rating, setRating, readonly}) {
	const [hover, setHover] = useState(rating || 0);

	const handleStarClick = (star) => {
		if (!readonly) {
			setRating(star);
		}
	};

	const handleMouseEnter = (star) => {
		if (!readonly) {
			setHover(star);
		}
	};

	const handleMouseLeave = () => {
		if (!readonly) {
			setHover(rating);
		}
	};

	return (
		<div className={readonly ? 'readonly stars' : 'stars'} onMouseLeave={handleMouseLeave}>
			{[1, 2, 3, 4, 5].map((star) => (
				<span
					key={star}
					className={star <= (hover || rating) ? 'star on' : 'star off'}
					onClick={() => handleStarClick(star)}
					onMouseEnter={() => handleMouseEnter(star)}
				>
          <FontAwesomeIcon icon={faStar}/>
        </span>
			))}
		</div>
	);
}
// <div className="stars" onMouseLeave={handleMouseLeave}>
// 	{[1, 2, 3, 4, 5].map((star) => (
// 		<span
// 			key={star}
// 			className={`star ${star <= (hover || rating) ? 'on' : 'off'} ${readonly ? 'readonly' : ''}`}
// 			onClick={() => handleStarClick(star)}
// 			onMouseEnter={() => handleMouseEnter(star)}
// 		>
//           <FontAwesomeIcon icon={faStar}/>
//         </span>
// 	))}
// </div>
