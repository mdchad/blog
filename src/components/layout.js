import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Sidebar from './sidebar'

const Container = styled.div`
  display: flex;
  height: 100vh;
  font-family: 'Montserrat' !important;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: scroll;
  padding: 20px;
  color: #7e7e7e;
  background-color: #f9f9f9;
`

const Query = graphql`
  query {
    site {
      siteMetadata {
        title
        authorName
        bio
      }
    }
  }
`

export default ({ children }) => (
  <StaticQuery
    query={Query}
    render={data => {
      const { title, siteDescription, authorName, bio } = data.site.siteMetadata
      return (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={siteDescription} />
            <title>{title}</title>
            <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
          </Helmet>
          <Container>
            <Sidebar title={title} bio={bio} authorName={authorName} />
            <Content>{children}</Content>
          </Container>
        </>
      )
    }}
  />
)
