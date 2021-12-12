import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      {
        data.allMdx.nodes.map(node => {
          const image = getImage(node.frontmatter.hero_image)
          return (
            <article key={node.id}>
              <h2>
                <GatsbyImage
                  image={image}
                  alt={node.frontmatter.hero_image_alt}
                />{" "}
                <Link to={`/blog/${node.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          )
        })
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D YYYY")
          title
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 50)
            }
          }  
        }
        id
        slug
      }
    }
  }
`

export default BlogPage