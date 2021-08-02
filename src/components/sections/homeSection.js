import React from 'react'
import CV from "../../files/CV.pdf"


export const HomeSection = () => {
    return (
        <div className="home">
            <div className="home_text">
                <h1>Rodrigo Cuenca</h1>
                <h2>Fronted Developer</h2>
            </div>
            <div className="home_button">
                <a href={CV} download><button>Descargar CV</button></a>
            </div>
        </div>
    )
}
