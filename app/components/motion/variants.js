export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const stagger = (delay = 0.05) => ({
  visible: { transition: { staggerChildren: delay, delayChildren: 0 } },
});

export const viewport = { once: true, margin: "-60px", amount: 0.2 };

export const transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };
