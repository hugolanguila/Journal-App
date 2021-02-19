import React from 'react'
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { activeNote } from './../../actions/notes';

export const JournalEntry = ({ id, title, body, date, url }) => {
    
	const noteDate = moment(date);
	
	const dispatch = useDispatch();
	const handleEntryClick = ( e ) =>{
		e.preventDefault();
		dispatch( activeNote( id, { date, title, body, url } ));
	}

	return (
        <div 
			className="journal__entry pointer animate__animated animate__fadeIn animate__faster"
			onClick = { handleEntryClick }
		>
            
			{
				url &&
				(
					<div 
						className="journal__entry-picture"
						style={{
							backgroundSize: 'cover',
							backgroundImage: `url(${ url })`
						}}
					>
					</div>
				)
			}
            <div className="journal__entry-body">
                <p className="journal__entry-title">
					{ title }
                </p>
                <p className="journal__entry-content">
					{ body }
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{ noteDate.format('ddd') }</span>
                <h4>{ noteDate.format('Do') }</h4>
            </div>

        </div>
    )
}
