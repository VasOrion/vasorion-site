"use client";

import Reveal from "../Reveal";

export default function System({ t, LINKS }) {
  return (
    <section className="section" id="system">
      <div className="container split">
        <div>
          <Reveal>
            <h2 className="eyebrow">{t.sectionSystemEyebrow}</h2>
            <h3 className="headline">{t.sectionSystemTitle}</h3>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text">{t.sectionSystemP1}</p>
            <p className="text">{t.sectionSystemP2}</p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="card">
            <h4>{t.links}</h4>
            <p className="text mt-8">
              • {t.linksBot}: <a href={LINKS.bot} target="_blank" rel="noreferrer">{LINKS.bot}</a>
            </p>
            <p className="text">
              • {t.linksChannel}: <a href={LINKS.channel} target="_blank" rel="noreferrer">{LINKS.channel}</a>
            </p>
            <p className="text">
              • {t.linksEmail}: <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
            </p>
            <p className="text">
              • {t.linksUpdatesPrefix}{" "}
              <a href={LINKS.channel} target="_blank" rel="noreferrer">
                {t.linksUpdatesLink}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
