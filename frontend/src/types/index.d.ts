import {AppProps} from "next/app";
import {ReactElement} from "react";
import {NextPage} from "next";

declare module 'next' {
    type NextPageWithLayout<P = Record<never, never>, IP = P> =NextPage<P, IP> & {
        getLayout?:(page: ReactElement) => ReactElemant
    }
}

declare module 'next/app' {

    type AppPropsWithLayout<P = Record<never, never>> =AppProps<P> & {

    }
}