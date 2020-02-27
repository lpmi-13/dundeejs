import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../styles/style.css';

const IndexPage = () => (
  <Layout>
    <div class="siteWrapper">
      <div class="siteInnerWrapper">
        <main>
          <div class="contactCardWrap">
            <div class="contactCard">
              <a href="https://www.meetup.com/Dundee-JavaScript-Meetup/events/267930154/" target="_blank" rel="noreferrer" class="logo">
                <div class="imageWrap">
                  <img src="https://www.dundeejs.co.uk/wp-content/themes/chop-child/images/logo.png" alt="Dundee JS"/>
                </div>
              </a>
            </div>
            <div class="contactDetails">
              <div class="meetupLink">
                <a href="https://www.meetup.com/Dundee-JavaScript-Meetup/events/267930154/" target="_blank" rel="noreferrer">
                  <div class="imageWrap">
                    <img src="https://www.dundeejs.co.uk/wp-content/themes/chop-child/images/meetup_logo.svg" alt="Dundee JS on Meetup"/>
                  </div>
                </a>
              </div>
              <div class="twitterHandle">
                <a href="https://twitter.com/DundeeJs" target="_blank" rel="noreferrer">
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
