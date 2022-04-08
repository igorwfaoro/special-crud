import { atom } from "recoil";

export const drawerMenuOpenedState = atom<boolean>({
    key: 'drawerMenuOpenedState',
    default: false
});