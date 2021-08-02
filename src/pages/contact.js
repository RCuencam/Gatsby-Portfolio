import React from 'react'
import Layout from '../components/layout'
import { ContactSection } from '../components/sections/ContactSection'
import { FooterSection } from '../components/sections/FooterSection'
import Seo from '../components/seo'

const Contact = () => {
    return (
        <Layout>
            <Seo title="Contact"/>
            <div className="container-all">
                <ContactSection />
                <FooterSection />
            </div>
        </Layout> 
    )
}

export default Contact
