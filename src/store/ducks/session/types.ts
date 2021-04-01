// eslint-disable-next-line no-shadow
export enum SessionTypes {
  LOGIN = '@session/LOGIN',
}

export interface User {
  id?: number;
  imageUrl?: string;
}

export interface SessionState {
  user: User | null;
}
