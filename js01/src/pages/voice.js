import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";

const Section = styled.section`
  padding: 25px 0;
`;

const Top = styled.div`
  display: flex;
`;

const Bottom = styled.div`
  padding: 15px 0;

  & > p {
    text-indent: 1em;
    margin: 0;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    border: 2px solid #000;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 10px;

  & > dl {
    height: 100%;
    margin: 0;
    font-size: 1.1rem;
    display: flex;
    flex-wrap: wrap;

    & > dt {
      width: 25%;
      text-align-last: justify;
    }

    & > dd {
      margin: 0;
      width: 75%;

      &:before {
        content: "：";
      }

      & > ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
    }
  }
`;

const ActorCard = ({
  name,
  kana,
  charactor,
  imagePath,
  belonging,
  performances,
  desc,
}) => {
  return (
    <Section>
      <Top>
        <Left>
          <img src={imagePath} alt={charactor} />
        </Left>
        <Right>
          <dl>
            <dt>{charactor}役</dt>
            <dd>
              {name} （{kana}）
            </dd>
            <dt>所属</dt>
            <dd>{belonging}</dd>
            <dt>主な出演作品</dt>
            <dd>
              <ul>
                {performances.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </dd>
          </dl>
        </Right>
      </Top>
      <Bottom>
        <p>{desc}</p>
      </Bottom>
    </Section>
  );
};

const BackBlock = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #666;
  padding: 30px 0 10px 0;

  & > a {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const VoicePage = ({ data }) => {
  const actors = data.allActorsYaml.nodes;

  return (
    <Layout>
      {actors.map((actor) => (
        <ActorCard key={actor.id} {...actor} />
      ))}
      <BackBlock>
        <Link to="/">BACK</Link>
      </BackBlock>
    </Layout>
  );
};

export const query = graphql`
  {
    allActorsYaml {
      nodes {
        id
        belonging
        charactor
        desc
        imagePath
        kana
        name
        performances
      }
    }
  }
`;

export default VoicePage;
