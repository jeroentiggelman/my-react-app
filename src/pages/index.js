import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Learn to design and code React apps</h1>
    <p>Complete courses about the beste tools and design systems. Prototype and build apps with React and Swift.</p>
    <Link to="/page-2/">Watch the video</Link>
  </Layout>
)

export default IndexPage
