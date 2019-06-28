import { Request, Response } from 'express';
import validator from 'validator';
import { Translation } from '../models/translation';

export const edit = (req: Request, res: Response) => {
  const language = req.params['language'];
  const key = req.params['key'];
  const translationModel = new Translation();
  let data = translationModel.get(language, key);
  const errors = {};
  let hasErrors = false;

  if (req.method === 'POST') {
    const toValidate = req.body;

    if (!validator.equals(toValidate['key'], key)) {
      errors['key'] = `"${toValidate['key']}" does not equal "${key}"`;
    }

    if (!validator.equals(toValidate['base'], data['base'])) {
      errors['base'] = `"${toValidate['base']}" does not equal "${data['base']}"`;
    }

    if (validator.isEmpty(toValidate['translation'])) {
      errors['translation'] = 'Field cannot be empty';
    }

    hasErrors = Boolean(Object.keys(errors).length);
    data = req.body;

    if (!hasErrors) {
      translationModel.set(data['key'], data['base'], data['translation']);
      return res.redirect(`/${language}/${key}?success`);
    }

  }

return res.render('edit.html', {
    hasErrors: hasErrors,
    errors: errors,
    title: `Translations for ${language} ${key}`,
    data: data,
    language,
    key,
  });

};
