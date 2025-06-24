// ページ読み込み後に動かすコード
document.addEventListener('DOMContentLoaded', () => {
  // FullCalendar の初期化
  const calendar = new FullCalendar.Calendar(
    document.getElementById('calendarContainer'),
    { initialView: 'dayGridMonth', locale: 'ja' }
  );
  calendar.render();

  // localStorage から読み込んで一覧・カレンダーを描画する関数を呼び出す
  renderSchedules();
  updateCalendarEvents();

  // 保存ボタンのイベント登録
  document.getElementById('saveBtn').addEventListener('click', saveLive);
});
