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
          <h3 className="headline" data-theme="nft">{t.sectionNftTitle}</h3>
          {t.sectionNftLead.split("\n\n").filter(Boolean).map((para, i) => (
            <p key={i} className="text">{para}</p>
          ))}
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
              <div className="nft-imgwrap">
                <img src={item.img} alt={t.nftTitles[item.key]} />
              </div>
              <div className="nft-body">
                <h4 className="nft-title">{t.nftTitles[item.key]}</h4>
                <p className="nft-mini">{t.nftLegends[item.key]}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <Reveal delay={0.12}>
          <div className="nft-cta-wrap">
            <MotionLink
              href="https://opensea.io/collection/vasorion-genesis"
              target="_blank"
              rel="noreferrer"
              className="btn legendary"
            >
              {t.btnOpenSea}
            </MotionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
