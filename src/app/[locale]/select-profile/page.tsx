"use client";

import { useSelectProfile } from "./selectProfile.hooks";
import Image from "next/image";
import style from "./selectProfile.module.css";

const SelectProfile = () => {
  const { t, profile, handleSelectProfile, handleSignOut } = useSelectProfile();

  if (!profile) return null;

  return (
    <main className={style.profile__wrapper}>
      <h1 className={style.profile__title}>{t("title")}</h1>
      <div className={style.profile__grid}>
        {profile.profiles.map((p) => (
          <div key={p.name} className={style.profile__card}>
            <div
              className={style.profile__image}
              onClick={() => handleSelectProfile(p)}
            >
              <Image
                src={p.image || "/image/avatar.jpg"}
                alt={p.name}
                width={128}
                height={128}
              />
            </div>
            <p className={style.profile__name}>
              {p.name}
              {p.isLocked && " 🔒"}
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
