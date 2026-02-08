"use client";

import Reveal from "../Reveal";
import MotionLink from "../ui/MotionLink";

export default function Hero({ t, LINKS }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <Reveal delay={0}>
          <h1 className="hero-title">
            <span className="breathe">{t.heroTitle}</span>
          </h1>
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
