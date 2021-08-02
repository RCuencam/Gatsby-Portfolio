import * as React from "react"
import { Link } from "gatsby"
import "../styles/style.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { HomeSection } from "../components/sections/homeSection"
import { AboutSection } from "../components/sections/AboutSection"
import { ProjectsSection } from "../components/sections/ProjectsSection"
import { ContactSection } from "../components/sections/ContactSection"
import { FooterSection } from "../components/sections/FooterSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
    <FooterSection />
  </Layout>
)

export default IndexPage
