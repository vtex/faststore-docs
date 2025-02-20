/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useThemeConfig } from "@docusaurus/theme-common";
import { useAnnouncementBar } from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import IconClose from "@theme/Icon/Close";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";
export default function AnnouncementBar() {
  const { isActive, close } = useAnnouncementBar();
  const { announcementBar } = useThemeConfig();

  if (!isActive) {
    return null;
  }

  const { content, backgroundColor, textColor, isCloseable } = announcementBar;
  return (
    <div
      className={styles.announcementBar}
      style={{
        backgroundColor,
        color: textColor,
      }}
      role="banner"
    >
      {isCloseable && <div className={styles.announcementBarPlaceholder} />}
      <div className={styles.announcementBarContent}>
        <div
          className="inline pr-1"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>
      {isCloseable ? (
        <button
          type="button"
          className={clsx("clean-btn close", styles.announcementBarClose)}
          onClick={close}
          aria-label={translate({
            id: "theme.AnnouncementBar.closeButtonAriaLabel",
            message: "Close",
            description: "The ARIA label for close button of announcement bar",
          })}
        >
          <IconClose width={14} height={14} strokeWidth={3.1} />
        </button>
      ) : null}
    </div>
  );
}
