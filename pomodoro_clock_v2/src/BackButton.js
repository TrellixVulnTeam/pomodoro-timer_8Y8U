import React from "react";

function BackButton (props){
    return(
        <button {...props} className='backButton'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            BACK
        </button>
    )
}

export default BackButton