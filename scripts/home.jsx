
const { useState, useContext } = React;

window.HomePage = function HomePage() {
  const t = window.useT();
  const { setPage } = useContext(window.NavContext);
  const [openQA, setOpenQA] = useState(null);

  const newsItems = [
    { date: '2026 · 04 · 15', tag: t('news.tag.teaching'), hot: false, title: t('news.1.title'), excerpt: t('news.1.excerpt'), kind: 'teachings', page: 'archive' },
    { date: '2026 · 03 · 28', tag: t('news.tag.event'), hot: true,  title: t('news.2.title'), excerpt: t('news.2.excerpt'), kind: 'retreat', page: 'event' },
    { date: '2026 · 02 · 10', tag: t('news.tag.event'), hot: false, title: t('news.3.title'), excerpt: t('news.3.excerpt'), kind: 'ceremony', page: 'event' },
    { date: '2026 · 01 · 05', tag: t('news.tag.scripture'), hot: false, title: t('news.4.title'), excerpt: t('news.4.excerpt'), kind: 'scripture', page: 'archive' },
  ];

  const qaItems = [
    { date: '2026.04.16', q: t('qa.1.q'), p: t('qa.1.p'), a: t('qa.1.a') },
    { date: '2026.04.13', q: t('qa.2.q'), p: t('qa.2.p'), a: t('qa.2.a') },
    { date: '2026.04.09', q: t('qa.3.q'), p: t('qa.3.p'), a: t('qa.3.a') },
    { date: '2026.04.06', q: t('qa.4.q'), p: t('qa.4.p'), a: t('qa.4.a') },
  ];

  const heroTitle = t('hero.title').split('\n');
  const affTitle = t('aff.title').split('\n');
  const affBody = t('aff.body').split('\n');

  return (
    <>
      {/* Hero */}
      <section className="hero" id="master">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="small-label">
              <span className="cn">{t('hero.label.cn')}</span>
              <span className="dot">·</span>
              <span>{t('hero.label.en')}</span>
            </div>
            <h1>{heroTitle[0]}<br/>{heroTitle[1]}</h1>
            <div className="dharma-quote">
              <p>
                {t('hero.q1')}<br/>
                「<span className="accent">{t('hero.q1a')}</span>」<br/>
                {t('hero.q2')}<br/>
                「<span className="accent">{t('hero.q2a')}</span>」
              </p>
              <cite>{t('hero.cite')}</cite>
            </div>
            <div className="hero-meta">
              <div className="meta-item">
                <div className="meta-num">唐貞元</div>
                <div className="meta-label">{t('hero.meta.lineage')}</div>
              </div>
              <div className="meta-sep"></div>
              <div className="meta-item">
                <div className="meta-num">七日</div>
                <div className="meta-label">{t('hero.meta.retreat')}</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="assets/hero-buddhas.jpg" alt="西方三聖" />
            <div className="hero-image-caption">{t('hero.img.caption')}</div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="news-section" id="news">
        <div className="container">
          <window.SectionHead eyebrow="Latest News" title={t('news.title')} subtitle={t('news.subtitle')} />
          <div className="news-grid">
            {newsItems.map((item, i) => (
              <a key={i} className="news-card" onClick={() => setPage(item.page)} style={{cursor:'pointer'}}>
                <div className="news-arch" data-kind={item.kind}></div>
                <div className="news-body">
                  <div className="news-date">{item.date}</div>
                  <div className={`news-tag${item.hot ? ' hot' : ''}`}>{item.tag}</div>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-excerpt">{item.excerpt}</p>
                  <span className="news-more">閱讀全文 →</span>
                </div>
              </a>
            ))}
          </div>
          <div className="view-all">
            <a onClick={() => setPage('archive')} style={{cursor:'pointer'}}>{t('news.viewall')}</a>
          </div>
        </div>
      </section>

      {/* Q&A */}
      <section className="qa-section" id="qa">
        <div className="container">
          <window.SectionHead eyebrow="Dharma Q & A" title={t('qa.title')} subtitle={t('qa.subtitle')} />
          <div className="qa-list">
            {qaItems.map((item, i) => (
              <div key={i} className={`qa-item${openQA === i ? ' open' : ''}`}>
                <div className="qa-row" onClick={() => setOpenQA(openQA === i ? null : i)}>
                  <div className="qa-date">{item.date}</div>
                  <div className="qa-content">
                    <div className="qa-q-mark">問</div>
                    <h3>{item.q}</h3>
                    {openQA !== i && <p className="qa-preview">{item.p}</p>}
                  </div>
                  <button className="qa-arrow" aria-label="Expand">
                    <svg viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <div className="qa-answer" style={{maxHeight: openQA === i ? '400px' : '0', paddingBottom: openQA === i ? '32px' : '0'}}>
                  <div className="qa-a-mark">答</div>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all">
            <a href="#">{t('qa.viewall')}</a>
          </div>
        </div>
      </section>


    </>
  );
};
