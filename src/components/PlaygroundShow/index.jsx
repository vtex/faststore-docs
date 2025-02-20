/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import BrowserOnly from "@docusaurus/BrowserOnly";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { themes } from "prism-react-renderer";
import * as React from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import styles from "./styles.module.css";

function LivePreviewLoader() {
  // Is it worth improving/translating?
  return <div>Loading...</div>;
}

function ResultWithHeader() {
  return (
    <>
      <div className={styles.playgroundPreview}>
        <BrowserOnly fallback={<LivePreviewLoader />}>
          {() => (
            <>
              <LivePreview />
              <LiveError />
            </>
          )}
        </BrowserOnly>
      </div>
    </>
  );
}

function ThemedLiveEditor() {
  const isBrowser = useIsBrowser();
  return (
    <div>
      <div className={styles.playgroundEditorHeader}>
        <p>PRODUCT CARD</p>
      </div>
      <div className={styles.playgroundEditorText}>
        <LiveEditor
          // We force remount the editor on hydration,
          // otherwise dark prism theme is not applied
          key={isBrowser}
          className={styles.playgroundEditor}
        />
      </div>
    </div>
  );
}

export default function Playground({ children, ...props }) {
  const [currentCode, setCurrentCode] = React.useState(children);
  const transformCode = (code) => {
    setCurrentCode(code);
    return `${code};`;
  };
  return (
    <div>
      <LiveProvider
        code={currentCode.replace(/\n$/, "")}
        transformCode={transformCode}
        theme={themes.vsDark}
        {...props}
      >
        <div className="grid auto-cols-fr lg:grid-flow-col">
          <ThemedLiveEditor />
          <ResultWithHeader {...props} />
        </div>
      </LiveProvider>
    </div>
  );
}
