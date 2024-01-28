import {apiClient} from "@/libs/apiClient";
import {CodeChallengeResponse} from "@/types/codeChallengeResponse";

export const useCodeChallenge = () => {
    const post = (mailAddress: string, emailAuthenticatedKeys: string) => {
        return apiClient.post<CodeChallengeResponse>("code-challenge", {
            'mailAddress':mailAddress
        },{
            headers:{
                'X-Email-Authenticated-Key': emailAuthenticatedKeys
            }
        })
    }
    return {post}
}