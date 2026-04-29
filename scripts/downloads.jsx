
const { useState, useContext } = React;

// ── Data ──────────────────────────────────────────────────────────────────────
// Each file string = "title https://..."  Parse into { title, url }
function parseFile(str) {
  const idx = str.indexOf('https://');
  if (idx === -1) return { title: str.trim(), url: null };
  return { title: str.slice(0, idx).trim(), url: str.slice(idx).trim() };
}

const DOWNLOADS = [
  {
    a: '《往生禮讚》共修',
    folders: [
      {
        b: '二河白道圖及偈頌法語',
        items: [
          '二河白道圖圖檔 https://drive.google.com/file/d/1S_TeNcdVP9gDQH9dJ4lCLvTxXAsKbIO_/view?usp=drive_link',
          '偈頌法語01圖檔 https://drive.google.com/file/d/1yRdLlXDp-K6cp_9eL7RPfWxK8SLYEneR/view?usp=drive_link',
          '偈頌法語02圖檔 https://drive.google.com/file/d/1m2peOfBWB1_K25_jodY27obt3i832tC9/view?usp=drive_link',
          '偈頌法語03圖檔 https://drive.google.com/file/d/17eOsSAWQuOTX_a2ASPuf8OTFheE4q2sd/view?usp=drive_link',
          '偈頌法語04圖檔 https://drive.google.com/file/d/1SpHfOkC4lYFpKKiaXJFB_ah9ImHmaM12/view?usp=drive_link',
        ],
      },
      {
        b: '《往生禮讚》功德利益－成慈法師宣講',
        items: [
          '1.《往生禮讚》功德利益-第1集音檔 https://drive.google.com/file/d/1yluKMpsXOHUXFGXcg7wGehPt6rkxfguz/view?usp=drive_link',
          '2.《往生禮讚》功德利益-第2集音檔 https://drive.google.com/file/d/1-mPgVWxnKFK5QG_qE3UNLbuuo9yJkTt8/view?usp=drive_link',
          '3.《往生禮讚》功德利益-第3集音檔 https://drive.google.com/file/d/1dA2721rjtPZpFRVkBh6u-6fCeeIACpbv/view?usp=drive_link',
          '《往生禮讚》課程進度表電子檔 https://drive.google.com/file/d/1MIePaw__dA4bgYEdp0CcvNSmKs2a2lM_/view?usp=drive_link',
          '《往生禮讚》功德利益-講義-第一集電子檔 https://drive.google.com/file/d/1f6g5DlcYofyTLqPKptrp3zvTOfIFbkwJ/view?usp=drive_link',
          '《往生禮讚》課本p241~244電子檔 https://drive.google.com/file/d/1PDbnMw8yk4Jg8ZwmjH8nu6rlwNVGdGUa/view?usp=drive_link',
        ],
      },
      {
        b: '《往生禮讚》－禮讚教學',
        items: [
          '20260402_大悲精舍_往生禮讚_大檔影片 https://drive.google.com/file/d/1vuuuEaOQei6G0Fg7q1aCkgtP01zQ__mY/view?usp=drive_link',
          '20260402_大悲精舍_往生禮讚_小檔影片 https://drive.google.com/file/d/1mepeIhcmXgkkdkFUD4dCqoCu5mbOe3bq/view?usp=drive_link',
        ],
      },
      {
        b: '《往生禮讚》－行門',
        items: [
          '1-第一時一彌陀十二光名（白色卡）電子檔 https://drive.google.com/file/d/1CKfZulXItt1C-lD6cf4rQq56FYGTEEdj/view?usp=drive_link',
          '3-懺悔、勸請、隨喜、迴向、發願、三皈依（粉紅色卡）電子檔 https://drive.google.com/file/d/1BuFW5O7SMfAR9b0MwKJeNnzbBX7E1FhL/view?usp=drive_link',
          '5-六時警策偈（綠色卡）電子檔 https://drive.google.com/file/d/1bFLREDAP3jMMyspBIMIjenuCOfv0-S0w/view?usp=drive_link',
          '《往生禮讚》共修流程圖檔 https://drive.google.com/file/d/1zaqtf3XaAA4-30aXqd91oab7BKAQSHDg/view?usp=drive_link',
          '《往生禮讚》共修-地鐘念佛15分鐘影片 https://drive.google.com/file/d/1lrafVInjzWzTxFQCDA00ji0XRbpEYujH/view?usp=drive_link',
        ],
        subfolders: [
          {
            c: '《往生禮讚》共修－現場錄音',
            items: [
              '12《往生禮讚》禮讚第一、二時音檔（完整）-湛淨法師帶領 https://drive.google.com/file/d/1TJS9IqfG40VRjR2PbdetPgTmS8TCUq40/view?usp=drive_link',
              '13《往生禮讚》禮讚第一、三時音檔（完整）-湛淨法師帶領 https://drive.google.com/file/d/1fb4kCLNy2-a1AQEWKEgFqSGNuw6vYfY8/view?usp=drive_link',
              '14《往生禮讚》禮讚第一、四時音檔（完整）-湛淨法師帶領 https://drive.google.com/file/d/1OYLiSXrU8CT4TEVRjE5enhE1btpHBmmz/view?usp=drive_link',
              '15《往生禮讚》禮讚第一、五時音檔（完整）-湛淨法師帶領 https://drive.google.com/file/d/1OYLiSXrU8CT4TEVRjE5enhE1btpHBmmz/view?usp=drive_link',
              '16《往生禮讚》禮讚第一、六時音檔（完整）-湛淨法師帶領 https://drive.google.com/file/d/1hqm8UEPr5Af95HR0fWsaz79dQ1qbKDNt/view?usp=drive_link',
            ],
          },
        ],
      },
      {
        b: '《往生禮讚》－成慈法師宣講',
        items: [
          '《往生禮讚》課程進度表電子檔 https://drive.google.com/file/d/1ceE3f9ARmEMMSKSCRzdjffaeJBpjpAOH/view?usp=drive_link',
          '《往生禮讚》課本電子檔 https://drive.google.com/file/d/1oh_aJuZgEZ0ZctRoiZun_ee4gEZBgLjP/view?usp=drive_link',
          '《往生禮讚》必得往生電子檔 https://drive.google.com/file/d/1csEq378X7NUBxfIygidpy6V3zY9XFrsz/view?usp=drive_link',
          '《往生禮讚》上課講義--附1至附10電子檔 https://drive.google.com/file/d/1JuksmHKhFa__NipRJVzyaX2jeVKCH41l/view?usp=drive_link',
          '01-《往生禮讚》開示-第01集音檔 https://drive.google.com/file/d/15DLVIKpnLyh18rQp29mLAxg1BPzNPCSS/view?usp=drive_link',
          '02-《往生禮讚》開示-第02集音檔 https://drive.google.com/file/d/19yc-kiW6n1_z0HxGm6srDQRFH8iG9laF/view?usp=drive_link',
          '03-《往生禮讚》開示-第03集音檔 https://drive.google.com/file/d/17M89a5zMJCUQ5Gvdnmllab66eidEJo93/view?usp=drive_link',
          '04-《往生禮讚》開示-第04集音檔 https://drive.google.com/file/d/1cf8jP12nqEwtEf9ih6ei0H9qQ-uYYBGH/view?usp=drive_link',
          '05-《往生禮讚》開示-第05集音檔 https://drive.google.com/file/d/12NB1ZvsG2ODELOKglephgOaBVtgWPQOT/view?usp=drive_link',
          '06-《往生禮讚》開示-第06集音檔 https://drive.google.com/file/d/1Crr97ViqjsBPSlwOptLyQInhBwW02kBU/view?usp=drive_link',
          '07-《往生禮讚》開示-第07集音檔 https://drive.google.com/file/d/1aeEUaDpzG3CqOV6WNJEi6S5UVouwS8Tg/view?usp=drive_link',
          '08-《往生禮讚》開示-第08集音檔 https://drive.google.com/file/d/1mADP7dJV9ghFXKbP5zox6iG6D0p9GuRb/view?usp=drive_link',
          '09-《往生禮讚》開示-第09集音檔 https://drive.google.com/file/d/1KKzK30YvcR6VbPJBc2ZdcJH_IrS3ruhr/view?usp=drive_link',
          '10-《往生禮讚》開示-第10集音檔 https://drive.google.com/file/d/14ynIuC7WZizfPMIgFZZR3KoRLGlBpd82/view?usp=drive_link',
          '11-《往生禮讚》開示-第11集音檔 https://drive.google.com/file/d/1I20X0P5tvnj7DKuYjo0a1iucNBG7EPQd/view?usp=drive_link',
          '12-《往生禮讚》開示-第12集音檔 https://drive.google.com/file/d/1VQBYX_1ExJ-LEjUGKPUk5qa5EeIRsQxr/view?usp=drive_link',
          '13-《往生禮讚》開示-第13集音檔 https://drive.google.com/file/d/1upa1xKD2-orVkz8cL6xUel2vTWBT9uFp/view?usp=drive_link',
          '14-《往生禮讚》開示-第14集音檔 https://drive.google.com/file/d/1asCL3W8umM9pqYoJRr-Uhp3V79JbSXTh/view?usp=drive_link',
          '15-《往生禮讚》開示-第15集音檔 https://drive.google.com/file/d/1Uz1v5WwbkmxeuuAEh8FQE7R0qWW43yKo/view?usp=drive_link',
          '16-《往生禮讚》開示-第16集音檔 https://drive.google.com/file/d/1zhGVjOB9jvlOyqifBeSxwytw2TDtxzJe/view?usp=drive_link',
          '17-《往生禮讚》開示-第17集音檔 https://drive.google.com/file/d/14l6cCaEH0Uu6HypVo2wZSvy0vmRkc0p5/view?usp=drive_link',
          '18-《往生禮讚》開示-第18集音檔 https://drive.google.com/file/d/1h4l48M0GCY903_Rw2MHvYB3vhjoqMLke/view?usp=drive_link',
          '19-《往生禮讚》開示-第19集音檔 https://drive.google.com/file/d/1EaJvDZty6HZNXlrjKXW_uTiS_Ik36riC/view?usp=drive_link',
          '20-《往生禮讚》開示-第20集音檔 https://drive.google.com/file/d/1ATwYsxbrsW-gU5-M2fwX0S5SadNE1Kbj/view?usp=drive_link',
          '21-《往生禮讚》開示-第21集音檔 https://drive.google.com/file/d/1D4D8QgTNaAL3W2eXU_8PIc1LET6JLtkx/view?usp=drive_link',
          '22-《往生禮讚》開示-第22集音檔 https://drive.google.com/file/d/1mCq-rywuJymLX9bKiaHQoxspYifWTMkT/view?usp=drive_link',
          '23-《往生禮讚》開示-第23集音檔 https://drive.google.com/file/d/1C3gYST0S3K4QxzOUeEuaoLWyjWV7MA-S/view?usp=drive_link',
          '24-《往生禮讚》開示-第24集音檔 https://drive.google.com/file/d/1gtdtdjEfsvOqe4nF2LTxQ-ztLPC3-5bN/view?usp=drive_link',
        ],
      },
    ],
  },
];

// ── Icons ─────────────────────────────────────────────────────────────────────
function IconFolder({ open }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" style={{width:18,height:18,flexShrink:0,color:'var(--gold-bright)'}}>
      {open
        ? <path d="M2 7h16v9a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm0 0V5a1 1 0 011-1h5l2 2h7a1 1 0 011 1v0" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        : <path d="M2 6h7l2 2h7v9a1 1 0 01-1 1H3a1 1 0 01-1-1V6z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      }
    </svg>
  );
}

function IconFile() {
  return (
    <svg viewBox="0 0 20 20" fill="none" style={{width:16,height:16,flexShrink:0,color:'var(--wood-mid)'}}>
      <path d="M5 2h7l4 4v12a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M12 2v4h4" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}

function IconLink() {
  return (
    <svg viewBox="0 0 16 16" fill="none" style={{width:14,height:14,flexShrink:0}}>
      <path d="M7 9a3 3 0 004.243.707l2-2a3 3 0 00-4.243-4.243l-1 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M9 7a3 3 0 00-4.243-.707l-2 2a3 3 0 004.243 4.243l1-1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function IconChevron({ open }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" style={{width:12,height:12,flexShrink:0,transition:'transform .3s',transform: open ? 'rotate(90deg)' : 'rotate(0deg)'}}>
      <path d="M4 2.5L8 6L4 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────
function FileItem({ str, indent = 0 }) {
  const { title, url } = parseFile(str);
  return (
    <div style={{
      display:'flex', alignItems:'center', gap:10,
      padding:'9px 16px 9px ' + (16 + indent * 24) + 'px',
      borderBottom:'1px solid var(--line)',
      background:'var(--surface-soft)',
      transition:'background .2s',
    }}
    onMouseEnter={e => e.currentTarget.style.background = 'color-mix(in srgb,var(--gold-soft) 12%,var(--surface-soft))'}
    onMouseLeave={e => e.currentTarget.style.background = 'var(--surface-soft)'}
    >
      <IconFile />
      <span style={{flex:1, fontSize:14, letterSpacing:'1px', color:'var(--ink-soft)', lineHeight:1.5}}>{title}</span>
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer" style={{
          display:'flex', alignItems:'center', gap:5,
          padding:'4px 12px', border:'1px solid var(--line)',
          fontSize:12, letterSpacing:'2px', color:'var(--wood-mid)',
          background:'var(--cream-soft)', whiteSpace:'nowrap',
          transition:'all .25s', textDecoration:'none',
        }}
        onMouseEnter={e => { e.currentTarget.style.background='var(--wood-deep)'; e.currentTarget.style.color='var(--gold-soft)'; e.currentTarget.style.borderColor='var(--wood-deep)'; }}
        onMouseLeave={e => { e.currentTarget.style.background='var(--cream-soft)'; e.currentTarget.style.color='var(--wood-mid)'; e.currentTarget.style.borderColor='var(--line)'; }}
        >
          <IconLink />
          前往雲端
        </a>
      )}
    </div>
  );
}

function SubFolder({ data, indent = 1 }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          display:'flex', alignItems:'center', gap:10,
          padding:'10px 16px 10px ' + (16 + indent * 24) + 'px',
          borderBottom:'1px solid var(--line)',
          background: open ? 'color-mix(in srgb,var(--gold-soft) 18%,var(--cream-soft))' : 'var(--cream-soft)',
          cursor:'pointer', transition:'background .25s',
        }}
        onMouseEnter={e => { if(!open) e.currentTarget.style.background='color-mix(in srgb,var(--gold-soft) 10%,var(--cream-soft))'; }}
        onMouseLeave={e => { if(!open) e.currentTarget.style.background='var(--cream-soft)'; }}
      >
        <IconFolder open={open} />
        <span style={{flex:1, fontFamily:"'Noto Serif TC',serif", fontSize:14, letterSpacing:'2px', color:'var(--wood-deep)', fontWeight:500}}>{data.c}</span>
        <span style={{fontSize:12, letterSpacing:'2px', color:'var(--wood-mid)', marginRight:8}}>{data.items.length} 個檔案</span>
        <IconChevron open={open} />
      </div>
      {open && data.items.map((item, i) => <FileItem key={i} str={item} indent={indent + 1} />)}
    </div>
  );
}

function FolderB({ data, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const totalFiles = data.items.length + (data.subfolders || []).reduce((s, sf) => s + sf.items.length, 0);
  return (
    <div style={{borderBottom:'1px solid var(--line-strong)'}}>
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          display:'flex', alignItems:'center', gap:12,
          padding:'14px 20px',
          background: open ? 'color-mix(in srgb,var(--gold) 12%,var(--parchment))' : 'var(--parchment)',
          cursor:'pointer', transition:'background .25s',
        }}
        onMouseEnter={e => { if(!open) e.currentTarget.style.background='color-mix(in srgb,var(--gold) 6%,var(--parchment))'; }}
        onMouseLeave={e => { if(!open) e.currentTarget.style.background='var(--parchment)'; }}
      >
        <IconFolder open={open} />
        <span style={{flex:1, fontFamily:"'Noto Serif TC',serif", fontSize:15, letterSpacing:'3px', color:'var(--wood-deep)', fontWeight:500}}>{data.b}</span>
        <span style={{fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', fontSize:13, letterSpacing:'2px', color:'var(--wood-mid)', marginRight:10}}>
          {totalFiles} files
        </span>
        <IconChevron open={open} />
      </div>
      {open && (
        <div>
          {data.items.map((item, i) => <FileItem key={i} str={item} indent={1} />)}
          {(data.subfolders || []).map((sf, i) => <SubFolder key={i} data={sf} indent={1} />)}
        </div>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
window.DownloadsPage = function DownloadsPage() {
  const { setPage } = useContext(window.NavContext);
  const t = window.useT();
  const lang = useContext(window.LangContext);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero archive-hero">
        <div className="container">
          <div className="crumb">
            <a onClick={() => setPage('home')} style={{cursor:'pointer'}}>{t('nav.home')}</a>
            <span className="crumb-sep">／</span>
            <span>{lang === 'en' ? 'Downloads' : '下載專區'}</span>
          </div>
          <div className="page-hero-grid">
            <div className="page-hero-text">
              <h1>
                {lang === 'en' ? 'Downloads' : '下載專區'}
                <span className="en-sub">Dharma Resource Downloads</span>
              </h1>
              <p className="page-lead">{lang === 'en'
                ? 'The following resources are hosted on Google Drive. Click "Open Link" to access each file freely — may all beings benefit.'
                : '以下資料皆存放於雲端硬碟，點選「前往雲端」即可開啟連結，隨喜取用，廣結法緣。'
              }</p>
            </div>

          </div>
        </div>
      </section>

      {/* Downloads Body */}
      <section style={{padding:'80px 0', background:'var(--surface)'}}>
        <div className="container">
          {DOWNLOADS.map((section, si) => (
            <div key={si} style={{marginBottom:60}}>
              {/* Section A Header */}
              <div style={{
                display:'flex', alignItems:'center', gap:20,
                marginBottom:4,
                padding:'22px 28px',
                background:'var(--surface-dark)',
                borderLeft:'4px solid var(--gold)',
              }}>
                <svg viewBox="0 0 24 24" fill="none" style={{width:22,height:22,color:'var(--gold)',flexShrink:0}}>
                  <path d="M3 7h5l3 3h10v9a1 1 0 01-1 1H4a1 1 0 01-1-1V7z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  <path d="M3 7V5a1 1 0 011-1h5l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
                <span style={{
                  fontFamily:"'Noto Serif TC',serif", fontWeight:600,
                  fontSize:18, letterSpacing:'6px', color:'var(--cream)',
                }}>{section.a}</span>
                <span style={{
                  marginLeft:'auto', fontFamily:"'Cormorant Garamond',serif",
                  fontStyle:'italic', fontSize:13, letterSpacing:'2px', color:'var(--gold-soft)',
                }}>
                  {section.folders.length} folders
                </span>
              </div>

              {/* Folder B list */}
              <div style={{border:'1px solid var(--line-strong)', borderTop:'none'}}>
                {section.folders.map((folder, fi) => (
                  <FolderB key={fi} data={folder} defaultOpen={fi === 0} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
