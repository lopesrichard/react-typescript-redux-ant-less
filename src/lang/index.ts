import Polyglot from 'node-polyglot';

import pt_br from './pt-br.json';

export type Options = number | Polyglot.InterpolationOptions;

const polyglot = new Polyglot({
  locale: pt_br.locale,
  phrases: pt_br.phrases,
});

export const Lang = {
  t: (key: string, options?: Options): string => polyglot.t(key, options),
  create: (prefix: string) => (key: string, options?: Options) => Lang.t(`${prefix}.${key}`, options),
};
