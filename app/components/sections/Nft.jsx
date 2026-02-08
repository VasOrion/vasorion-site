"use client";

import { motion } from "framer-motion";
import Reveal from "../Reveal";
import MotionLink from "../ui/MotionLink";
import { fadeUp, stagger, viewport } from "../motion/variants";

export default function Nft({ t, NFT_ITEMS }) {
  return (
    <section className="section" id="nft">
      <div className="container">
        <Reveal>
          <h2 className="eyebrow">{t.sectionNftEyebrow}</h2>
          <h3 className="headline">{t.sectionNftTitle}</h3>
          <p className="text">{t.sectionNftLead}</p>
          <p className="text" style={{ color: "var(--muted2)" }}>{t.nftNote}</p>
        </Reveal>

        <motion.div
          className="nft-grid mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.04)}
        >
          {NFT_ITEMS.map((item) => (
            <motion.div key={item.id} className="nft" variants={fadeUp}>
              <img src={item.img} alt={t.nftTitles[item.key]} />
              <div className="nft-body">
                <h4 className="nft-title">{t.nftTitles[item.key]}</h4>
                <p className="nft-mini">{t.nftLegends[item.key]}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Reveal delay={0.12}>
        <div style={{ marginTop: 24 }}>
          <MotionLink
            href="https://opensea.io/collection/vasorion-genesis"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            {t.btnOpenSea}
          </MotionLink>
        </div>
      </Reveal>
    </section>
  );
}
