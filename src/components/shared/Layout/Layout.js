import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Navigation from '../Navigation'
import GlobalStyle from './GlobalStyle'
import ThemeWrapper from './ThemeWrapper'
import styled from '@emotion/styled'

const Container = styled.div`
  max-width: 1200px;
  padding: 0px 20px;
  margin: 0 auto;
`

export const PureLayout = ({ data, children }) => {
  return (
    <ThemeWrapper>
      <GlobalStyle />
      <Navigation />
      <Container>
        <main>{children}</main>
      </Container>
    </ThemeWrapper>
  )
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <PureLayout data={data}>{children}</PureLayout>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
