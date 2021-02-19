import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { startSaveNote, startUploading } from './../../actions/notes';


export const NotesAppBar = () => {

	const dispatch = useDispatch();
	const { active:note } = useSelector( state => state.notes );
	
	const handleSaveNote = ( e ) =>{
		e.preventDefault();
		dispatch( startSaveNote( note ));
	}
	
	const handlePictureClick = () =>{
		document.querySelector('#fileSelector').click();
	}

	const handleFileChange = ( e ) =>{
		e.preventDefault();
		const file = e.target.files[0];
		if( file ){
			dispatch( startUploading( file ));
		}
	}
    
	return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>
			
			<input 
				id="fileSelector"
				style={{ display: 'none' }}
				type="file"
				name="file"
				onChange={ handleFileChange }
			/>
			
			<div>
                <button 
					className="btn"
					onClick={ handlePictureClick }
				>
                    Picture
                </button>
                <button 
					className="btn"
					onClick={ handleSaveNote }
				>
                    Save
                </button>
            </div>
        </div>
    )
}
