"use client";

import LoadingScreen from "../LoadingScreen";
import ExpiredTokenModal from "../ExpiredTokenModal/indext";
import useTokenChecker from "./TokenChecker.hooks";

export default function TokenChecker({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isReady, tokenExpired } = useTokenChecker();

  return (
    <>
      {!isReady && <LoadingScreen fullBlack />}
      {tokenExpired && <ExpiredTokenModal />}
      {children}
    </>
  );
}
