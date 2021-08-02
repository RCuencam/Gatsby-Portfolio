import React from 'react'
import Proptypes from "prop-types"

export const TitleSection = ({title}) => {
    return (
        <div className="title_section">
            <h1>{title}</h1>
            <div className="title_underline"></div> 
        </div>
    )
}

TitleSection.propTypes={
    title:Proptypes.string
}