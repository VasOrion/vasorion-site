"use client";

import { useEffect, useRef } from "react";
import Reveal from "../Reveal";
import MotionLink from "../ui/MotionLink";

export default function Hero({ t, LINKS }) {
  const rafRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover)");
    if (!mq.matches) return;

    const onPointerMove = (e) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const px = (e.clientX / window.innerWidth) * 100;
        const py = (e.clientY / window.innerHeight) * 100;
        document.documentElement.style.setProperty("--px", `${px}%`);
        document.documentElement.style.setProperty("--py", `${py}%`);
        rafRef.current = null;
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-inner">
        <Reveal delay={0}>
          <div className="hero-title-wrap">
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
