"use client";

import { useEffect, useState } from "react";

export default function LanguageSwitch({ value, onChange }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("vasorion_lang");
    if (saved && saved !== value) onChange(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("vasorion_lang", value);
  }, [value, mounted]);

  return (
    <div className="lang">
      <button
        className={`lang-btn ${value === "ru" ? "active" : ""}`}
        onClick={() => onChange("ru")}
        type="button"
      >
        RU
      </button>
      <button
        className={`lang-btn ${value === "en" ? "active" : ""}`}
        onClick={() => onChange("en")}
        type="button"
      >
        EN
      </button>
      <button
        className={`lang-btn ${value === "zh" ? "active" : ""}`}
        onClick={() => onChange("zh")}
        type="button"
      >
        中文
      </button>
    </div>
  );
}