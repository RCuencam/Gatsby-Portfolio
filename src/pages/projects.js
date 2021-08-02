import React from 'react'
import Layout from '../components/layout'
import { FooterSection } from '../components/sections/FooterSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import Seo from '../components/seo'

const Projects = () => {
    return (
        <Layout>
            <Seo title="Projects"/>
            <div className="container-all"> 
                <ProjectsSection />
            </div>
        </Layout> 
    )
}

export default Projects
