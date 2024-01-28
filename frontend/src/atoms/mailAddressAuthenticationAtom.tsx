import {atom} from 'recoil'
import {MailAddressAuthentication} from "@/types/mailAddressAuthentication";

export const mailAddressAuthenticationState = atom<MailAddressAuthentication>({
    key:'mailAddressAuthenticationState',
    default:{
        mailAddress: '',
        randomKey:''
    },
    //effects_UNSTABLE:[]
})