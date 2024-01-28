import {atom} from "recoil";

export const authenticatedKeyState = atom({
    key: 'authenticatedKeyState' ,
    default: {
        emailAuthenticatedKey:''
    },

})