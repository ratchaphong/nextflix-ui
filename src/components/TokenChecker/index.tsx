"use client";

import LoadingScreen from "../LoadingScreen";
import ExpiredTokenModal from "../ExpiredTokenModal";
import useTokenChecker from "./TokenChecker.hooks";
import ApiErrorModal from "../ApiErrorModal";

export default function TokenChecker({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isReady, tokenExpired } = useTokenChecker();

  return (
    <>
      {!isReady && <LoadingScreen fullBlack />}
      {tokenExpired ? <ExpiredTokenModal /> : <ApiErrorModal />}
      {children}
    </>
  );
}
