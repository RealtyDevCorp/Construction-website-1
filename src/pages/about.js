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
              <strong>{fullTitle}</strong> is a total building resource offering
              unparalleled service and value to our clients. Our in-house
              offerings include pre-construction, program management,
              construction management, design / build, design / assist, general
              contracting, site development, construction consultation and Real
              Estate Agency. In the year 2019, starts selling houses & lots and
              condominium’s. These services are supported with
              state-of-the-science estimating, value engineering, scheduling,
              and information processing technology.
            </p>
            <p>
              The Corporation builds in the year 2015 for a family ownership. In
              response to the rapid momentum, and wanting to ensure a continued
              focus on core principles, company leaders drafted a process known
              as <strong>{title}</strong> ideas. To this day, The{" "}
              <strong>{title}</strong> idea continues to be the principle that
              governs our company as a Corporation. Displayed on every job site,
              the principle is a visual reminder of the characteristics expected
              of all our associates.
            </p>
            <p>
              Now in it’s continues year of family ownership, the company
              continues to flourish under the leadership of{" "}
              <strong>DR. RICHARD M. MANGUBAT</strong>, President, and{" "}
              <strong>SITA T. MANGUBAT</strong>, AUTHORIZED MANAGING OFFICER.
              Under their direction, <strong>{fullTitle}</strong> continues to
              build upon its foundation of repeat clients with unparalleled
              client satisfaction, as General Contractor, Consultant and Real
              Estate Supplier.
            </p>
          </section>
          <hr />
          <Row>
            <Col md="6">
              <AboutCard title="Mission">
                <p>
                  <strong>{fullTitle} </strong>to deliver &nbsp;{" "}
                  <u>professional</u> &nbsp; construction services that result
                  in the highest quality building product available while
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
