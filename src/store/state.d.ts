// este arquivo sobrescreve a tipagem do tipo DefaultRootState (o estado raiz)
// que vem no modo react-redux

import 'react-redux';

import { ApplicationState } from '.';

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends ApplicationState {}
}
