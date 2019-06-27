import { Request, Response } from 'express';
import { Translation, translations } from '../config';

export const list = (req: Request, res: Response) => {
  const language = req.params['language'];
  const languageTranslations = translations[language];
  res.render('list.html', {
    title: `Translations for ${language}`,
    translations: languageTranslations,
  });

};
