"use client";

import Reveal from "../Reveal";

export default function System({ t }) {
  return (
    <section className="section" id="system">
      <div className="container">
        <Reveal>
          <h2 className="eyebrow">{t.sectionSystemEyebrow}</h2>
          <h3 className="headline">{t.sectionSystemTitle}</h3>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text">{t.sectionSystemP1}</p>
          <p className="text">{t.sectionSystemP2}</p>
        </Reveal>
      </div>
    </section>
  );
}
