import { FC } from 'react';

export type FCWithChildren<
  Props = {},
  Children extends object = {},
> = FC<Props> & Children;
