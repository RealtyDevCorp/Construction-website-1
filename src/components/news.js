import React from "react"
import { Container, Row, Col } from "reactstrap"

import NewsCard from "./newsCard"

import imgDO13Stotsenberg from "../images/news/do13-stotsenberg/cover.jpg"
import imgDO13IslandCove from "../images/news/do13-seminar/cover.jpg"
import imgTeamBuilding from "../images/news/company-outing-2019/cover.jpg"

const companyNews = [
  {
    title: `Company Team Building 2019`,
    date: `Jun. 22-23, 2019`,
    about: `The event used to help our Team increase trust, improve communication, increase collaboration and increase or maintain motivation, and most of all to have FUN!`,
    img: imgTeamBuilding,
    slug: `team-building-2019`,
  },
  {
    title: `DO13 Seminar 2019 @Island Cove`,
    date: `May 13, 2018`,
    about: `Held @ Island Cove - Hotel and Leisure Park, Cavity.
    The Seminar is about to enforce mandatory occupational safety and health standards to eliminate or reduce occupational safety and health hazards in all work places`,
    img: imgDO13IslandCove,
    slug: `do13-seminar-island-cove`,
  },
  {
    title: `DO13 Seminar 2019 @Stotsenberg`,
    date: `Apr 08, 2018`,
    about: `Held @ Stotsenberg Hotel - Gil Puyat Avenue corner Andres Soriano St, ClarkFreeport Zone, Clark Freeport, Pampanga.
    The Seminar is about to enforce mandatory occupational safety and health standards to eliminate or reduce occupational safety and health hazards in all work places`,
    img: imgDO13Stotsenberg,
    slug: `do13-seminar-stotsenberg`,
  },
]

const News = () => {
  return (
    <div className="news section-lg center bg-light-gray">
      <Container>
        <h2 className="header-title">Company News</h2>
        <Row>
          {companyNews.map(news => {
            return (
              <Col lg="4" md="6" sm="12">
                <NewsCard news={news} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default News
