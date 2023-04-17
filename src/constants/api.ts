export const BASE = 'https://raw.githubusercontent.com/lydiahallie/javascript-questions/master';

export const LOCALE = {
  EN: { NAME: 'English', ROUTE: 'README.md' },
  DE: { NAME: 'Deutsch', ROUTE: 'de-DE/README.md' },
  ES: { NAME: 'Español', ROUTE: 'es-ES/README-ES.md' },
  FR: { NAME: 'Français', ROUTE: 'fr-FR/README_fr-FR.md' },
  ID: { NAME: 'Indonesia', ROUTE: 'id-ID/README.md' },
  IT: { NAME: 'Italiano', ROUTE: 'it-IT/README.md' },
  NL: { NAME: 'Nederlands', ROUTE: 'nl-NL/README.md' },
  UA: { NAME: 'Українська', ROUTE: 'uk-UA/README.md' },
  RU: { NAME: 'Русский', ROUTE: 'ru-RU/README.md' },
  VN: { NAME: 'Tiếng Việt', ROUTE: 'vi-VI/README-vi.md' },
  TR: { NAME: 'Türkçe', ROUTE: 'tr-TR/README-tr_TR.md' },
  TH: { NAME: 'ไทย', ROUTE: 'th-TH/README.md' },
  JP: { NAME: '日本語', ROUTE: 'ja-JA/README-ja_JA.md' },
  KR: { NAME: '한국어', ROUTE: 'ko-KR/README-ko_KR.md' },
  CN: { NAME: '简体中文', ROUTE: 'zh-CN/README-zh_CN.md' },
  TW: { NAME: '繁體中文', ROUTE: 'zh-TW/README_zh-TW.md' },
};

export type Locale = keyof typeof LOCALE;
