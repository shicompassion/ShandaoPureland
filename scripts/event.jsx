
const { useState, useContext } = React;

window.EventPage = function EventPage() {
  const { setPage } = useContext(window.NavContext);
  const [formData, setFormData] = useState({ name:'', phone:'', email:'', years:'', exp:'new', notes:'', consent:false });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const schedule = [
    { time: '寅時 · 04:00', title: '晨起　盥洗', body: '梆響即起，整肅威儀，輕聲至大殿。', highlight: false },
    { time: '卯時 · 05:00', title: '晨課　禮拜', body: '禮《彌陀讚》、誦《阿彌陀經》一卷、稱名一千聲。', highlight: false },
    { time: '辰時 · 07:00', title: '用齋　出坡', body: '過堂用齋，食存五觀；齋畢任職出坡，灑掃殿堂。', highlight: false },
    { time: '巳時 · 09:00', title: '正行　念佛', body: '繞佛、靜念、拜佛交替進行，晝夜不絕，以一句彌陀聖號貫通始終。', highlight: true },
    { time: '午時 · 12:00', title: '過堂　午休', body: '過堂用齋後，短時止靜養息，再入共修。', highlight: false },
    { time: '未時 · 14:00', title: '開示　問答', body: '法師每日依《觀經疏》次第開示四十分鐘，餘為問答釋疑之時。', highlight: true },
    { time: '酉時 · 18:00', title: '晚課　禮懺', body: '晚課禮誦《往生禮讚偈》，懺悔發願迴向。', highlight: false },
    { time: '亥時 · 22:00', title: '止靜　安眠', body: '止語熄燈，保持正念入眠。', highlight: false },
  ];

  const guidelines = [
    { num:'一', title:'所需攜帶', items:['海青、縵衣 (若有)','個人盥洗用品、毛巾','輕便盤坐衣物，以深色素面為宜','念珠、個人常用藥品','個人茶杯　惜福愛物'] },
    { num:'二', title:'共修規約', items:['全程止語，除法師開示與問答時段外一律禁言','手機請於報到時繳交　結束後歸還','依時作息，不得獨自行動或擅自離道場','飲食過堂，食存五觀　不得揀擇','威儀整肅　互相禮讓'] },
    { num:'三', title:'費用方式', items:['共修無收費　隨喜護持道場','食宿一切由道場護持','歡迎發心護持，成就道場　利益眾生','護持收據　可開立慈善捐贈證明','凡護持者　皆迴向一切眾生同生淨土'] },
  ];

  function validate() {
    const e = {};
    if (!formData.name.trim()) e.name = true;
    if (!formData.phone.trim()) e.phone = true;
    if (!formData.consent) e.consent = true;
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  }

  return (
    <>
      {/* Event Hero */}
      <section className="event-hero">
        <div className="container">
          <div className="crumb">
            <a onClick={() => setPage('home')} style={{cursor:'pointer'}}>首頁</a>
            <span className="crumb-sep">／</span>
            <span>春季念佛共修</span>
          </div>
          <div className="event-hero-grid">
            <div className="event-hero-text">
              <div className="event-status">
                <span className="status-dot"></span>
                <span>報名開放中　Registration Open</span>
              </div>
              <h1>春季念佛共修<br/><span className="en-sub">Spring Nianfo Seven-day Retreat</span></h1>
              <p className="event-lead">謹訂於丙午年四月朔日，啟建七日念佛共修。以善導大師《觀經疏》之專修正行為依歸，晝夜六時，稱念「南無阿彌陀佛」聖號，願與十方大德共期淨土。</p>
              <div className="event-hero-meta">
                {[['日期','2026　5／1　—　5／7'],['時辰','晝夜六時　全程止靜'],['場所','本道場　大殿'],['額數','四眾弟子　限額卌位']].map(([l,v]) => (
                  <div className="ehm-item" key={l}>
                    <div className="ehm-l">{l}</div>
                    <div className="ehm-v">{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <aside className="event-card">
              <div className="event-card-inner">
                <div className="card-seal">隨</div>
                <div className="card-row"><span>報名截止</span><strong>4／20</strong></div>
                <div className="card-row"><span>現有席位</span><strong className="accent-red">餘 6 位</strong></div>
                <div className="card-progress"><div className="pfill" style={{width:'85%'}}></div></div>
                <div className="card-row small"><span>34 已報名 · 40 總額</span></div>
                <a href="#register" className="btn-gold full"><span>隨喜報名</span>
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M1 5h14m0 0L11 1m4 4l-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                </a>
                <div className="card-contact"><div>若有疑問　敬請來電</div><a href="tel:+88655901297">(05) 590-1297</a></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="event-section">
        <div className="container">
          <window.SectionHead eyebrow="Daily Schedule" title="時辰安排" subtitle="The Six-period Day" />
          <div className="schedule">
            {schedule.map((s, i) => (
              <div className="sch-row" key={i}>
                <div className="sch-time">{s.time}</div>
                <div className={`sch-mark${s.highlight ? ' highlight' : ''}`}></div>
                <div className="sch-body"><h4>{s.title}</h4><p>{s.body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="event-section guidelines">
        <div className="container">
          <window.SectionHead eyebrow="Retreat Guidelines" title="共修須知" subtitle="What to bring, how to behave" />
          <div className="guide-grid">
            {guidelines.map(g => (
              <div className="guide-col" key={g.num}>
                <h4><span className="num">{g.num}</span>{g.title}</h4>
                <ul>{g.items.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
};
