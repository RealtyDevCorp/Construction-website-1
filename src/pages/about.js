import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import companyThumbnail from "../images/company.jpg"
import PageHeader from "../components/pageHeader"
import AboutCard from "../components/aboutCard"
import "./about.scss"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutdataQuery {
      site {
        siteMetadata {
          title
          fullTitle
        }
      }
    }
  `)

  const { title, fullTitle } = data.site.siteMetadata

  return (
    <section id="about">
      <PageHeader title="About Us" />
      <Container>
      <main className="about-page section-lg">
          <h2 className="header-title center">{title}</h2>
          <section className="about-content">
            <img
              src={companyThumbnail}
              alt="Company Thumbnail"
              className="img-thumbnail"
              align="left"
            />
            <p>
              <strong>{fullTitle}</strong> (A CORPORATION) has been a transition
              of a sole proprietorship owned and operated by{" "}
              <u>DR. RICHARD MANGUBAT</u> of{" "}
              <strong>R.M. MANGUBAT CONSTRUCTION</strong> in Year 2015.
            </p>
            <p>
              <strong>{fullTitle}</strong> engaged in Site Developing, General
              Building Constructions, Repair/Renovation of Buildings, etc.
            </p>
            <p>
              This corporation is duly organized by the Board of Directors: Dr.
              Richard M. Mangubat, PhD., Sita Tan-Mangubat, Elpidio Q. Tan,
              Virginia M. Mangubat & Dr. Robert C. Manansala, Jr. It is duly
              registered with SECURITY AND EXCHANGE COMMISSION (SEC)with
              registration No. <u>CS201520498</u> and PHILIPPINE CONSTRUCTION
              ACCREDITATION BOARD (PCAB) with license No. 41071.
            </p>
            <p>
              <strong>{fullTitle}</strong> for the interest of its clients and
              its own, engages the services of capable and hardworking field
              engineers and construction workers who have distinguished
              themselves in their respective fields of expertise, whether in
              painting, masonry, plastering works, carpentry, concreting and
              structural construction works. It will always be for the happy
              pursuits of construction that the happy results will yield success
              for all involved in the construction project. “As always, it will
              be all for the best”.
            </p>
          </section>
          <hr />
          <Row>
            <Col md="6">
              <AboutCard title="Mission">
                <p>
                  It is the mission<strong>{fullTitle} </strong>to deliver
                  &nbsp; <u>professional</u> &nbsp; construction services that
                  result in the highest quality building product available while
                  conducting every aspect of our business with a level of &nbsp;{" "}
                  <u>commitment</u>
                  &nbsp; and &nbsp;
                  <u>integrity</u> &nbsp; which sets the example other firms
                  endeavor. We will excel in every facet of our business by:
                </p>
                <ol>
                  <li>Providing awesome customer service to our clients.</li>
                  <li>
                    Providing a mixture of services to a variety of industries
                    and geographical locations.
                  </li>
                  <li>
                    Continually improving communications with our customers and
                    between departments.
                  </li>
                  <li>Providing training for personnel’s enhancement.</li>
                  <li>
                    Recruiting and hiring only those who share our vision.
                  </li>
                </ol>
              </AboutCard>
            </Col>
            <Col md="6">
              <AboutCard title="Vision">
                <p>
                  The company provides quality construction on time and on
                  budget with professional and ethical standards that can only
                  come from years of experience in the construction Industry. It
                  is also our revelation in ensuring that our company is
                  effectively utilizing construction firms today as they
                  continue to develop their capabilities to compete in both the
                  short-term and long-term. And
                  <strong> {fullTitle} </strong>
                  will also recognize for providing excellent services, every
                  tie.
                </p>
              </AboutCard>
              <AboutCard title="Core Values">
                <p>
                  In line with company’s vision mission, we believe that
                  employees of
                  <strong> {title} </strong>shall be guided with the following
                  core values:
                </p>
                <ul>
                  <li>Professionalism</li>
                  <li>Commitment</li>
                  <li>Integrity</li>
                </ul>
              </AboutCard>
            </Col>
          </Row>
          <hr />
        </main>
      </Container>
    </section>
  )
}

export default AboutPage
