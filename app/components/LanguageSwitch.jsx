"use client";

import { useEffect } from "react";

export default function LanguageSwitch({ value, onChange }) {
  useEffect(() => {
    try {
      document.documentElement.lang = value;
      localStorage.setItem("vasorion_lang", value);
    } catch {}
  }, [value]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("vasorion_lang");
      if (saved && saved !== value) onChange(saved);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const makeBtn = (code, label) => (
    <button
      key={code}
      className={`lang-btn ${value === code ? "active" : ""}`}
      onClick={() => onChange(code)}
      type="button"
      aria-label={`Switch language to ${code}`}
      aria-pressed={value === code}
    >
      {label}
    </button>
  );

  return (
    <div className="lang" role="group" aria-label="Language switch">
      {makeBtn("ru", "RU")}
      {makeBtn("en", "EN")}
      {makeBtn("zh", "中文")}
    </div>
  );
}
