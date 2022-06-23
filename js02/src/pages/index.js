import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  const memos = getMemos(data);

  return (
    <Layout>
      <ul>
        {memos.map((m) => (
          <li key={m.id}>{m.content}</li>
        ))}
      </ul>
    </Layout>
  );
};

const getMemos = (data) => data.allMemosYaml.nodes;

export const query = graphql`
  {
    allMemosYaml {
      nodes {
        id
        content
      }
    }
  }
`;

export default IndexPage;
