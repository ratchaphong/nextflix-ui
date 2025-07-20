// "use client";

// import { useRouter } from "@/i18n/navigation";
// import { tokenStorage } from "@/lib/tokenStorage";
// import { useTranslations } from "next-intl";
// import { useState } from "react";

// export default function useApiErrorModal() {
//   const router = useRouter();
//   const t = useTranslations("ApiErrorModal");
//   const [acknowledged, setAcknowledged] = useState(false);

//   const handleAcknowledge = () => {
//     setAcknowledged(true);
//     tokenStorage.clearToken();
//     router.replace("/");
//   };

//   return { t, acknowledged, handleAcknowledge };
// }

import { useTranslations } from "next-intl";
import { useApiErrorModalStore } from "@/stores/apiErrorModal.store";
import { tokenStorage } from "@/lib/tokenStorage";
import { useRouter } from "@/i18n/navigation";

export default function useApiErrorModal() {
  const router = useRouter();
  const t = useTranslations("ApiErrorModal");
  const { visible, hide } = useApiErrorModalStore();

  const handleAcknowledge = () => {
    hide();
    tokenStorage.clearToken();
    router.replace("/");
  };

  return {
    t,
    acknowledged: !visible,
    handleAcknowledge,
  };
}
