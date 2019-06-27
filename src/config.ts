export const languages = {
  'pl': 'Polski',
};

export interface Translation {
  key: string;
  base: string;
  translation: string | null;
}

export const translations = {
  'pl': [
    {
      'key': 'super',
      'base': 'super',
      'translation': 'fajnie',
    },
  ]
};
