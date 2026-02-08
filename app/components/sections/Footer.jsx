"use client";

import MotionLink from "../ui/MotionLink";

export default function Footer({ t, LINKS }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="small">{t.footerLeft}</div>
          <div className="badges">
            <span className="badge">{t.badgePayments}</span>
            <span className="badge">{t.badgeSupport}</span>
            <span className="badge">{t.badgePrivacy}</span>
          </div>
        </div>
        <div className="footer-contact">
          <span className="footer-contact-label">{t.contact}</span>
          <span className="footer-contact-links">
            <MotionLink href={LINKS.bot} target="_blank" rel="noreferrer">{t.linksBot}</MotionLink>
            <span className="footer-contact-sep"> · </span>
            <MotionLink href={LINKS.channel} target="_blank" rel="noreferrer">{t.linksChannel}</MotionLink>
            <span className="footer-contact-sep"> · </span>
            <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
