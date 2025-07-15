"use client";

import { useSelectProfile } from "./selectProfile.hooks";
import Image from "next/image";
import style from "./selectProfile.module.css";

const SelectProfile = () => {
  const { t, members, handleSelectUser, handleSignOut } = useSelectProfile();

  return (
    <main className={style.profile__wrapper}>
      <h1 className={style.profile__title}>{t("title")}</h1>
      <div className={style.profile__grid}>
        {members.map((m) => (
          <div key={m.name} className={style.profile__card}>
            <div
              className={style.profile__image}
              onClick={() => handleSelectUser(m)}
            >
              <Image src={m.img} alt={m.name} width={128} height={128} />
            </div>
            <p className={style.profile__name}>
              {m.name}
              {m.locked && " 🔒"}
            </p>
          </div>
        ))}
      </div>
      <button className={style.profile__manage_button} onClick={handleSignOut}>
        {t("signOut")}
      </button>
    </main>
  );
};

export default SelectProfile;
