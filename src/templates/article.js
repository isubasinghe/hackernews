import React from "react";
import { graphql } from "gatsby"
import SEO from "../components/seo";
import Layout from "../components/layout";

const Article = ({data}) => {
  return (
    <>
      <Layout>
        <SEO title={data.hnStory.title} />
        <div style={{ backgroundColor: '#A9A9A9', padding: '2px'}}>
          <h2>{data.hnStory.title}</h2>
          <h5 style={ {padding: '2px'} }> Score: {data.hnStory.score}</h5>
          <a  href={data.hnStory.url} target="__blank" rel="noopener">
            <h5 style={{padding: '2px'}}> Article </h5>
          </a>
          {data.hnStory.childrenHnComment.map(comment => {
            return (
              <div key={comment.id} style={{ backgroundColor: "white", margin: "10px", padding: '10px'}}>
                <div dangerouslySetInnerHTML={{__html: comment.text}} />
              </div>
            )
          })}
        </div>
      </Layout>
    </>
  );
};


export default Article;

export const query = graphql`
  query StoryQuery($id: String!) {
    hnStory(id: { eq: $id }) {
      title
      score 
      url
      childrenHnComment {
        id
        text
      }
    }
  }
`