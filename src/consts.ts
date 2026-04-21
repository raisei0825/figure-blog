export const SITE_TITLE = 'FigBlog';
export const SITE_DESCRIPTION =
  'フィギュア情報をお届けするブログ。一番くじ・プライズ・新作フィギュアのレビューと最新情報。';
export const SITE_URL = 'https://figblog.jp';

export const CATEGORY_LABELS: Record<string, string> = {
  'ichiban-kuji': '一番くじ',
  prize: 'プライズ',
  'new-arrival': '新作フィギュア',
};

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'ichiban-kuji': '一番くじの最新情報・当選報告・攻略をお届け。',
  prize: 'UFOキャッチャー等のプライズフィギュアをコスパ評価。',
  'new-arrival': '注目の新作フィギュア情報・予約開始情報をお届け。',
};

/** サイドバー表示用カテゴリ一覧 */
export const CATEGORIES = [
  { key: 'ichiban-kuji', icon: '🎰', label: '一番くじ' },
  { key: 'prize', icon: '🎯', label: 'プライズ' },
  { key: 'new-arrival', icon: '✨', label: '新作フィギュア' },
] as const;
