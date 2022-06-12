import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout = NextPage & {
    getLayout?: GetLayout | null;
};

export type GetLayout = (page: ReactElement) => ReactNode;

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};