import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import HeroLandingZone from "pages/hero-landing-zone";
import ContactPortal from "pages/contact-portal";
import AboutEcosystem from "pages/about-ecosystem";
import ProjectGallery from "pages/project-gallery";
import SkillsLaboratory from "pages/skills-laboratory";
import NavigationHub from "pages/navigation-hub";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<HeroLandingZone />} />
        <Route path="/hero-landing-zone" element={<HeroLandingZone />} />
        <Route path="/contact-portal" element={<ContactPortal />} />
        <Route path="/about-ecosystem" element={<AboutEcosystem />} />
        <Route path="/project-gallery" element={<ProjectGallery />} />
        <Route path="/skills-laboratory" element={<SkillsLaboratory />} />
        <Route path="/navigation-hub" element={<NavigationHub />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;