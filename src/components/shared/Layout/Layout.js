import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Navigation from '../Navigation'
import GlobalStyle from './GlobalStyle'
import ThemeWrapper from './ThemeWrapper'
import styled from '@emotion/styled'
import useDeviceDetect from '../../../hooks/useDeviceDetect'

const Container = styled.div`
  max-width: 1200px;
  padding: ${props => (props.isMobile ? `0px 10px` : `0px 20px`)};
  margin: 0 auto;
`

const Main = styled.main`
  margin-top: 10px;
`

export const PureLayout = ({ data, children }) => {
  const { isMobile } = useDeviceDetect()
  return (
    <ThemeWrapper>
      <GlobalStyle />
      <Navigation />
      <Container isMobile={isMobile}>
        <Main>{children}</Main>
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
