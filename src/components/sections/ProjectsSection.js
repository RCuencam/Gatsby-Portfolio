import React from 'react'
import { TitleSection } from '../TitleSection'
import { graphql, useStaticQuery } from 'gatsby'
import { Project } from '../Project'
import { getImage } from 'gatsby-plugin-image'


export const ProjectsSection = () => {
    const data = useStaticQuery(graphql`
    {
        allProjectsJson {
              edges {
                node {
                  id
                  title
                  description
                  demo
                  github
                  technologies
                  url
                }
              }
            } 
          }`)
    
    return (
        <div className="projects">
            <TitleSection title={'Projects'} />
            <div className="projects-container">
                {
                    data.allProjectsJson.edges.map(project=>{
                        return <Project {...project.node} key={project.node.id} />
                    })
                }
            </div>
        </div>
    )
}
