startBtn.onclick = function() {
  // --- サービス終了告知モーダル ---
  let closureModal = document.getElementById('closureModal');
  if (!closureModal) {
    closureModal = document.createElement('div');
    closureModal.id = 'closureModal';
    closureModal.style.position = 'fixed';
    closureModal.style.left = '50%';
    closureModal.style.top = '50%';
    closureModal.style.transform = 'translate(-50%, -50%)';
    closureModal.style.width = 'min(400px, 92vw)';
    closureModal.style.background = 'rgba(10,14,28,0.97)';
    closureModal.style.color = '#fff';
    closureModal.style.border = '1px solid rgba(255,255,255,0.22)';
    closureModal.style.borderRadius = '14px';
    closureModal.style.padding = '28px 24px 22px';
    closureModal.style.zIndex = '99999';
    closureModal.style.textAlign = 'center';
    closureModal.style.boxShadow = '0 8px 40px rgba(0,0,0,0.75)';
    closureModal.innerHTML = `
      <div style="font-size:2rem;margin-bottom:12px;">🌸</div>
      <div style="font-weight:800;font-size:15px;line-height:1.8;letter-spacing:0.04em;">
        4月5日23:59にて公開を終了しました。<br>
        プレイしていただきありがとうございました！
      </div>
      <button id="closureCloseBtn"
        style="margin-top:20px;padding:8px 28px;background:#6366f1;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:700;">
        とじる
      </button>
    `;
    document.body.appendChild(closureModal);
    closureModal.querySelector('#closureCloseBtn').onclick = () => {
      closureModal.style.display = 'none';
    };
  }
  closureModal.style.display = 'block';
};
