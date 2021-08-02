import React from 'react'
import Layout from '../components/layout'
import { AboutSection } from '../components/sections/AboutSection'
import { FooterSection } from '../components/sections/FooterSection'
import Seo from '../components/seo'

const About = () =>(
        <Layout>
            <Seo title="About"/>
            <div className="container-all"> 
                <AboutSection style={{margin:'0 !important'}}/>
            </div>
        </Layout> 
)

export default About;
