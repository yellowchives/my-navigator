import type { NavItem } from '@/types'

function logo(domain: string) {
  return `${import.meta.env.BASE_URL}logos/${domain}.png`
}

export const navItems: NavItem[] = [
  // ── 搜索 ──
  { title: 'Bing', url: 'https://www.bing.com/', logo: logo('bing.com'), category: '搜索' },
  { title: 'Google', url: 'https://www.google.com/', logo: logo('google.com'), category: '搜索' },
  {
    title: 'DuckGo',
    url: 'https://duckduckgo.com/',
    logo: logo('duckduckgo.com'),
    category: '搜索',
  },
  {
    title: 'fyimg',
    url: 'https://fyimg.com/image-search',
    logo: logo('fyimg.com'),
    category: '搜索',
  },

  // ── 工具 ──
  { title: 'OpenAI', url: 'https://chat.openai.com/', logo: logo('openai.com'), category: '工具' },
  {
    title: 'AiStudio',
    url: 'https://aistudio.google.com/',
    logo: logo('aistudio.google.com'),
    category: '工具',
  },
  {
    title: 'Gemini',
    url: 'https://gemini.google.com/app',
    logo: logo('gemini.google.com'),
    category: '工具',
  },
  { title: 'Claude', url: 'https://claude.ai/new', logo: logo('claude.ai'), category: '工具' },
  { title: 'Grok', url: 'https://grok.com/', logo: logo('grok.com'), category: '工具' },
  {
    title: '豆包',
    url: 'https://www.doubao.com/chat/',
    logo: logo('doubao.com'),
    category: '工具',
  },
  {
    title: '千问',
    url: 'https://www.qianwen.com/chat/',
    logo: logo('qianwen.com'),
    category: '工具',
  },
  {
    title: '元宝',
    url: 'https://yuanbao.tencent.com/chat/',
    logo: logo('yuanbao.tencent.com'),
    category: '工具',
  },
  {
    title: 'GLM',
    url: 'https://chatglm.cn/main/alltoolsdetail?t=1777348296411&lang=zh',
    logo: logo('chatglm.cn'),
    category: '工具',
  },
  { title: 'Kimi', url: 'https://www.kimi.com/', logo: logo('kimi.com'), category: '工具' },
  {
    title: 'NotebookLM',
    url: 'https://notebooklm.google.com/?icid=home_maincta',
    logo: logo('notebooklm.google.com'),
    category: '工具',
  },
  {
    title: '文档翻译',
    url: 'https://app.immersivetranslate.com/?utm_source=extension&utm_medium=extension&utm_campaign=popup_btn_document',
    logo: logo('immersivetranslate.com'),
    category: '工具',
  },

  // ── 常用 ──
  {
    title: '哔哩哔哩',
    url: 'https://www.bilibili.com/',
    logo: logo('bilibili.com'),
    category: '常用',
  },
  { title: '抖音', url: 'https://www.douyin.com/', logo: logo('douyin.com'), category: '常用' },
  {
    title: 'YouTube',
    url: 'https://www.youtube.com/',
    logo: logo('youtube.com'),
    category: '常用',
  },
  { title: '知乎', url: 'https://www.zhihu.com/', logo: logo('zhihu.com'), category: '常用' },
  { title: 'GitHub', url: 'https://github.com/', logo: logo('github.com'), category: '常用' },
  {
    title: 'Z-Library',
    url: 'https://z-library.sk/',
    logo: logo('z-library.sk'),
    category: '常用',
  },
  {
    title: '百度网盘',
    url: 'https://pan.baidu.com/disk/main#/index?category=all',
    logo: logo('pan.baidu.com'),
    category: '常用',
  },
  {
    title: '阿里云盘',
    url: 'https://www.alipan.com/drive/home',
    logo: logo('alipan.com'),
    category: '常用',
  },
  {
    title: '夸克网盘',
    url: 'https://pan.quark.cn/list#/list/all',
    logo: logo('quark.cn'),
    category: '常用',
  },
  { title: '博客榜', url: 'https://xyzrank.com/#/', logo: logo('xyzrank.com'), category: '常用' },
  { title: 'X', url: 'https://x.com/home', logo: logo('x.com'), category: '常用' },
  { title: '股资源', url: 'http://www.guziyuan.cn/', logo: logo('guziyuan.cn'), category: '常用' },
  {
    title: 'JoinQuant',
    url: 'https://www.joinquant.com/',
    logo: logo('joinquant.com'),
    category: '常用',
  },
  {
    title: 'quant-wiki',
    url: 'https://quant-wiki.com/',
    logo: logo('quant-wiki.com'),
    category: '常用',
  },
  {
    title: 'TbQuant',
    url: 'https://www.tbquant.net/',
    logo: logo('tbquant.net'),
    category: '常用',
  },
  {
    title: '无限易',
    url: 'https://infinitrader.quantdo.com.cn/',
    logo: logo('infinitrader.quantdo.com.cn'),
    category: '常用',
  },
  {
    title: 'openctp',
    url: 'http://www.openctp.cn/CTPAPI.html',
    logo: logo('openctp.cn'),
    category: '常用',
  },
  {
    title: '云听电台',
    url: 'https://www.radio.cn/pc-portal/erji/radioStation.html',
    logo: logo('radio.cn'),
    category: '常用',
  },

  // ── 交易 ──
  {
    title: 'K线',
    url: 'https://mightybar.quantdo.com.cn/chart',
    logo: logo('mightybar.quantdo.com.cn'),
    category: '交易',
  },
  {
    title: '数据发布',
    url: 'https://yellowchives.github.io/fundamental-data/',
    logo: '',
    category: '交易',
  },
  { title: '24h新闻', url: 'https://yellowchives.github.io/24h-news/', logo: '', category: '交易' },
  {
    title: '曲和快讯',
    url: 'https://kuaixun.quheqihuo.com/',
    logo: logo('quheqihuo.com'),
    category: '交易',
  },
  {
    title: '基准价格',
    url: 'https://www.100ppi.com/monitor/',
    logo: logo('100ppi.com'),
    category: '交易',
  },
  {
    title: '手续费',
    url: 'https://yellowchives.github.io/shouxufei/',
    logo: logo('shouxufei'),
    category: '交易',
  },
  {
    title: '交易所公告',
    url: 'https://market01.quantdo.com.cn/exchange/newsletter/index.html#/exchange-calendar',
    logo: logo('quantdo.com.cn'),
    category: '交易',
  },
  {
    title: '交易可查',
    url: 'https://www.jiaoyikecha.com/',
    logo: logo('jiaoyikecha.com'),
    category: '交易',
  },
  {
    title: '大宗产业链',
    url: 'https://yellowchives.github.io/futurebasic/',
    logo: '',
    category: '交易',
  },
  {
    title: 'openvlab',
    url: 'https://openvlab.cn/market',
    logo: logo('openvlab.cn'),
    category: '交易',
  },
  {
    title: '同花顺',
    url: 'https://www.10jqka.com.cn',
    logo: logo('10jqka.com.cn'),
    category: '交易',
  },
  {
    title: '交易时间',
    url: 'https://qhweb.eastmoney.com/tradinghours',
    logo: logo('eastmoney.com'),
    category: '交易',
  },
  {
    title: '期货吧',
    url: 'https://guba.eastmoney.com/futures.html',
    logo: logo('eastmoney.com'),
    category: '交易',
  },
]
