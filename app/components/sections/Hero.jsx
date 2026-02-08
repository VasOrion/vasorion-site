"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "../Reveal";
import MotionLink from "../ui/MotionLink";

export default function Hero({ t, LINKS }) {
  const wrapRef = useRef(null);
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover)");
    setHasHover(mq.matches);
    const fn = () => setHasHover(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  const onMouseMove = useCallback(
    (e) => {
      if (!hasHover || !wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      wrapRef.current.style.setProperty("--mx", `${x}%`);
      wrapRef.current.style.setProperty("--my", `${y}%`);
    },
    [hasHover]
  );

  return (
    <section className="hero">
      <div className="hero-inner">
        <Reveal delay={0}>
          <div
            ref={wrapRef}
            className="hero-title-wrap"
            onMouseMove={onMouseMove}
            role="presentation"
          >
            <h1 className="hero-title">
              <span className="breathe">{t.heroTitle}</span>
            </h1>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="hero-subtitle">{t.heroSubtitle}</p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="hero-actions">
            <MotionLink className="btn primary" href={LINKS.bot} target="_blank" rel="noreferrer">
              {t.btnBot}
            </MotionLink>
            <MotionLink className="btn" href={LINKS.channel} target="_blank" rel="noreferrer">
              {t.btnChannel}
            </MotionLink>
            <MotionLink className="btn btn-ghost" href="#product">
              {t.btnProduct}
            </MotionLink>
            <MotionLink className="btn btn-ghost" href="#nft">
              {t.btnNft}
            </MotionLink>
            <MotionLink className="btn btn-ghost" href="#security">
              {t.btnSecurity}
            </MotionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
