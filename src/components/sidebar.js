import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {
  FaHome,
  FaUserSecret,
  FaLinkedin,
  FaGithub,
  FaHashtag,
  FaTwitter
} from 'react-icons/fa'

const Sidebar = styled.div`
  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 20%;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 20%;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    width: 10%;
    justify-content: flex-start;
    align-items: center;

    &::before {
      content: '';
      margin: 10px;
    }
  }

  display: flex;
  flex-direction: column;
  width: 30%;
  /* background-color: #f5f5f5; */
  background-color: white;
  color: #5E4BA1;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 80px;
    height: 80px;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    width: 30px;
    height: 30px;
  }

  border-radius: 50%;
  overflow: hidden;
  width: 152px;
  height: 152px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const StyledHref = styled.a`
  text-decoration: none;
  color: inherit;
`

const MenuWrapper = styled.div`
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    div {
      margin: 0;
    }
    span {
      display: none;
    }
  }
  /*
  display: flex;
  flex-direction: row;
  div {
    margin: 10px;
  } */
  width: 50%;
  text-align: center;
`

const SiteTitle = styled.h1`
  display: flex;
  font-family: 'Montserrat';

  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 16px;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`

const HomeMenu = styled.p`
  margin-bottom: 0px;
  padding: 1em 0%;
  border-radius: 10px;


  &:hover {
    color: white;
    background-color: #5E4BA1;
    box-shadow: 11px 8px 12px 1px #c7c7c7;
    border-radius: 10px;
    transition: 0.7s;
  }
`

const NameBoard = styled.h5`
  display: flex;

  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 12px;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 12px;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`

const IconContainer = styled.div`
  display: flex;
  margin-top: 1em;
  align-items: center;
  width: 100%;
  justify-content: center;
  text-align: center;
`

const IconLink = styled.div`
  margin-right: 5px;
  border-radius: 5px;
  padding: 0.3em 0.3em 0 0.3em;
  &:hover{
    background-color: #5E4BA1;
    color: white;
  }
`

export default ({ title, authorName, bio }) => (
  <Sidebar>
    <StyledLink to="/">
      <SiteTitle>{title}</SiteTitle>
    </StyledLink>
    {/* <Logo
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMDAiPgogIDxwYXRoIGQ9Ik02MDAgMEMyNjguNiAwIDAgMjY4LjYgMCA2MDBzMjY4LjYgNjAwIDYwMCA2MDAgNjAwLTI2OC42IDYwMC02MDBTOTMxLjQgMCA2MDAgMHpNMjY2LjYgOTMzLjNDMTc2LjEgODQyLjggMTMxIDcyNC42IDEyOS42IDYwNkw1OTQgMTA3MC40Yy0xMTguNi0xLjQtMjM2LjgtNDYuNS0zMjcuNC0xMzcuMXptNDM3LjcgMTI2LjFMMTQwLjYgNDk1LjdjNDcuNS0yMTAuMSAyMzUtMzY3LjEgNDU5LjQtMzY3LjEgMTU2LjkgMCAyOTUuNSA3NyAzODEuMiAxOTQuOUw5MTUuNiAzNzlDODQ1LjggMjc5LjUgNzMwLjUgMjE0LjMgNjAwIDIxNC4zYy0xNjcuNyAwLTMxMC4zIDEwNy43LTM2My4zIDI1Ny41bDQ5MS42IDQ5MS42YzEyMy40LTQzLjcgMjE4LTE0OC4yIDI0Ny42LTI3Ny42SDc3MS40VjYwMGgzMDBjMCAyMjQuNS0xNTcgNDExLjktMzY3LjEgNDU5LjR6IiBmaWxsPSIjNjM5Ii8+Cjwvc3ZnPgo="
      alt={authorName}
    /> */}
    <NameBoard>{bio}</NameBoard>
    <MenuWrapper>
      <div>
        <StyledLink to="/">
          <HomeMenu>
            <FaHome /> <span>Home</span>
          </HomeMenu>
        </StyledLink>
        <StyledLink to="/about">
         <HomeMenu>
            <FaUserSecret /> <span>About</span>
          </HomeMenu>
        </StyledLink>
        <StyledLink to="/tags">
          <HomeMenu>
            <FaHashtag /> <span>Tags</span>
          </HomeMenu>
        </StyledLink>
        <StyledLink to="/projects">
          <HomeMenu>
            <FaHashtag /> <span>Projects</span>
          </HomeMenu>
        </StyledLink>
      </div>
      <IconContainer>
        <StyledHref
          href="https://www.linkedin.com/in/vimalraj-selvam/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconLink>
            <FaLinkedin />
          </IconLink>
        </StyledHref>
        <StyledHref
          href="https://github.com/mdchad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconLink>
            <FaGithub />
          </IconLink>
        </StyledHref>
        <StyledHref
          href="https://twitter.com/irsyadchad14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconLink>
           <FaTwitter />
          </IconLink>
        </StyledHref>
      </IconContainer>
    </MenuWrapper>
  </Sidebar>
)
