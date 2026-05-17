
const { useState, useContext, useMemo } = React;

const ARCHIVE_ITEMS = [
  { id:1, cat:'sutra',   title:'觀無量壽佛經疏',         sub:'Commentary on the Contemplation Sūtra',           tag:'經典', date:'2026-04-15', author:'善導大師' },
  { id:2, cat:'lecture', title:'《觀無量壽佛經》系列講座', sub:'Lecture Series — Video & Audio',                  tag:'開示', date:'2026-04-10', author:'本道場'   },
  { id:3, cat:'audio',   title:'念佛共修　錄音',          sub:'Group Nianfo Practice Recording',                tag:'音聲', date:'2026-03-20', author:'共修錄音'  },
  { id:4, cat:'book',    title:'《阿彌陀經》講記',        sub:'Commentary on the Amitābha Sūtra',               tag:'書籍', date:'2026-01-05', author:'本道場'   },
  { id:5, cat:'sutra',   title:'往生禮讚偈　注疏',        sub:'Annotated Verses of Praise for Rebirth',         tag:'經典', date:'2025-12-15', author:'善導大師' },
  { id:6, cat:'lecture', title:'淨土三經概說',            sub:'Introduction to the Three Pure Land Sūtras',     tag:'開示', date:'2025-11-28', author:'本道場'   },
  { id:7, cat:'audio',   title:'朝課　晨誦錄音',          sub:'Morning Liturgy Audio',                          tag:'音聲', date:'2025-10-12', author:'共修錄音'  },
  { id:8, cat:'book',    title:'二河白道　簡釋',          sub:'Brief Commentary on Two Rivers & White Path',    tag:'書籍', date:'2025-09-08', author:'本道場'   },
  { id:9, cat:'lecture', title:'念佛法要　十講',          sub:'Ten Lectures on the Essentials of Nianfo',       tag:'開示', date:'2025-07-30', author:'本道場'   },
  { id:10,cat:'sutra',   title:'無量壽經　講記',          sub:'Commentary on the Larger Sukhāvatīvyūha',        tag:'經典', date:'2025-06-20', author:'本道場'   },
  { id:11,cat:'audio',   title:'晚課　禮懺錄音',          sub:'Evening Liturgy & Repentance Audio',             tag:'音聲', date:'2025-05-15', author:'共修錄音'  },
  { id:12,cat:'book',    title:'淨土宗祖師語錄',          sub:'Sayings of the Pure Land Patriarchs',            tag:'書籍', date:'2025-04-01', author:'本道場'   },
];

const COLLECTION = [
  { num:'卷 一', title:'觀無量壽佛經疏', sub:'Four-fascicle Commentary on the Contemplation Sūtra', meta:'四卷 · 唐代' },
  { num:'卷 二', title:'往生禮讚偈',     sub:'Verses of Praise for Rebirth',                       meta:'一卷 · 禮讚' },
  { num:'卷 三', title:'法事讚',         sub:'Praise Liturgy for Dharma Services',                  meta:'二卷 · 儀軌' },
  { num:'卷 四', title:'般舟讚',         sub:'Verses of the Pratyutpanna Samādhi',                  meta:'一卷 · 偈頌' },
  { num:'卷 五', title:'觀念法門',       sub:'Gateway of Contemplation and Mindfulness',             meta:'一卷 · 法要' },
];

const CATS = [
  { val:'all', label:'全部' },
  { val:'sutra', label:'經典註釋' },
  { val:'lecture', label:'開示講記' },
  { val:'audio', label:'音聲法寶' },
  { val:'book', label:'結緣書籍' },
];

const CAT_ICONS = {
  sutra:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8"><path d="M4 6 h16 v12 h-16 z"/><path d="M12 6 v12"/><path d="M6 9 h4 M6 12 h4 M6 15 h4 M14 9 h4 M14 12 h4 M14 15 h4"/></svg>,
  lecture: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8"><path d="M5 4 v16 l3-2 l4 2 l4-2 l3 2 v-16 l-3 2 l-4-2 l-4 2 z"/><path d="M9 9 h6 M9 12 h6 M9 15 h4"/></svg>,
  audio:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 4v2 M12 18v2 M4 12h2 M18 12h2"/></svg>,
  book:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>,
};

window.ArchivePage = function ArchivePage() {
  const { setPage } = useContext(window.NavContext);
  const [cat, setCat] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('date');

  const filtered = useMemo(() => {
    let items = ARCHIVE_ITEMS;
    if (cat !== 'all') items = items.filter(i => i.cat === cat);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      items = items.filter(i =>
        i.title.toLowerCase().includes(q) ||
        i.sub.toLowerCase().includes(q) ||
        i.author.toLowerCase().includes(q)
      );
    }
    if (sort === 'date') items = [...items].sort((a,b) => b.date.localeCompare(a.date));
    else items = [...items].sort((a,b) => a.title.localeCompare(b.title));
    return items;
  }, [cat, search, sort]);

  return (
    <>
      {/* Archive Hero */}
      <section className="page-hero archive-hero">
        <div className="container">
          <div className="crumb">
            <a onClick={() => setPage('home')} style={{cursor:'pointer'}}>首頁</a>
            <span className="crumb-sep">／</span>
            <span>法寶結緣</span>
          </div>
          <div className="page-hero-grid">
            <div className="page-hero-text">
              <span className="eyebrow">Dharma Affinity</span>
              <h1>法寶結緣<br/><span className="en-sub">Dharma Affinity of Master Shandao</span></h1>
              <p className="page-lead">歷年講記、經典註釋、念佛法要、音聲法寶　皆收錄於此。所有法寶免費結緣流通，敬請善自保存、廣為流通。</p>
              <div className="archive-stats">
                <div className="stat"><span className="n">138</span><span className="l">篇　開示講記</span></div>
                <div className="stat"><span className="n">42</span><span className="l">部　影音法寶</span></div>
                <div className="stat"><span className="n">23</span><span className="l">冊　結緣書籍</span></div>
              </div>
            </div>
            <div className="page-hero-side">
              <div className="seal">
                <svg viewBox="0 0 120 120" fill="none">
                  <rect x="6" y="6" width="108" height="108" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                  <rect x="10" y="10" width="100" height="100" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
                  <g transform="translate(60,60)" fill="currentColor">
                    <text x="0" y="-18" textAnchor="middle" fontFamily="Noto Serif TC" fontSize="20" fontWeight="500">大</text>
                    <text x="0" y="10"  textAnchor="middle" fontFamily="Noto Serif TC" fontSize="20" fontWeight="500">悲</text>
                    <text x="0" y="38" textAnchor="middle" fontFamily="Noto Serif TC" fontSize="20" fontWeight="500">精</text>
                  </g>
                </svg>
                <div className="seal-label">DABEI · 印</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="archive-filters">
        <div className="container">
          <div className="filters-row">
            <div className="filter-group">
              {CATS.map(c => (
                <button key={c.val} className={`filter${cat === c.val ? ' active' : ''}`} onClick={() => setCat(c.val)}>{c.label}</button>
              ))}
            </div>
            <div className="filter-tools">
              <div className="search">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>
                <input type="search" placeholder="搜尋　經題、法師、關鍵字…" value={search} onChange={e => setSearch(e.target.value)} />
              </div>
              <div className="sort">
                <span>排序</span>
                <button className={`sort-opt${sort==='date'?' active':''}`} onClick={()=>setSort('date')}>日期</button>
                <span className="divider"></span>
                <button className={`sort-opt${sort==='title'?' active':''}`} onClick={()=>setSort('title')}>經題</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="archive-section">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="archive-empty">
              <div className="empty-glyph">
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20 6 C15 13 15 20 20 26 C25 20 25 13 20 6 Z"/>
                  <path d="M9 17 C9 25 14 31 20 31 C26 31 31 25 31 17"/>
                </svg>
              </div>
              <p>無相應之法寶　願誠敬再尋</p>
              <span className="empty-en">No matching entries — try another keyword.</span>
            </div>
          ) : (
            <div className="archive-grid">
              {filtered.map(item => (
                <div className="archive-card" key={item.id}>
                  <div className="ac-icon">{CAT_ICONS[item.cat]}</div>
                  <div className="ac-body">
                    <div className="ac-tag">{item.tag}</div>
                    <h3 className="ac-title">{item.title}</h3>
                    <p className="ac-sub">{item.sub}</p>
                    <div className="ac-meta">
                      <span>{item.author}</span>
                      <span>{item.date.replace(/-/g, '.')}</span>
                    </div>
                  </div>
                  <div className="ac-actions">
                    <button className="ac-btn">閱覽</button>
                    <button className="ac-btn">索取</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Collection */}
      <section className="collection-section">
        <div className="container">
          <window.SectionHead eyebrow="Featured Collection" title="善導大師全集" subtitle="Complete Works of Master Shandao" />
          <div className="collection-grid">
            {COLLECTION.map(c => (
              <div className="collection-item" key={c.num}>
                <div className="col-num">{c.num}</div>
                <div className="col-title">{c.title}</div>
                <div className="col-sub">{c.sub}</div>
                <div className="col-meta">{c.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
