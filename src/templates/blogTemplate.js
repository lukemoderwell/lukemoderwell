import React from 'react';
import { graphql } from 'gatsby';
import styles from './blogTemplate.module.scss';
import Header from '../components/Header';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <React.Fragment>
      <Header />
      <div className={styles.container}>
        <div className="post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <ul>
            {frontmatter.tags.map((tag) => (
              <li>{tag}</li>
            ))}
          </ul>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
