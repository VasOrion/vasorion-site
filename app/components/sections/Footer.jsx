"use client";

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div className="small">{t.footerLeft}</div>
        <div className="badges">
          <span className="badge">VasOrion Prompts</span>
          <span className="badge">CryptoCloud</span>
          <span className="badge">{t.badgeDeploy}</span>
        </div>
      </div>
    </footer>
  );
}
