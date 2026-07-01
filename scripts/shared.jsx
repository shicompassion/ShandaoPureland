
const { useState, useEffect, useContext, createContext, useRef } = React;

window.LangContext = createContext('zh-Hant');
window.ThemeContext = createContext({ theme: 'cream', setTheme: () => {} });
window.NavContext = createContext({ page: 'home', setPage: () => {} });

window.I18N = {
  'zh-Hant': {
    'top.greeting': '南無阿彌陀佛 · 歡迎您蒞臨',
    'brand.cn': '善導淨土講堂', 'brand.en': 'Shandao Pureland',
    'nav.home': '首頁', 'nav.master': '善導大師', 'nav.archive': '法寶結緣',
    'nav.news': '最新消息', 'nav.downloads': '下載專區',
    'nav.cat.lectures': '法音宣講', 'nav.cat.lizan': '禮讚教學', 'nav.cat.erhe': '二河圖賞析',
    'nav.cat.master': '善導大師',
    'dl.lead.master': '善導大師「善導十德」相關電子檔與講經音檔，敬請隨喜下載、用心薫修。',
    'dl.lead.lectures': '《往生禮讚》與《觀經要義》之講經影音、課本講義與圖檔，依影片、音檔、圖檔、電子檔分門別類，敬請隨喜下載、用心薰修。',
    'dl.lead.lizan': '《往生禮讚》共修禮讚教學影片，備有繁體與簡體版本，敬請隨喜觀看、依教奉行。',
    'dl.lead.erhe': '善導大師〈二河白道〉喻之文字解說、原文與全圖賞析，圖文相映，助發信願、直往西方。',
    'hero.label.cn': '善導大師', 'hero.label.en': 'Master Shandao',
    'hero.title': '二河白道　一心直來\n正念護持　必無死難',
    'hero.q1': '東岸忽聞人勸聲：', 'hero.q1a': '仁者，但決定尋此道行，必無死難！若住，即死。',
    'hero.q2': '西岸上有人喚言：', 'hero.q2a': '汝一心正念直來，我能護汝！眾不畏墮於水火之難。',
    'hero.cite': '—— 善導大師　二河白道圖',
    'hero.meta.lineage': '淨土宗二祖傳承', 'hero.meta.retreat': '春季念佛共修',
    'hero.img.caption': '西方三聖 · 接引圖',
    'news.title': '最新消息', 'news.subtitle': 'Tidings from the Sangha',
    'news.tag.teaching': '開示', 'news.tag.event': '法會', 'news.tag.scripture': '法寶', 'news.tag.upload': '新檔上架',
    'news.1.title': '《往生禮讚》共修　雲端資料夾正式啟用',
    'news.1.excerpt': '《往生禮讚》共修專區現已開放下載，內含禮讚教學影片（繁、簡兩版）、成慈法師宣講共二十五集音檔與課本講義、行門共修流程及地鐘念佛影片、現場錄音，並附二河白道圖與偈頌法語電子檔，敬請隨喜下載、用心修持。',
    'news.2.title': '《觀經要義》課程資料　雲端資料夾正式啟用',
    'news.2.excerpt': '《觀經要義》專區現已開放下載，收錄完整十二集講座音檔、補充講義（內文、目錄、封面電子檔）、《二河白道圖》賞析文字與圖檔，並附現場上課實況相片，歡迎十方大德聞法薰修。',
    'news.viewall': '前往下載專區 / View Downloads →',
    'qa.title': '問答釋疑', 'qa.subtitle': 'Questions of the Path',
    'qa.1.q': '如何在日常生活中保持正念？',
    'qa.1.p': '正念並非只在靜坐時方起，亦在行住坐臥、語默動靜之間。於日用之中，時時覺照心念之起滅，不隨境轉，不著相生…',
    'qa.1.a': '正念並非只在靜坐時方起，亦在行住坐臥、語默動靜之間。於日用之中，時時覺照心念之起滅，不隨境轉，不著相生。初行者可以一句「南無阿彌陀佛」為所緣，口念耳聞、心中明了；念念相續，綿綿不斷，則妄念自息、正念自現。久之，於洗米、掃地、行走、對話之間，皆是念佛道場，即此便是日用中之正念功夫。',
    'qa.2.q': '初學佛者應從何處入手？',
    'qa.2.p': '初學入門，當以發心為要。皈依三寶、受持五戒、深信因果，乃一切修行之基礎；復以聽經聞法，建立正見…',
    'qa.2.a': '初學入門，當以發心為要。皈依三寶、受持五戒、深信因果，乃一切修行之基礎；復以聽經聞法，建立正見。既知苦空無常，進而發菩提心，願與一切眾生同生淨土。日課不在多，貴在恆；每日定時誦《阿彌陀經》一卷、念佛千聲或十念法，依自身能力而行，久則自然相續不斷。',
    'qa.3.q': '持名念佛與觀想念佛有何差別？',
    'qa.3.p': '持名者，以一句佛號，繫念專注，簡捷易行，三根普被；觀想者，依經所示依正莊嚴之境，心眼觀照，較為精細…',
    'qa.3.a': '持名者，以一句佛號，繫念專注，簡捷易行，三根普被；觀想者，依經所示依正莊嚴之境，心眼觀照，較為精細。善導大師判教，以持名為正行，最契末法眾生之機；《觀經》所示十六觀法雖亦尊貴，然須定力深厚方能成就。故今時學人，宜以持名為本、兼習觀想，專雜二門，融會貫通，方能老實念佛、決定往生。',
    'qa.4.q': '遇逆境時如何轉化心念？',
    'qa.4.p': '逆境現前，正是修行下手處。觀彼境緣如幻如化，非由外境生苦，乃由心念執取而起…',
    'qa.4.a': '逆境現前，正是修行下手處。觀彼境緣如幻如化，非由外境生苦，乃由心念執取而起；若能當下放下執著，則境轉心安。如二河白道之喻：水火二河夾中，眾苦圍繞，然一心正念直來，必達彼岸。逆境即是水火，佛號即是白道；於此稱念「南無阿彌陀佛」，則任其風浪，心不動搖。',
    'qa.viewall': '瀏覽所有問答 / View All Q & A →',
    'aff.eyebrow': 'Dharma Affinity',
    'aff.title': '法寶結緣\n護持道場',
    'aff.body': '隨喜護持三寶，共成無上菩提。\n凡有緣參與法寶結緣、道場護持者，皆可來函洽詢，亦歡迎親臨道場共修。',
    'aff.cta1': '法寶結緣', 'aff.cta2': '護持道場',
    'footer.tagline': '以法為依，以戒為師。隨緣度眾，常轉法輪，願一切有情同登覺岸。',
    'footer.copy': '© 2026 善導淨土講堂 Shandao Pureland · 網站內容歡迎轉載　並請註明出處',
    'mural.caption': '二河白道圖'
  },
  'zh-Hans': {
    'top.greeting': '南无阿弥陀佛 · 欢迎您莅临',
    'brand.cn': '善导净土讲堂', 'brand.en': 'Shandao Pureland',
    'nav.home': '首页', 'nav.master': '善导大师', 'nav.archive': '法宝结缘',
    'nav.news': '最新消息', 'nav.downloads': '下载专区',
    'nav.cat.lectures': '法音宣讲', 'nav.cat.lizan': '礼赞教学', 'nav.cat.erhe': '二河图赏析',
    'nav.cat.master': '善导大师',
    'dl.lead.master': '善导大师“善导十德”相关电子档与讲经音档，敬请随喜下载、用心薫修。',
    'dl.lead.lectures': '《往生礼赞》与《观经要义》之讲经影音、课本讲义与图档，依影片、音档、图档、电子档分门别类，敬请随喜下载、用心薰修。',
    'dl.lead.lizan': '《往生礼赞》共修礼赞教学影片，备有繁体与简体版本，敬请随喜观看、依教奉行。',
    'dl.lead.erhe': '善导大师〈二河白道〉喻之文字解说、原文与全图赏析，图文相映，助发信愿、直往西方。',
    'hero.label.cn': '善导大师', 'hero.label.en': 'Master Shandao',
    'hero.title': '二河白道　一心直来\n正念护持　必无死难',
    'hero.q1': '东岸忽闻人劝声：', 'hero.q1a': '仁者，但决定寻此道行，必无死难！若住，即死。',
    'hero.q2': '西岸上有人唤言：', 'hero.q2a': '汝一心正念直来，我能护汝！众不畏堕于水火之难。',
    'hero.cite': '—— 善导大师　二河白道图',
    'hero.meta.lineage': '净土宗二祖传承', 'hero.meta.retreat': '春季念佛共修',
    'hero.img.caption': '西方三圣 · 接引图',
    'news.title': '最新消息', 'news.subtitle': 'Tidings from the Sangha',
    'news.tag.teaching': '开示', 'news.tag.event': '法会', 'news.tag.scripture': '法宝', 'news.tag.upload': '新档上架',
    'news.1.title': '《往生礼赞》共修　云端资料夹正式启用',
    'news.1.excerpt': '《往生礼赞》共修专区现已开放下载，内含礼赞教学影片（繁、简两版）、成慈法师宣讲共二十五集音档与课本讲义、行门共修流程及地钟念佛影片、现场录音，并附二河白道图与偈颂法语电子档，敬请随喜下载、用心修持。',
    'news.2.title': '《观经要义》课程资料　云端资料夹正式启用',
    'news.2.excerpt': '《观经要义》专区现已开放下载，收录完整十二集讲座音档、补充讲义（内文、目录、封面电子档）、《二河白道图》赏析文字与图档，并附现场上课实况相片，欢迎十方大德闻法薰修。',
    'news.viewall': '前往下载专区 / View Downloads →',
    'qa.title': '问答释疑', 'qa.subtitle': 'Questions of the Path',
    'qa.1.q': '如何在日常生活中保持正念？',
    'qa.1.p': '正念并非只在静坐时方起，亦在行住坐卧、语默动静之间…',
    'qa.1.a': '正念并非只在静坐时方起，亦在行住坐卧、语默动静之间。于日用之中，时时觉照心念之起灭，不随境转，不着相生。初行者可以一句「南无阿弥陀佛」为所缘，口念耳闻、心中明了；念念相续，绵绵不断，则妄念自息、正念自现。',
    'qa.2.q': '初学佛者应从何处入手？',
    'qa.2.p': '初学入门，当以发心为要。皈依三宝、受持五戒、深信因果…',
    'qa.2.a': '初学入门，当以发心为要。皈依三宝、受持五戒、深信因果，乃一切修行之基础；复以听经闻法，建立正见。',
    'qa.3.q': '持名念佛与观想念佛有何差别？',
    'qa.3.p': '持名者，以一句佛号，系念专注，简捷易行，三根普被…',
    'qa.3.a': '持名者，以一句佛号，系念专注，简捷易行，三根普被；观想者，依经所示依正庄严之境，心眼观照，较为精细。善导大师判教，以持名为正行，最契末法众生之机。',
    'qa.4.q': '遇逆境时如何转化心念？',
    'qa.4.p': '逆境现前，正是修行下手处…',
    'qa.4.a': '逆境现前，正是修行下手处。观彼境缘如幻如化，非由外境生苦，乃由心念执取而起；若能当下放下执着，则境转心安。',
    'qa.viewall': '浏览所有问答 / View All Q & A →',
    'aff.eyebrow': 'Dharma Affinity', 'aff.title': '法宝结缘\n护持道场',
    'aff.body': '随喜护持三宝，共成无上菩提。\n凡有缘参与法宝结缘、道场护持者，皆可来函洽询，亦欢迎亲临道场共修。',
    'aff.cta1': '法宝结缘', 'aff.cta2': '护持道场',
    'footer.tagline': '以法为依，以戒为师。随缘度众，常转法轮，愿一切有情同登觉岸。',
    'footer.copy': '© 2026 善导净土讲堂 Shandao Pureland · 网站内容欢迎转载　并请注明出处',
    'mural.caption': '二河白道图'
  },
  'en': {
    'top.greeting': 'Namo Amitābha · Welcome to Shandao Pureland',
    'brand.cn': 'Shandao Pureland', 'brand.en': 'Shandao Pureland',
    'nav.home': 'Home', 'nav.master': 'Master Shandao', 'nav.archive': 'Dharma Affinity',
    'nav.news': 'News', 'nav.downloads': 'Downloads',
    'nav.cat.lectures': 'Dharma Lectures', 'nav.cat.lizan': 'Lizan Teaching', 'nav.cat.erhe': 'Two Rivers Diagram',
    'nav.cat.master': 'Master Shandao',
    'dl.lead.master': 'Documents and lecture audio on the “Ten Virtues of Master Shandao” — available for download.',
    'dl.lead.lectures': 'Lecture audio and video, course texts, notes, and images for the Wangsheng Lizan and Guanjing Yaoyi series — organized by video, audio, images, and documents.',
    'dl.lead.lizan': 'Teaching videos for the Wangsheng Lizan group practice, available in both Traditional and Simplified Chinese editions.',
    'dl.lead.erhe': 'Master Shandao\u2019s Parable of the Two Rivers and the White Path — written explanation, original text, and the full diagram for contemplation.',
    'hero.label.cn': 'Master Shandao', 'hero.label.en': '善導大師',
    'hero.title': 'Two Rivers, One White Path —\nwalk straight, and no death shall come.',
    'hero.q1': 'From the eastern bank a voice urges:', 'hero.q1a': 'Traveler — resolve to walk this path, and you shall not perish. To stay is to die.',
    'hero.q2': 'From the western bank a voice calls:', 'hero.q2a': 'Come straight, with single-minded right mindfulness. I will protect you — fear neither fire nor flood.',
    'hero.cite': '— Master Shandao · The Parable of Two Rivers and the White Path',
    'hero.meta.lineage': '2nd Patriarch, Pure Land', 'hero.meta.retreat': 'Seven-day Spring Retreat',
    'hero.img.caption': 'The Three Sages of the Western Pure Land',
    'news.title': 'Latest News', 'news.subtitle': 'Tidings from the Sangha',
    'news.tag.teaching': 'Teaching', 'news.tag.event': 'Retreat', 'news.tag.scripture': 'Sutra', 'news.tag.upload': 'New Upload',
    'news.1.title': 'Wangsheng Lizan Practice Folder — Now Available',
    'news.1.excerpt': 'The Wangsheng Lizan (Praise of Rebirth) shared folder is now open. It contains teaching videos in Traditional and Simplified Chinese, Master Chengci\'s twenty-five-part audio commentary with study notes, the six-time practice flow with floor-bell nianfo video and on-site recordings, plus the Two Rivers White Path diagram and gāthā recitation files.',
    'news.2.title': 'Guanjing Yaoyi Course Materials — Now Available',
    'news.2.excerpt': 'The Guanjing Yaoyi (Essentials of the Contemplation Sutra) shared folder is now open. It includes the complete twelve-part lecture audio, supplementary notes (text, table of contents, and cover), the Two Rivers White Path appreciation essay with images, and photographs from the in-person sessions.',
    'news.viewall': 'Go to Downloads →',
    'qa.title': 'Dharma Q & A', 'qa.subtitle': 'Questions of the Path',
    'qa.1.q': 'How can one sustain mindfulness in daily life?',
    'qa.1.p': 'Mindfulness does not arise only in seated meditation; it lives in walking, sitting, speaking, and silence alike…',
    'qa.1.a': 'Mindfulness does not arise only in seated meditation; it lives in walking, sitting, speaking, and silence alike. In daily life, observe the arising and ceasing of thoughts without being carried by circumstance. A beginner may take the phrase "Namo Amitābha" as the single anchor — spoken, heard, and clearly known. In time, washing rice, sweeping, walking, and conversing all become the place of practice.',
    'qa.2.q': 'Where should a beginner begin?',
    'qa.2.p': 'For the beginner, right intention is primary. Taking refuge, receiving the five precepts, and trusting cause and effect form the foundation…',
    'qa.2.a': "For the beginner, right intention is primary. Taking refuge, receiving the five precepts, and trusting cause and effect form the foundation of all practice. Listening to sutras cultivates right view; seeing impermanence, give rise to bodhicitta and vow to be reborn in the Pure Land with all beings.",
    'qa.3.q': 'What is the difference between name-recitation and visualization?',
    'qa.3.p': 'Name-recitation uses a single phrase as anchor — simple, direct, accessible to all…',
    'qa.3.a': "Name-recitation uses a single phrase as anchor — simple, direct, accessible to all. Visualization contemplates the adornments of the Pure Land as described in the sutras — subtler and more demanding of concentration. Master Shandao held name-recitation as the primary practice, most fitting for beings in the Dharma-Ending Age.",
    'qa.4.q': 'How does one transform the mind in adversity?',
    'qa.4.p': 'Adversity, when it comes, is the very place of practice. Outer circumstance does not generate suffering — grasping does…',
    'qa.4.a': "Adversity, when it comes, is the very place of practice. Outer circumstance does not generate suffering — grasping does. When clinging is set down, the situation turns and the mind becomes still. Recite \"Namo Amitābha,\" and the storm cannot move you.",
    'qa.viewall': 'Browse all Q & A →',
    'aff.eyebrow': 'Dharma Affinity', 'aff.title': 'Dharma Affinity\nSupport the Path',
    'aff.body': 'In supporting the Three Jewels, we walk together toward awakening.\nAll are welcome to request dharma materials, support the temple, or practice with us in person.',
    'aff.cta1': 'Request Dharma', 'aff.cta2': 'Support Us',
    'footer.tagline': 'Taking Dharma as refuge, taking Precepts as teacher. May all beings cross together to the farther shore.',
    'footer.copy': '© 2026 Shandao Pureland · Content may be shared freely with attribution.',
    'mural.caption': 'Two Rivers & White Path'
  }
};

window.useT = function useT() {
  const lang = useContext(window.LangContext);
  return (key) => window.I18N[lang]?.[key] || window.I18N['zh-Hant'][key] || key;
};

window.LotusDivider = function LotusDivider() {
  return (
    <div className="lotus-divider" aria-hidden="true">
      <div className="line"></div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 3 C9 7 9 11 12 14 C15 11 15 7 12 3 Z" />
        <path d="M5 10 C5 14 8 17 12 17 C16 17 19 14 19 10 C17 12 14 13 12 13 C10 13 7 12 5 10 Z" />
      </svg>
      <div className="line"></div>
    </div>);

};

window.SectionHead = function SectionHead({ eyebrow, title, subtitle }) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">
        {title}
        {subtitle && <span className="en">{subtitle}</span>}
      </h2>
      <window.LotusDivider />
    </div>);

};

window.MuralBanner = function MuralBanner() {
  const t = window.useT();
  return (
    <div className="mural-banner">
      <img src="assets/mural-banner.jpg" alt="二河白道圖" />
      <div className="caption">{t('mural.caption')}</div>
    </div>);

};

window.LogoMark = function LogoMark() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M20 6 C15 13 15 20 20 26 C25 20 25 13 20 6 Z" />
      <path d="M9 17 C9 25 14 31 20 31 C26 31 31 25 31 17 C28 20 24 22 20 22 C16 22 12 20 9 17 Z" />
      <circle cx="20" cy="20" r="18" strokeWidth="0.5" opacity="0.4" />
    </svg>);

};

window.TopBar = function TopBar({ lang, setLang }) {
  const t = window.useT();
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="left"><span>{t('top.greeting')}</span></div>
        <div className="topbar-right">
          <a href="mailto:shicompassion@gmail.com">shicompassion@gmail.com</a>
          <div className="lang-toggle">
            {['zh-Hant', 'zh-Hans', 'en'].map((l, i) =>
            <React.Fragment key={l}>
                {i > 0 && <span className="sep">/</span>}
                <span className={lang === l ? 'active' : ''} onClick={() => setLang(l)}>
                  {l === 'zh-Hant' ? '繁' : l === 'zh-Hans' ? '簡' : 'EN'}
                </span>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>);

};

window.Header = function Header({ lang, setLang }) {
  const t = window.useT();
  const { page, setPage } = useContext(window.NavContext);
  const [open, setOpen] = useState(false);
  const dlData = window.DOWNLOAD_DATA || [];
  const TYPE_EN = { '影片': 'Video', '音檔': 'Audio', '圖檔': 'Images', '電子檔': 'Documents' };
  const navItems = [
  { key: 'home',      label: t('nav.home') },
  { key: 'master',    label: t('nav.master'),    dd: 'master' },
  { key: 'lectures',  label: t('nav.cat.lectures'), dd: 'lectures' },
  { key: 'lizan',     label: t('nav.cat.lizan'),    dd: 'lizan' },
  { key: 'erhe',      label: t('nav.cat.erhe'),     dd: 'erhe' },
  { key: 'archive',   label: t('nav.archive') }];


  function handleNav(item) {
    setOpen(false);
    if (item.anchor) {
      if (page !== 'home') {
        setPage('home');
        setTimeout(() => {
          const el = document.getElementById(item.anchor);
          if (el) el.scrollIntoView({ block: 'start' });
        }, 120);
      } else {
        const el = document.getElementById(item.anchor);
        if (el) el.scrollIntoView({ block: 'start' });
      }
    } else {
      setPage(item.key);
    }
  }

  function goSection(catId, anchor) {
    setOpen(false);
    setPage(catId, anchor);
  }

  return (
    <header>
      <div className="nav-wrap">
        <a className="logo" onClick={() => {setPage('home');setOpen(false);}} style={{ cursor: 'pointer' }}>
          <div className="logo-text">
            <div className="cn" style={{ textAlign: "center" }}>{t('brand.cn')}</div>
            <div className="en" style={{ textAlign: "center" }}>{t('brand.en')}</div>
          </div>
        </a>
        <nav className={open ? 'open' : ''}>
          <ul>
            {navItems.map((item) => {
              const cat = item.dd ? dlData.find((c) => c.id === item.dd) : null;
              return (
              <li key={item.key} className={cat ? 'has-dd' : ''}>
                <a
                className={!item.anchor && page === item.key ? 'active' : ''}
                onClick={() => handleNav(item)}
                style={{ cursor: 'pointer' }}>
                  {item.label}{cat ? <span className="dd-caret">▾</span> : null}
                </a>
                {cat &&
                <div className="nav-dd">
                    {cat.groups.map((g, gi) =>
                  <div className="dd-col" key={gi}>
                        <div className="dd-b"><span className="b-zh">{g.b}</span><span className="b-en">{TYPE_EN[g.b] || ''}</span></div>
                        {g.sections.map((s, si) =>
                    <a key={si} className="dd-c" onClick={(e) => {e.stopPropagation();goSection(item.dd, gi + '-' + si);}}>
                            {lang === 'en' && window.SECTION_EN && window.SECTION_EN[s.c] ? window.SECTION_EN[s.c] : s.c}
                          </a>
                    )}
                      </div>
                  )}
                  </div>
                }
              </li>);

            })}
          </ul>
        </nav>
        <button className="menu-btn" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>);

};

window.Footer = function Footer() {
  const t = window.useT();
  const { setPage } = useContext(window.NavContext);
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-title">
              <div className="cn">{t('brand.cn')}</div>
              <div className="en">{t('brand.en')}</div>
            </div>
          </div>
          <div>
            <h4>Navigate</h4>
            <ul>
              <li><a onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>{t('nav.home')}</a></li>
              <li><a onClick={() => setPage('lectures')} style={{ cursor: 'pointer' }}>{t('nav.cat.lectures')}</a></li>
              <li><a onClick={() => setPage('lizan')} style={{ cursor: 'pointer' }}>{t('nav.cat.lizan')}</a></li>
              <li><a onClick={() => setPage('erhe')} style={{ cursor: 'pointer' }}>{t('nav.cat.erhe')}</a></li>
              <li><a onClick={() => setPage('archive')} style={{ cursor: 'pointer' }}>{t('nav.archive')}</a></li>
            </ul>
          </div>
          <div className="contact-info">
            <h4>Contact</h4>
            <p><a href="mailto:shicompassion@gmail.com">shicompassion@gmail.com</a></p>
            <p><a href="https://www.youtube.com/@Shicompassion" target="_blank" rel="noopener">YouTube · @Shicompassion</a></p>
          </div>
        </div>
        <div className="copyright">
          <div>{t('footer.copy')}</div>
          <div className="social">
            <a href="https://www.youtube.com/@Shicompassion" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7s-.2-1.5-.9-2.2c-.8-.9-1.7-.9-2.1-.9-3-.2-7.5-.2-7.5-.2h0s-4.5 0-7.5.2c-.4 0-1.3 0-2.1.9C2.2 5.5 2 7 2 7s-.2 1.8-.2 3.6v1.7c0 1.8.2 3.6.2 3.6s.2 1.5.9 2.2c.8.9 1.9.9 2.4 1 1.7.2 7.2.2 7.2.2s4.5 0 7.5-.2c.4 0 1.3 0 2.1-.9.7-.7.9-2.2.9-2.2s.2-1.8.2-3.6v-1.7c0-1.8-.2-3.6-.2-3.6zM9.9 14.9V8.3l6 3.3-6 3.3z" /></svg></a>
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.6 1.6-1.6h1.7V3.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.4V13h2.7v8h3.4z" /></svg></a>
          </div>
        </div>
      </div>
    </footer>);

};