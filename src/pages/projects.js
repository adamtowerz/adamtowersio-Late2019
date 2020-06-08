import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import SEO from "../components/seo";
import "../styles/fontawesome/css/fontawesome.min.css";
import "../styles/fontawesome/css/solid.min.css";
import "../styles/base.css";
import "../styles/theme.css";
import "../styles/projects.css";
import Card from "../components/Card";

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
    query AirtableQuery {
      workexps: allAirtable(filter: { table: { eq: "Work Experience" } }) {
        edges {
          node {
            data {
              Employer_Name
              Role
              Time_Desc
              Short_Description
              Long_Description
              Link
              Technologies
              Image {
                localFiles {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }

      prjcts: allAirtable(filter: { table: { eq: "Projects" } }) {
        edges {
          node {
            data {
              Project_Name
              Time_Desc
              Short_Description
              Long_Description
              Link
              Technologies
              Image {
                localFiles {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Projects" />
      <Link to="/" className="backbtn">
        <i className="fas fa-arrow-left"></i>
      </Link>
      <div className="projects__container">
        <div className="list">
          <h2 className="list__title">
            <span className="color-primary">Projects</span> I've Worked On
          </h2>
          <div className="list__contents">
            {data.prjcts.edges.map(o => {
              const {
                Project_Name: title,
                Technologies: tags,
                ...rest
              } = o.node.data;
              return (
                <Card
                  title={title}
                  showLink
                  tags={tags}
                  linkLabel="Visit Project"
                  {...rest}
                />
              );
            })}
          </div>
        </div>
        <div className="list">
          <h2 className="list__title">
            <span className="color-primary">Places</span> I've Worked At
          </h2>
          <div className="list__contents">
            {data.workexps.edges.map(o => {
              const {
                Employer_Name: title,
                Role: subtitle,
                Technologies: tags,
                ...rest
              } = o.node.data;
              return (
                <Card title={title} subtitle={subtitle} tags={tags} {...rest} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
