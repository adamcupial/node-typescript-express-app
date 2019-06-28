import { Request, Response } from 'express';
import { Translation } from '../models/translation';

export const list = (req: Request, res: Response) => {
  const language = req.params['language'];
  res.render('list.html', {
    title: `Translations for ${language}`,
    translations: new Translation().get(language),
    language,
  });

};
