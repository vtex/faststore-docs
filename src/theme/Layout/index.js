import ErrorBoundary from "@docusaurus/ErrorBoundary";
import { PageMetadata, ThemeClassNames } from "@docusaurus/theme-common";
import ErrorPageContent from "@theme/ErrorPageContent";
import Footer from "@theme/Footer";
import LayoutProviders from "@theme/Layout/Provider";
import Navbar from "@theme/Navbar";
import SkipToContent from "@theme/SkipToContent";
import clsx from "clsx";
import React from "react";
import FeedbackButton from "../../components/FeedbackButton/FeedbackButton";
import AnnouncementBar from "../AnnouncementBar";
import "./styles.css";
export default function Layout(props) {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;
  // useKeyboardNavigation();
  return (
    <LayoutProviders>
      <PageMetadata title={title} description={description} />

      <SkipToContent />

      <Navbar />
      <FeedbackButton />

      <AnnouncementBar />

      <div className={clsx(ThemeClassNames.wrapper.main, wrapperClassName)}>
        <ErrorBoundary fallback={ErrorPageContent}>{children}</ErrorBoundary>
      </div>

      {!noFooter && <Footer />}
    </LayoutProviders>
  );
}
