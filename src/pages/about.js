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
            <Col md="6" className="d-flex align-items-stretch">
              <AboutCard title="Mission">
                <p>
                  It is the mission <strong>{fullTitle} </strong>to deliver
                  &nbsp;
                  <u>professional</u> &nbsp; construction services that result
                  in the highest quality building product available while
                  conducting every aspect of our business with a level of &nbsp;
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
            <Col md="6" className="d-flex align-items-stretch">
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
            </Col>
            <Col md="12">
              <AboutCard title="Core Values">
                <ul>
                  <li>
                    <strong>Safety</strong>
                    <p>
                      Safety will always come first as we strive for
                      accident-free projects.
                    </p>
                  </li>
                  <li>
                    <strong>Professionalism</strong>
                    <p>
                      We are professionals committed to saving our clients money
                      through cost-effective solutions and value-added services
                      while making a fair profit.
                    </p>
                  </li>
                  <li>
                    <strong>Integrity </strong> (Honesty, Trust and Respect)
                    <p>
                      We are committed to the highest ethical standards. It’s
                      what our Customers expect from us and what our Associates
                      expect from their leadership and each other. This is
                      earned through our performance and by our example. The
                      very heart of our business is the faith our clients have
                      in {title}. We as a Company, and you and I as individuals,
                      must never do anything to compromise that trust.
                    </p>
                  </li>
                  <li>
                    <strong>Attitude</strong>
                    <p>
                      A can-do attitude and willingness to go the extra mile for
                      our customers and fellow associates are essential to our
                      company’s success. Our associates are part of the
                      decision-making process. Team involvement is necessary for
                      improvement.
                    </p>
                  </li>
                  <li>
                    <strong>Team Management </strong>(with Shared
                    Responsibilities)
                    <p>
                      We don’t work for one person… we work together as a team.
                    </p>
                  </li>
                  <li>
                    <strong>Open and Free Communication</strong>
                    <p>
                      We communicate within {title} from the bottom to the top,
                      from the top down and within the marketplace. We offer an
                      environment for participation and creativity for all of
                      our Associates and tailor our services to personalize
                      communications with our Customers.
                    </p>
                  </li>
                  <li>
                    <strong>Quality</strong>
                    <p>
                      Our goal is simply to be the best and to continually
                      improve. This is accomplished through focused teamwork,
                      pride in our work, quality controlled systems – and by
                      hiring and educating the best people we can possibly find.
                    </p>
                  </li>
                  <li>
                    <strong>Inclusion</strong>
                    <p>
                      Inclusion is the lifeline of our future. It’s not
                      something we say we do. It is a key component of our
                      business plan and essential to the economic sustainability
                      of the rich mix of diverse communities and customers we
                      serve. Our inclusion commitment is reflected through
                      workforce diversity, supplier diversity, and community
                      involvement.
                    </p>
                  </li>
                  <li>
                    <strong>Accountability</strong>
                    <p>
                      We are accountable to our Customers, Company, Teammates,
                      and Suppliers – and Accountability ultimately to God.
                    </p>
                  </li>
                  <li>
                    <strong>Customer Satisfaction</strong>
                    <p>
                      The end result of our efforts must be a satisfied
                      Customer. Our reputation is the key to {title} longevity
                      in the construction industry and will remain the key to
                      future successes.
                    </p>
                  </li>
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
