import React from 'react';
import './Challenge.css';
import JoinChallengeButton from './../JoinChallengeButton/JoinChallengeButton';

function Challenge3 () {
	const description = 'We’re reaching out to strengthen neighborhoods every way we can. That’s why State Farm® teamed up with Brendon Urie, DrLupo, and other gamers to stream for charities. It all started at TwitchCon 2019. Follow these streamers to find out how we can all make a difference – together.';
	const challenge = {
		name: 'Twitch Charity Streamers',
		startDate: 'Start Date: May16th, 2020',
		timeRemaining: 'Duration: 3 week',
		description: description,
		pointValue: 1000
	}

		return (
			<div className= 'challenge c-odd' >
				<div className="name-pts">
					<p id='chal-name'>{challenge.name}</p>
					<p id='point-value'>Point value: {challenge.pointValue}</p>
				</div>
				<div className="desc">
					<div className="chal-desc">{challenge.description}</div>
					<JoinChallengeButton />
					<div className="chal-specs">	
						<div className="startDate">
							{challenge.startDate}
						</div>
						<div className="time-remaing">
							{challenge.timeRemaining}
						</div>
					</div>
				</div>
			</div>
		);
}

export default Challenge3;
