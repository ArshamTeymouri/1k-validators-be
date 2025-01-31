import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ProgrammeName } from "../../components/ProgrammeName";

function HomeNav() {
  const NavContainer = ({ children }) => (
    <section className="homeNavContainer">
      <Container className="h-100 px-5">
        <div className="row h-100 d-flex align-items-center justify-content-center">
          {children}
        </div>
      </Container>
    </section>
  );

  const NavItem = ({ href, aosDelay, children }) => (
    <div className="col-xs-12 col-md-6 col-lg-6 homeNavItem rounded-lg">
      {" "}
      {/* Adjusted column classes */}
      <a
        href={href}
        className="h-100"
        data-aos="fade-up"
        data-aos-delay={aosDelay}
      >
        <div className="mx-auto">{children}</div>
      </a>
    </div>
  );

  const NavItemTitle = ({ children }) => (
    <h1 className="mt-0 text-dark font-weight-bold text-center">{children}</h1>
  );

  const NavItemContent = ({ children }) => (
    <div className="homeNavItemContent">{children}</div>
  );

  return (
    <NavContainer>
      <NavItem href={useDocUrl("explore-index")} aosDelay="0">
        <NavItemContent>
          <NavItemTitle>Getting Started</NavItemTitle>
          <p className="mx-auto small text-secondary px-4"></p>
        </NavItemContent>
      </NavItem>
      <NavItem href={useDocUrl("learn-index")} aosDelay="200">
        <NavItemContent>
          <NavItemTitle>Requirements</NavItemTitle>
          <p className="mx-auto small text-secondary px-4">
            Learn about the requirements for running a validator on the{" "}
            <ProgrammeName />.
          </p>
        </NavItemContent>
      </NavItem>
      <NavItem href={useDocUrl("build-guide")} aosDelay="400">
        <NavItemContent>
          <NavItemTitle>Backend</NavItemTitle>
          <p className="mx-auto small text-secondary px-4">
            Information on the backend of the <ProgrammeName />.
          </p>
        </NavItemContent>
      </NavItem>
    </NavContainer>
  );
}

function HomeFooter() {
  const FooterContainer = ({ children }) => (
    <section className="homeFooterContainer text-white text-left">
      <Container className="container-custom">
        <Row className="">{children}</Row>
      </Container>
    </section>
  );

  return <FooterContainer></FooterContainer>;
}

export default function Index() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.tagline}>
      <div className="homeContainer">
        <HomeNav />
        <HomeFooter />
      </div>
    </Layout>
  );
}

function useDocUrl(url) {
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig;
  const docsPart = "docs/";
  return `${baseUrl}${docsPart}${url}`;
}
