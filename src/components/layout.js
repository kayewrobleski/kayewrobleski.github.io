import React from "react"
import styled, { ThemeProvider } from 'styled-components'

import ResponsiveTabBar from './navigation/ResponsiveTabBar'
import Tab from './navigation/Tab'
import theme from '../styles/themes/default'

import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'
import PortfolioPage from './pages/portfolio/PortfolioPage'

const StyledLayout = styled.div`
  .nav {
    position: static;
  }

  overflow: auto;
  // margin: auto;
  max-width: 1080px;
  margin: auto;
  ${props => props.theme.breakpoints.down('xs')} {
      width: 95%;
      margin: auto;
  }
`
const tabs = [
  {
    label: 'Home',
    index: 0
  },
  {
    label: 'About',
    index: 1
  },
  {
    label: 'Portfolio',
    index: 2
  },
  {
    label: 'Contact',
    index: 3
  }
];

const pages = {
  0: <HomePage />,
  1: <AboutPage />,
  2: <PortfolioPage />,
  3: <ContactPage />
};

const Layout = (props) => {
  const [selected, setSelected] = React.useState(0);

  const handleChange = (index) => {
      setSelected(index);
  }

  const tabElements = tabs.map(props => <Tab 
      {...props} 
      key={props.label} 
      selected={selected==props.index} 
      clickHandler={() => handleChange(props.index)} />);

  const page = pages[selected];
  console.log(page);

  return (
    <ThemeProvider theme={props.theme}>
    <StyledLayout>
      <ResponsiveTabBar className="nav" selected={selected}>
        { tabElements }
      </ResponsiveTabBar>
        { pages[selected] }
    </StyledLayout>
    </ThemeProvider>
  )
}

Layout.defaultProps = {
  theme: theme
}

export default Layout
