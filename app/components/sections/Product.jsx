"use client";

import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { fadeUp, stagger, viewport } from "../motion/variants";

export default function Product({ t }) {
  return (
    <section className="section" id="product">
      <div className="container">
        <Reveal>
          <h2 className="eyebrow">{t.sectionProductEyebrow}</h2>
          <h3 className="headline" data-theme="product">{t.sectionProductTitle}</h3>
          <p className="text">{t.sectionProductLead}</p>
        </Reveal>

        <motion.div
          className="cards mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.08)}
        >
          <motion.div className="card" variants={fadeUp}>
            <h4>{t.c1t}</h4>
            <p>{t.c1p}</p>
          </motion.div>
          <motion.div className="card" variants={fadeUp}>
            <h4>{t.c2t}</h4>
            <p>{t.c2p}</p>
          </motion.div>
          <motion.div className="card" variants={fadeUp}>
            <h4>{t.c3t}</h4>
            <p>{t.c3p}</p>
          </motion.div>
        </motion.div>

        <div className="facts mt-14">
          <Reveal>
            <div className="fact">
              <span className="fact-number">{t.fact1n}</span>
              <span className="fact-label">{t.fact1l}</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="fact">
              <span className="fact-number">{t.fact2n}</span>
              <span className="fact-label">{t.fact2l}</span>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="fact">
              <span className="fact-number">{t.fact3n}</span>
              <span className="fact-label">{t.fact3l}</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="card mt-16">
            <h4 style={{ marginBottom: 10 }}>{t.sectionHowEyebrow}</h4>
            <h3 className="headline" style={{ marginBottom: 10 }}>{t.sectionHowTitle}</h3>
            <p className="text">01 — {t.step1}</p>
            <p className="text">02 — {t.step2}</p>
            <p className="text">03 — {t.step3}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
