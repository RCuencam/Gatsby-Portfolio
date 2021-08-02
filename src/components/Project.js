import React from 'react'
import Proptypes from "prop-types"
import Chip from '@material-ui/core/Chip';

export const Project = ({demo,description,github,technologies,title,url}) => {

    return (
        <div className="card-container">
            <div className="card">
                <div className="card_faceone">
                    <div className="content">
                        <div className="title">
                            <h2>{title}</h2>
                        </div>
                        <img src={url} className="card_faceone-img"/>
                    </div>
                   </div>
                <div className="card_facetwo">
                    <div className="content">
                        <div className="card_facetwo-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="card_facetwo-description">
                            <p>{description}</p>
                        </div>
                        <div className="card_facetwo-technologies">
                            <h4>Technologies</h4>
                            {
                                technologies.map((item,index)=>(
                                    <Chip label={item} key={index} className="card_facetwo-technologies-item"/>
                                ))
                            }
                        </div>
                        <div className="card_facetwo-buttons">
                            <a href={demo} target="_blank"><button>Ir al Sitio</button></a>
                            <a href={github} target="_blank"><button>Github</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Project.protoTypes={
  demo:Proptypes.string,
  description:Proptypes.string,
  github:Proptypes.string,
  technologies:Proptypes.array,
  title:Proptypes.string,
  url:Proptypes.string,
}
