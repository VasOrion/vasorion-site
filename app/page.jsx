"use client";

import { useState, useEffect } from "react";
import { LINKS } from "./constants/links";
import { NFT_ITEMS } from "./constants/nft";
import { I18N } from "./constants/i18n";
import Nav from "./components/sections/Nav";
import Hero from "./components/sections/Hero";
import System from "./components/sections/System";
import Product from "./components/sections/Product";
import Nft from "./components/sections/Nft";
import Security from "./components/sections/Security";
import Footer from "./components/sections/Footer";

const LANG_KEY = "vasorion_lang";
const VALID_LANGS = ["ru", "en", "zh"];

function getInitialLang() {
  try {
    const saved = typeof window !== "undefined" ? localStorage.getItem(LANG_KEY) : null;
    return saved && VALID_LANGS.includes(saved) ? saved : "ru";
  } catch {
    return "ru";
  }
}

export default function Home() {
  const [lang, setLang] = useState(getInitialLang);
  const t = I18N[lang] ?? I18N.ru;

  useEffect(() => {
    document.title = t.metaTitle ?? "VASORION — system over noise";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", t.metaDescription ?? "");
  }, [t.metaTitle, t.metaDescription]);

  return (
    <main className="page">
      <div className="bg-noise" />
      <div className="bg-aura" />
      <Nav t={t} LINKS={LINKS} lang={lang} onLangChange={setLang} />
      <div id="content">
        <Hero t={t} LINKS={LINKS} />
        <System t={t} />
        <Product t={t} />
        <Nft t={t} NFT_ITEMS={NFT_ITEMS} />
        <Security t={t} LINKS={LINKS} />
        <Footer t={t} LINKS={LINKS} />
      </div>
    </main>
  );
}
