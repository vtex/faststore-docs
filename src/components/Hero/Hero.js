import React from "react";
import Link from "@docusaurus/Link";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
          <h1>FastStore</h1>
          <h2>
            The ultimate toolkit for building blazing-fast storefronts
          </h2>
          <p>
            In the ecommerce world, speed matters. That&rsquo;s why we&rsquo;ve
            built FastStore: an open-source toolkit to create blazing-fast
            storefronts that convert.
          </p>
          <div>
            <div>
              <Link
                to="https://www.vtexfaststore.com/"
                className="button-primary"
              >
                VIEW LIVE DEMO
              </Link>
            </div>
          </div>
        </div>
      <img
        src="https://vtexhelp.vtexassets.com/assets/docs/src/newperf___473c0852ff70a357649f54f62eb968d1.png"
      />
    </div>
  );
}

export default Hero;
