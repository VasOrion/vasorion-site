"use client";

import { useEffect, useState } from "react";
import LanguageSwitch from "../LanguageSwitch";
import MotionLink from "../ui/MotionLink";

const SECTION_IDS = ["product", "nft", "security"];

export default function Nav({ t, LINKS, lang, onLangChange }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        const candidate = visible.length
          ? visible.reduce((best, e) =>
              e.intersectionRatio > best.intersectionRatio ? e : best
            )
          : null;
        if (candidate && candidate.intersectionRatio >= 0.35) {
          setActive(candidate.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.35,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav">
      <a className="skip-link" href="#content">
        {t.skipToContent}
      </a>
      <div className="nav-left">
        <span className="nav-logo">VASORION</span>
        <span className="nav-tag">{t.navTag}</span>
      </div>
      <div className="nav-right">
        <LanguageSwitch value={lang} onChange={onLangChange} />
        <div className="nav-links">
          <a
            href="#product"
            className={`nav-link ${active === "product" ? "active" : ""}`}
            aria-current={active === "product" ? "page" : undefined}
          >
            {t.btnProduct}
          </a>
          <a
            href="#nft"
            className={`nav-link ${active === "nft" ? "active" : ""}`}
            aria-current={active === "nft" ? "page" : undefined}
          >
            {t.btnNft}
          </a>
          <a
            href="#security"
            className={`nav-link ${active === "security" ? "active" : ""}`}
            aria-current={active === "security" ? "page" : undefined}
          >
            {t.btnSecurity}
          </a>
        </div>
        <MotionLink className="btn" href={LINKS.channel} target="_blank" rel="noreferrer">
          {t.btnChannel}
        </MotionLink>
      </div>
    </nav>
  );
}
