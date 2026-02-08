"use client";

import Reveal from "../Reveal";
import MotionLink from "../ui/MotionLink";

export default function Security({ t, LINKS }) {
  return (
    <section className="section" id="security">
      <div className="container">
        <Reveal>
          <h2 className="eyebrow">{t.sectionSecurityEyebrow}</h2>
          <h3 className="headline" data-theme="security">{t.sectionSecurityTitle}</h3>
        </Reveal>

        <div className="split" style={{ marginTop: 12 }}>
          <Reveal>
            <div className="card">
              <h4>CryptoCloud</h4>
              <p className="text">{t.secP1}</p>
              <p className="text">{t.secP2}</p>
              <p className="text">{t.secP3}</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card">
              <h4>{t.contact}</h4>
              <p className="text">
                {t.footerRight1}{" "}
                <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
              </p>
              <p className="text">
                {t.footerNews}{" "}
                <a
                  href={LINKS.channel}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--text)" }}
                >
                  {t.channelName}
                </a>
              </p>
              <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <MotionLink className="btn primary" href={LINKS.bot} target="_blank" rel="noreferrer">
                  {t.btnBot}
                </MotionLink>
                <MotionLink className="btn" href={LINKS.channel} target="_blank" rel="noreferrer">
                  {t.btnChannel}
                </MotionLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
