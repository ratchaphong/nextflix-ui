"use client";

import { useSelectProfile } from "./selectProfile.hooks";
import Image from "next/image";
import style from "./selectProfile.module.css";

const SelectProfile = () => {
  const { t, members, handleSelect } = useSelectProfile();

  return (
    <main>
      <div className={style.profile__wrapper}>
        <h1 className={style.profile__title}>{t("title")}</h1>
        <div className={style.profile__grid}>
          {members.map((m) => (
            <div key={m.name} className={style.profile__card}>
              <div
                className={style.profile__image}
                onClick={() => handleSelect()}
              >
                <Image src={m.img} alt={m.name} width={128} height={128} />
              </div>
              <div className={style.profile__name}>
                {m.name}
                {m.locked && " 🔒"}
              </div>
            </div>
          ))}
        </div>
        <button className={style.profile__manage_button}>
          {t("manageProfiles")}
        </button>
      </div>
    </main>
  );
};

export default SelectProfile;
