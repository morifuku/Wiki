// 幅の広い PNG (prep.py が img.zoomable を付ける) をクリックしたら、拡大表示をポップアップする。
// 右上の × ボタン、背景・画像のクリック、Esc のどれでも閉じる。
document.addEventListener("click", (ev) => {
  const img = ev.target.closest("img.zoomable");
  if (!img) return;
  ev.preventDefault();
  const dlg = document.createElement("dialog");
  dlg.className = "zoom-dialog";
  const close = document.createElement("button");
  close.type = "button";
  close.className = "zoom-close";
  close.textContent = "×";
  close.setAttribute("aria-label", "閉じる");
  const big = document.createElement("img");
  big.src = img.currentSrc || img.src;
  big.alt = img.alt;
  dlg.append(close, big);
  dlg.addEventListener("click", () => dlg.close());
  dlg.addEventListener("close", () => dlg.remove());
  document.body.append(dlg);
  dlg.showModal();
});
