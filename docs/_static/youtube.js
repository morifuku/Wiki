// YouTube サムネール (prep.py が生成する a.yt-embed) をクリックしたら、その場でプレーヤーに差し替えて再生する。
// クリックするまで YouTube には接続しない。JS が無効ならリンクとして YouTube に飛ぶ。
document.addEventListener("click", (ev) => {
  const a = ev.target.closest("a.yt-embed");
  if (!a) return;
  ev.preventDefault();
  const iframe = document.createElement("iframe");
  iframe.className = "yt-frame";
  iframe.src = `https://www.youtube-nocookie.com/embed/${a.dataset.yt}?autoplay=1&rel=0`;
  iframe.title = a.querySelector("img")?.alt || "YouTube";
  iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
  iframe.allowFullscreen = true;
  a.replaceWith(iframe);
});
