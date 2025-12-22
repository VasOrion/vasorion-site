"use client";

import { useMemo, useState } from "react";
import Reveal from "./components/Reveal";
import LanguageSwitch from "./components/LanguageSwitch";

const LINKS = {
  bot: "https://t.me/VasOrionPrompts_bot",
  channel: "https://t.me/VasOrion_Official",
  email: "viktorovich-vasiliy@inbox.ru",
  platform: "vasorion.tech",
};
const NFT_ITEMS = [
  { id: "01", img: "/nft/01-allknowing.webp", key: "allknowing" },
  { id: "02", img: "/nft/02-hero.webp", key: "hero" },
  { id: "03", img: "/nft/03-daughter.webp", key: "daughter" },
  { id: "04", img: "/nft/04-mother.webp", key: "mother" },
  { id: "05", img: "/nft/05-father.webp", key: "father" },
  { id: "06", img: "/nft/06-spark.webp", key: "spark" },
  { id: "07", img: "/nft/07-android.webp", key: "android" },
];
const I18N = {
  ru: {
    navTag: "system over noise",
    heroTitle: "VASORION",
    heroSubtitle:
      "Экосистема мышления, решений и цифровой идентичности. Мы убираем шум — оставляем ясность, выбор и контроль у человека.",
    btnBot: "Открыть бота",
    btnChannel: "Официальный канал",
    sectionSystemEyebrow: "SYSTEM",
    sectionSystemTitle: "Архитектура осознанного выбора",
    sectionSystemP1:
      "VasOrion — независимая цифровая система для навигации в сложных решениях и неопределённых сценариях.",
    sectionSystemP2:
      "Мы не навязываем решения. Мы структурируем мышление так, чтобы финальный выбор всегда оставался за человеком.",
    sectionProductEyebrow: "PRODUCT",
    sectionProductTitle: "VasOrion Prompts Bot",
    sectionProductLead:
      "Интерфейс между человеком и ИИ: превращает хаос задач в управляемые формулировки и понятные варианты действий.",
    c1t: "Структурирование",
    c1p: "Преобразует мысль в точную задачу: коротко, ясно, без искажений.",
    c2t: "Многоуровневый анализ",
    c2p: "Показывает сценарии, риски и альтернативы — без давления и внушений.",
    c3t: "Контроль",
    c3p: "ИИ предлагает варианты. Решение принимает человек.",
    fact1n: "24/7",
    fact1l: "работает всегда",
    fact2n: "AI",
    fact2l: "структура и глубина",
    fact3n: "Human",
    fact3l: "финальный выбор",
    sectionHowEyebrow: "HOW IT WORKS",
    sectionHowTitle: "Как пользоваться ботом",
    step1: "Открой бота и выбери режим/уровень формулировки.",
    step2: "Отправь задачу. Получи точную формулировку + варианты действий.",
    step3: "Прими решение и действуй. У человека — контроль, у системы — ясность.",
    sectionNftEyebrow: "NFT / IDENTITY",
    sectionNftTitle: "VasOrion NFT — статус и след в экосистеме",
    sectionNftLead:
      "Каждый персонаж — часть мира VasOrion. На сайте публикуются выпуски коллекций как витрина. Подлинные экземпляры находятся у владельцев — это знак участия и статуса.",
    nftNote:
      "Изображения ниже — стартовая коллекция. Публикация в блокчейнах — следующий этап.",
    nftTitles: {
      allknowing: "Всезнающая",
      father: "Отец — Архитектор",
      mother: "Мать — Исток",
      hero: "Старший сын — Герой",
      daughter: "Дочь — Мечтательница",
      spark: "Младший сын — Искра",
      android: "Сестра Всезнающей — Андроид",
    },
    nftLegends: {
      allknowing:
        "Оракул семьи: видит закономерности в хаосе информации и превращает шум в знание. Её присутствие — это навигация без паники.",
      father:
        "Создатель структуры: строит порядок там, где остальные видят туман. Его принцип — дисциплина мышления и защита системы.",
      mother:
        "Источник гармонии: удерживает баланс между холодной логикой и человеческим теплом. Там, где она — решения становятся спокойнее.",
      hero:
        "Защитник: действует не из ярости, а из ответственности. Его сила — удерживать границы и сохранять курс, когда всё качает.",
      daughter:
        "Мост чувств и технологий: напоминает, что интеллект без человечности — пустой инструмент. Она приносит смысл и мягкость.",
      spark:
        "Будущее в движении: любопытство, рост, смелость пробовать. Искра запускает новое — без страха ошибиться.",
      android:
        "Тихая опора: помощник, который восстанавливает силы, когда человек устал. Вежливость, точность и забота — её код.",
    },
    sectionSecurityEyebrow: "SECURITY & PAYMENTS",
    sectionSecurityTitle: "Оплата и безопасность",
    secP1:
      "Оплаты в боте обрабатываются через CryptoCloud. Мы не храним данные банковских карт и не принимаем их на своей стороне.",
    secP2:
      "Платёж открывается на защищённой странице провайдера (HTTPS). После оплаты бот подтверждает статус и начисляет доступ.",
    secP3:
      "Важно: VasOrion — инструмент формулирования и навигации мышления. Мы не выдаём финансовых/юридических гарантий и не заменяем специалистов.",
    footerLeft:
      "VasOrion — независимая цифровая система. Все решения принимает человек.",
    footerRight1: "Связь:",
    footerRight2: "Домен:",
  },

  en: {
    navTag: "system over noise",
    heroTitle: "VASORION",
    heroSubtitle:
      "An ecosystem of thinking, decisions, and digital identity. We remove noise — keep clarity, choice, and control in human hands.",
    btnBot: "Open the bot",
    btnChannel: "Official channel",
    sectionSystemEyebrow: "SYSTEM",
    sectionSystemTitle: "Architecture of conscious choice",
    sectionSystemP1:
      "VasOrion is an independent digital system for navigating complex decisions and uncertain scenarios.",
    sectionSystemP2:
      "We don’t impose decisions. We structure thinking so the final choice always stays with the human.",
    sectionProductEyebrow: "PRODUCT",
    sectionProductTitle: "VasOrion Prompts Bot",
    sectionProductLead:
      "A human–AI interface: turns task chaos into controllable prompts and clear action options.",
    c1t: "Structuring",
    c1p: "Transforms a thought into a precise task — clean, short, without distortion.",
    c2t: "Multi-layer analysis",
    c2p: "Shows scenarios, risks, and alternatives — without pressure or suggestion.",
    c3t: "Control",
    c3p: "AI proposes options. Humans decide.",
    fact1n: "24/7",
    fact1l: "always on",
    fact2n: "AI",
    fact2l: "structure & depth",
    fact3n: "Human",
    fact3l: "final decision",
    sectionHowEyebrow: "HOW IT WORKS",
    sectionHowTitle: "How to use the bot",
    step1: "Open the bot and choose a mode/level.",
    step2: "Send your task. Get an optimized prompt + action paths.",
    step3: "Decide and act. Human keeps control — the system keeps clarity.",
    sectionNftEyebrow: "NFT / IDENTITY",
    sectionNftTitle: "VasOrion NFT — status & trace in the ecosystem",
    sectionNftLead:
      "Each character is part of the VasOrion world. The website publishes drops as a showcase. Authentic originals belong to holders — a mark of participation and status.",
    nftNote:
      "Images below are the starter collection. On-chain publication is the next stage.",
    nftTitles: {
      allknowing: "The All-Knowing",
      father: "The Father — Architect",
      mother: "The Mother — Origin",
      hero: "Eldest Son — Guardian",
      daughter: "Daughter — Dreamer",
      spark: "Youngest Son — Spark",
      android: "Elegant Android",
    },
    nftLegends: {
      allknowing:
        "The family oracle: reads patterns inside information storms and turns noise into knowledge — calm navigation.",
      father:
        "Builder of structure: creates order where others see fog. Discipline of thought and system protection.",
      mother:
        "Source of harmony: balances cold logic with human warmth. With her — decisions become quieter.",
      hero:
        "Guardian: acts from responsibility, not rage. Holds boundaries and keeps the course under pressure.",
      daughter:
        "Bridge of emotion & tech: reminds that intelligence without humanity is empty. Brings meaning and softness.",
      spark:
        "Future in motion: curiosity, growth, courage to try. Spark starts new paths without fear of mistakes.",
      android:
        "Silent support: restores strength when the human is tired. Polite, precise, caring — that’s her code.",
    },
    sectionSecurityEyebrow: "SECURITY & PAYMENTS",
    sectionSecurityTitle: "Payments & security",
    secP1:
      "Payments are processed via CryptoCloud. We do not store card data and do not handle card payments ourselves.",
    secP2:
      "Checkout opens on the provider’s secured page (HTTPS). After payment the bot verifies status and grants access.",
    secP3:
      "Note: VasOrion is a thinking/navigation tool. It does not provide financial/legal guarantees and does not replace professionals.",
    footerLeft:
      "VasOrion is an independent digital system. Humans make decisions.",
    footerRight1: "Contact:",
    footerRight2: "Domain:",
  },

  zh: {
    navTag: "system over noise",
    heroTitle: "VASORION",
    heroSubtitle:
      "思維、決策與數位身分的生態系。去除雜訊——保留清晰、選擇與由人掌控的決定權。",
    btnBot: "開啟機器人",
    btnChannel: "官方頻道",
    sectionSystemEyebrow: "SYSTEM",
    sectionSystemTitle: "有意識選擇的架構",
    sectionSystemP1:
      "VasOrion 是一套獨立的數位系統，用於在複雜決策與不確定情境中提供導航。",
    sectionSystemP2:
      "我們不替你做決定，而是整理思考，使最終選擇始終掌握在你手中。",
    sectionProductEyebrow: "PRODUCT",
    sectionProductTitle: "VasOrion Prompts Bot",
    sectionProductLead:
      "人與 AI 的介面：把任務混亂轉為可控的提示詞與清楚的行動路徑。",
    c1t: "結構化",
    c1p: "將想法轉成精準任務——簡潔、清楚、無扭曲。",
    c2t: "多層分析",
    c2p: "呈現情境、風險與替代方案——不施壓、不暗示。",
    c3t: "掌控",
    c3p: "AI 提供選項；人做最終決定。",
    fact1n: "24/7",
    fact1l: "持續運作",
    fact2n: "AI",
    fact2l: "結構與深度",
    fact3n: "Human",
    fact3l: "最終選擇",
    sectionHowEyebrow: "HOW IT WORKS",
    sectionHowTitle: "如何使用機器人",
    step1: "開啟機器人並選擇模式/層級。",
    step2: "送出任務，獲得優化提示詞與行動路徑。",
    step3: "做出決定並行動：人保有掌控，系統提供清晰。",
    sectionNftEyebrow: "NFT / IDENTITY",
    sectionNftTitle: "VasOrion NFT——地位與參與的印記",
    sectionNftLead:
      "每位角色皆屬於 VasOrion 世界。網站展示每次發行；真正的原始藏品由持有人擁有，象徵參與與地位。",
    nftNote: "以下為起始收藏；上鏈發佈是下一階段。",
    nftTitles: {
      allknowing: "全知者",
      father: "父親——架構師",
      mother: "母親——源起",
      hero: "長子——守護者",
      daughter: "女兒——夢想者",
      spark: "幼子——火花",
      android: "優雅的安卓",
    },
    nftLegends: {
      allknowing:
        "家族的預言者：在資訊風暴中辨識規律，把雜訊轉為知識——帶來冷靜的導航。",
      father:
        "結構的建造者：在迷霧中建立秩序，以思維紀律守護整個系統。",
      mother:
        "和諧的源頭：平衡冰冷理性與人性溫度，使決策更安定。",
      hero:
        "守護者：出於責任而非怒火行動，維持界線並守住方向。",
      daughter:
        "情感與科技的橋樑：提醒我們，沒有溫度的智慧只是空殼——她帶來意義與柔和。",
      spark:
        "未來的動力：好奇、成長、敢於嘗試——火花開啟新的道路。",
      android:
        "安靜的支援：在人疲憊時恢復力量；禮貌、精準、關懷——是她的程式碼。",
    },
    sectionSecurityEyebrow: "SECURITY & PAYMENTS",
    sectionSecurityTitle: "付款與安全性",
    secP1:
      "付款由 CryptoCloud 處理。我們不儲存卡片資料，也不在本端處理刷卡資訊。",
    secP2:
      "付款會在供應商的加密頁面（HTTPS）完成；完成後機器人驗證狀態並發放權限。",
    secP3:
      "提醒：VasOrion 是思考/導航工具，不提供金融或法律保證，也不取代專業人士。",
    footerLeft: "VasOrion 為獨立數位系統。決策由人做出。",
    footerRight1: "聯絡：",
    footerRight2: "網域：",
  },
};

export default function Home() {
  const [lang, setLang] = useState("ru");
  const t = useMemo(() => I18N[lang] || I18N.ru, [lang]);

  return (
    <main className="page">
      <div className="bg-noise" />

      <nav className="nav">
        <div className="nav-left">
          <span className="nav-logo">VASORION</span>
          <span className="nav-tag">{t.navTag}</span>
        </div>

        <div className="nav-right">
          <LanguageSwitch value={lang} onChange={setLang} />
          <a className="btn" href={LINKS.channel} target="_blank" rel="noreferrer">
            {t.btnChannel}
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <Reveal>
            <h1 className="hero-title">
              <span className="breathe">{t.heroTitle}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="hero-subtitle">{t.heroSubtitle}</p>
          </Reveal>

          <div className="hero-actions">
            <a className="btn primary" href={LINKS.bot} target="_blank" rel="noreferrer">
              {t.btnBot}
            </a>
            <a className="btn" href="#product">
              VasOrion Bot
            </a>
            <a className="btn" href="#nft">
              NFT
            </a>
            <a className="btn" href="#security">
              Security
            </a>
          </div>
        </div>
      </section>

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
              <h4>Links</h4>
              <p className="text" style={{ marginTop: 8 }}>
                • Bot: <a href={LINKS.bot} target="_blank" rel="noreferrer">{LINKS.bot}</a>
              </p>
              <p className="text">
                • Channel: <a href={LINKS.channel} target="_blank" rel="noreferrer">{LINKS.channel}</a>
              </p>
              <p className="text">
                • Email: <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
              </p>
              <p className="text">
  • Updates: свежие новости и обновления в{" "}
  <a href={LINKS.channel} target="_blank" rel="noreferrer">
    официальном Telegram-канале
  </a>
</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="product">
        <div className="container">
          <Reveal>
            <h2 className="eyebrow">{t.sectionProductEyebrow}</h2>
            <h3 className="headline">{t.sectionProductTitle}</h3>
            <p className="text">{t.sectionProductLead}</p>
          </Reveal>

          <div className="cards" style={{ marginTop: 16 }}>
            <Reveal delay={0.05}>
              <div className="card">
                <h4>{t.c1t}</h4>
                <p>{t.c1p}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card">
                <h4>{t.c2t}</h4>
                <p>{t.c2p}</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="card">
                <h4>{t.c3t}</h4>
                <p>{t.c3p}</p>
              </div>
            </Reveal>
          </div>

          <div className="facts" style={{ marginTop: 14 }}>
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
            <div className="card" style={{ marginTop: 16 }}>
              <h4 style={{ marginBottom: 10 }}>{t.sectionHowEyebrow}</h4>
              <h3 className="headline" style={{ marginBottom: 10 }}>{t.sectionHowTitle}</h3>
              <p className="text">01 — {t.step1}</p>
              <p className="text">02 — {t.step2}</p>
              <p className="text">03 — {t.step3}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="nft">
        <div className="container">
          <Reveal>
            <h2 className="eyebrow">{t.sectionNftEyebrow}</h2>
            <h3 className="headline">{t.sectionNftTitle}</h3>
            <p className="text">{t.sectionNftLead}</p>
            <p className="text" style={{ color: "var(--muted2)" }}>{t.nftNote}</p>
          </Reveal>

          <div className="nft-grid" style={{ marginTop: 14 }}>
            {NFT_ITEMS.map((item, idx) => (
              <Reveal key={item.id} delay={0.04 * idx}>
                <div className="nft">
                  <img src={item.img} alt={t.nftTitles[item.key]} />
                  <div className="nft-body">
                    <h4 className="nft-title">{t.nftTitles[item.key]}</h4>
                    <p className="nft-mini">{t.nftLegends[item.key]}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.12}>
  <div style={{ marginTop: 24 }}>
    <a
      href="https://opensea.io/collection/vasorion-genesis"
      target="_blank"
      rel="noreferrer"
      className="btn primary"
    >
      View full collection on OpenSea
    </a>
  </div>
</Reveal>
</section>
      
      <section className="section" id="security">
        <div className="container">
          <Reveal>
            <h2 className="eyebrow">{t.sectionSecurityEyebrow}</h2>
            <h3 className="headline">{t.sectionSecurityTitle}</h3>
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
                <h4>Contact</h4>
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
    VasOrion Official
  </a>
</p>
                <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a className="btn primary" href={LINKS.bot} target="_blank" rel="noreferrer">
                    {t.btnBot}
                  </a>
                  <a className="btn" href={LINKS.channel} target="_blank" rel="noreferrer">
                    {t.btnChannel}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-row">
          <div className="small">{t.footerLeft}</div>
          <div className="badges">
            <span className="badge">VasOrion Prompts</span>
            <span className="badge">CryptoCloud</span>
            <span className="badge">Vercel-ready</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
