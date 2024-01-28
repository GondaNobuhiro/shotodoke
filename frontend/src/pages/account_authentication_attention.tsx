import type {NextPageWithLayout} from 'next'
import {useRouter} from "next/router";
import {useCodeChallenge} from "@/hooks/useCodeChallenge";
import {useRecoilValue} from "recoil";
import {mailAddressAuthenticationState} from "@/atoms/mailAddressAuthenticationAtom";
import {authenticatedKeyState} from "@/atoms/authenticatedKeyAtom";
import {AxiosResponse} from "axios";
import {CodeChallengeResponse} from "@/types/codeChallengeResponse";
import Head from "next/head";

const AccountAuthenticationAttention: NextPageWithLayout = () => {
    const router = useRouter()
    const {post} = useCodeChallenge()
    const mailAddressAuthentication = useRecoilValue(mailAddressAuthenticationState)
    const authenticatedKey = useRecoilValue(authenticatedKeyState)

    function moveToAccountAuthentication(){

        post(mailAddressAuthentication.mailAddress, authenticatedKey.emailAuthenticatedKey).then(async(res: AxiosResponse<CodeChallengeResponse>)=> {

        }).catch(async() => {

        }).finally(() => {

        })
    }

    return (<>
        <Head>
            <title>諸届Webサービス|口座情報の確認</title>
        </Head>
    </>);

}
AccountAuthenticationAttention.getLayout = (page) => {page}

export default AccountAuthenticationAttention