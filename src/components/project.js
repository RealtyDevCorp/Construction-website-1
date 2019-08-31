import React, { Component } from "react"
import { Container, Badge, Row, Col, Button } from "reactstrap"
import { Link } from "gatsby"
import "./project.scss"

import ProjCard from "./projCard"

// import img1 from "../images/projects/ialicante-mediterranean-homes-2d4lAQAlbDA-unsplash.jpg"
// import img2 from "../images/projects/jarek-ceborski-jn7uVeCdf6U-unsplash.jpg"
// import img3 from "../images/projects/pixasquare-4ojhpgKpS68-unsplash.jpg"
// import img4 from "../images/projects/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg"
// import img5 from "../images/projects/jason-briscoe-AQl-J19ocWE-unsplash.jpg"
// import img6 from "../images/projects/lance-anderson-QdAAasrZhdk-unsplash.jpg"

import apeco from "../images/projects/apeco/cover.jpg"
import congressional from "../images/projects/congressional/cover.jpg"
import jpRizal from "../images/projects/jp-rizal/cover.jpg"
import newEra from "../images/projects/new-era/cover.jpg"
import paliparanEs from "../images/projects/paliparan-es/cover.jpg"
// import stScholastica from "../images/projects/st-scholastica/cover.jpg"
// import zapoteEs from "../images/projects/zapote-es/cover.jpg"
import sanNicolas from "../images/projects/san-nicolas/cover.jpg"

const projects = [
  {
    title: "Construction of Leasehold Improvements for APECO's Satelite Office",
    category: ["interior design"],
    description: `Owned by AURORA PACIFIC ECONOMIC ZONE AND FREEPORT AUTHORITY.
      Located at Unit 702-3 Philflex Bldg., 15 Coral Way Road, Central Business Park,
      Mall of Asia Complex, Pasay City `,
    img: {
      src: apeco,
      orig: "Apeco",
      author: "AURORA PACIFIC ECONOMIC ZONE AND FREEPORT AUTHORITY",
    },
  },
  {
    title: "REPAIR AND REHABILITATION OF SCHOOL BUILDINGS - 14 CLASSROOMS",
    category: ["remodeling"],
    description: `Project of DepED Dasma at CONGRESSIONAL NATIONAL HIGH SCHOOL, 
      Via Verde Village, San Agustin Ii, Dasmariñas City`,
    img: {
      src: congressional,
      orig: "CONGRESSIONAL NATIONAL HIGH SCHOOL",
      author: "DepED Dasma",
    },
  },
  {
    title: "REPAIR AND REHABILITATION OF SCHOOL BUILDINGS - 4 CLASSROOMS",
    category: ["remodeling"],
    description: `Project of DepED Dasma at DR. JOSE P. RIZAL ELEMENTARY SCHOOL, 
    Sto. Cristo, Dasmariñas City`,
    img: {
      src: jpRizal,
      orig: "DR. JOSE P. RIZAL ELEMENTARY SCHOOL",
      author: "DepED Dasma",
    },
  },
  {
    title: "REPAIR AND REHABILITATION OF SCHOOL BUILDINGS - 12 CLASSROOMS",
    category: ["remodeling"],
    description: `Project of DepED Dasma at NEW ERA NATIONAL HIGH SCHOOL, 
    Sampaloc V, Dasmariñas City`,
    img: {
      src: newEra,
      orig: "NEW ERA NATIONAL HIGH SCHOOL",
      author: "DepED Dasma",
    },
  },
  {
    title: "REPAIR AND REHABILITATION OF SCHOOL BUILDINGS - 4 CLASSROOMS",
    category: ["remodeling"],
    description: `Project of DepED Dasma at PALIPARAN ELEMENTARY SCHOOL, 
    Paliparan II, Dasmariñas City`,
    img: {
      src: paliparanEs,
      orig: "PALIPARAN ELEMENTARY SCHOOL",
      author: "DepED Dasma",
    },
  },
  {
    title: "REPAIR AND REHABILITATION OF SCHOOL BUILDINGS - 22 CLASSROOMS",
    category: ["remodeling"],
    description: `Project of DepED Dasma at SAN NICOLAS ELEMENTARY SCHOOL, 
    Brgy. San Nicolas I, Dasmariñas City`,
    img: {
      src: sanNicolas,
      orig: "SAN NICOLAS ELEMENTARY SCHOOL",
      author: "DepED Dasma",
    },
  },
]
const projCategories = ["all", "construction", "remodeling", "interior design"]
class Project extends Component {
  state = {
    category: "all",
  }
  render() {
    const { category } = this.state
    return (
      <div className="project section-lg" id="project">
        <Container>
          <h2 className="header-title center">Latest Project</h2>
          <section className="gallery-cat center">
            {projCategories.map((projCategory, index) => {
              return (
                <Badge
                  key={index}
                  color={projCategory === category ? "secondary" : "light"}
                  onClick={() => this.setState({ category: projCategory })}
                >
                  {projCategory}
                </Badge>
              )
            })}
          </section>
          <section className="gallery">
            <Row>
              {category === "all"
                ? projects.map(project => {
                    return (
                      <Col lg="4" md="6" sm="12">
                        <ProjCard proj={project} />
                      </Col>
                    )
                  })
                : projects
                    .filter(project => project.category.includes(category))
                    .map(project => {
                      return (
                        <Col lg="4" md="6" sm="12">
                          <ProjCard proj={project} />
                        </Col>
                      )
                    })}
            </Row>
          </section>
          <section className="center mt-5 font-size-s2">
            <p className="">Explore more about our Projects</p>
            <Link to="/projects/#project">
              <Button outline color="dark">
                All Projects
              </Button>
            </Link>
          </section>
        </Container>
      </div>
    )
  }
}

export default Project
