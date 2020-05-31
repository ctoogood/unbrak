import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import LatestProducts from "../components/latestProducts"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <section className="page__width">
      <LatestProducts />
    </section>
  </Layout>
)

export default IndexPage
