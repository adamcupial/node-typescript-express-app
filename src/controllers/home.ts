import { Request, Response } from 'express';
import { languages } from '../config';

/**
 * GET /
 * Home page.
 */
export const homepage = (req: Request, res: Response) => {
  res.render('index.html', { languages });
};
