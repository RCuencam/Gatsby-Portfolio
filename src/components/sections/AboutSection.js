import React from 'react'
import { TitleSection } from '../TitleSection'

export const AboutSection = () => {
    return (
        <div className="about">
            <TitleSection title={'About Me'} />
            <div className="about_content">
            Hola! Soy estudiante del 8vo ciclo en la carrera de 
            Ingeniería de Software en la Universidad Peruana de Ciencias 
            Aplicadas (UPC). Me encuentro en constante aprendizaje en varias 
            tecnologías para poder aplicarlos en distintos proyectos.
            </div>
            <button>Contacto</button>
        </div>
    )
}
