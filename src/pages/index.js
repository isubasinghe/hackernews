import React from "react"
import {  useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allHnStory(limit: 10) {
        edges {
          node {
            title
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Home" />
      <ul style={{ listStyle: "none" }}>
      {data.allHnStory.edges.map(({ node }) => {
        return (
          <Link key={node.id} style={ { textDecoration: 'none' } } to={`/item/${node.id}`}>
            <li style={{ backgroundColor: 'aliceblue', padding: '10px'}}>
              {node.title}
            </li>
          </Link>
        )
      })}
      </ul>
    </Layout>
  )
}

export default IndexPage
