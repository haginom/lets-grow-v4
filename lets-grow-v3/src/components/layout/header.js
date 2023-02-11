import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"
import PropTypes from "prop-types"
import React from "react"
import Nav from "../tachyons/nav/logoLinksInlineCollapse.jsx"
import Dropdown from "./dropdown.js"

const HeaderLayout = ({ image }) => (
  <header className="relative mv2">
    <Nav subheading image={image}>
      <Dropdown
        activatorText={"WHAT WE DO "}
        items={[
          { text: "Educational Resources", url: "educational-resources" },
          { text: "Live Events", url: "live-events" },
        ]}
      />
      <Nav.Link to="/news" className="mr3 mr4-ns">
        NEWS
      </Nav.Link>
      <Nav.Link
        to="/"
        className="mr0"
        onClick={e => {
          e.preventDefault()
          navigate("/#contact")
        }}
      >
        CONTACT
      </Nav.Link>
    </Nav>
  </header>
)

HeaderLayout.propTypes = {
  image: PropTypes.object.isRequired,
}

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      headerLogo: file(relativePath: { eq: "logo small.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 220, layout: FIXED)
        }
      }
    }
  `)
  return (
    <HeaderLayout
      subheading
      image={data.headerLogo.childImageSharp.gatsbyImageData}
    />
  )
}

export default Header
