// 左ペイン「このページの目次」で、いま読んでいる見出しを強調する
document.addEventListener("DOMContentLoaded", () => {
  const links = [...document.querySelectorAll(".pagetoc a[href^='#']")].filter((a) => a.hash.length > 1);
  const sections = links
    .map((a) => document.getElementById(decodeURIComponent(a.hash.slice(1))))
    .filter(Boolean);
  if (!sections.length) return;
  const headerH = document.querySelector(".site-header")?.offsetHeight || 0;
  const update = () => {
    let current = sections[0];
    for (const s of sections) {
      if (s.getBoundingClientRect().top - headerH <= 16) current = s;
    }
    links.forEach((a) => a.classList.toggle("active", decodeURIComponent(a.hash.slice(1)) === current.id));
  };
  addEventListener("scroll", update, { passive: true });
  update();
});
