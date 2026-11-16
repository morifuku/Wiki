// 幅の広い PNG (prep.py が img.zoomable を付ける) をクリックしたら、拡大表示をポップアップする。
// 背景・画像のクリックか Esc で閉じる。Sphinx が縮小画像を元画像へのリンクで包んでも、そのリンクには飛ばない。
document.addEventListener("click", (ev) => {
  const img = ev.target.closest("img.zoomable");
  if (!img) return;
  ev.preventDefault();
  const dlg = document.createElement("dialog");
  dlg.className = "zoom-dialog";
  const big = document.createElement("img");
  big.src = img.currentSrc || img.src;
  big.alt = img.alt;
  dlg.append(big);
  dlg.addEventListener("click", () => dlg.close());
  dlg.addEventListener("close", () => dlg.remove());
  document.body.append(dlg);
  dlg.showModal();
});
