import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../styles/style.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="siteWrapper">
        <div className="siteInnerWrapper">
          <main>
            <div className="contactCardWrap">
              <div className="contactCard">
                <a href="https://www.meetup.com/Dundee-JavaScript-Meetup/events/267930154/" target="_blank" rel="noopener noreferrer" className="logo">
                  <div className="imageWrap">
                    {/* <img src="https://www.dundeejs.co.uk/wp-content/themes/chop-child/images/logo.png" alt="Dundee JS"/> */}
                    <Image />
                  </div>
                </a>
              </div>
              <div className="contactDetails">
                <div className="meetupLink">
                  <a href="https://www.meetup.com/Dundee-JavaScript-Meetup/events/267930154/" target="_blank" rel="noopener noreferrer">
                    <div className="imageWrap">
                      <img src="https://www.dundeejs.co.uk/wp-content/themes/chop-child/images/meetup_logo.svg" alt="Dundee JS on Meetup"/>
                    </div>
                  </a>
                </div>
                <div className="twitterHandle">
                  <a href="https://twitter.com/DundeeJs" target="_blank" rel="noopener noreferrer">
                    @dundeejs
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
  </Layout>
)

export default IndexPage
