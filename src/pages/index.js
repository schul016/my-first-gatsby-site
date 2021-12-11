import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm following the Gatsby Tutorial</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on the couch for the camera, he is a good boy"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}

export default IndexPage
