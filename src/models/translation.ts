interface TranslationInterface {
  key: string;
  base: string;
  translation: string;
}

const TRANSLATIONS = {
  'pl': [
    {
      'key': 'super',
      'base': 'super',
      'translation': 'fajnie',
    },
    {
      'key': 'hiper',
      'base': 'hiper',
      'translation': 'ok',
    },
  ],
};


export class Translation {
  get(language: string, key: string | undefined = undefined): TranslationInterface | TranslationInterface[] {
    let result = TRANSLATIONS[language] || [];

    if (key) {
      result = result
      .filter(obj => obj.key === key);

      if (result) {
        result = result[0];
      } else {
        result = {
          key: key,
          base: '',
          translation: '',
        };
      }
    }

    return result;
  }

  set(language: string, key: string, translation: string): void {
    console.log('ok');
  }
}
