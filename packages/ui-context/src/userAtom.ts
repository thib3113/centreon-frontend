import { atom } from 'jotai';

import { defaultUser } from './defaults';

import { User } from '.';

const userAtom = atom<User>(defaultUser as User);

export default userAtom;
