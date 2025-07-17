"use client";

import { useSelectProfile } from "./selectProfile.hooks";
import Image from "next/image";
import style from "./selectProfile.module.css";
import AddProfileModal from "@/components/AddProfileModal";

const SelectProfile = () => {
  const {
    t,
    profile,
    isManageMode,
    showAddModal,
    selectedProfile,
    handleSelectProfile,
    handleSignOut,
    handleSubmit,
    handleAddProfile,
    setIsManageMode,
    handleCloseModal,
  } = useSelectProfile();

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
        {isManageMode && profile.profiles.length < 4 && (
          <div className={style.profile__card}>
            <div className={style.profile__image} onClick={handleAddProfile}>
              <Image
                src={"/image/add.jpg"}
                alt={t("addProfile")}
                width={128}
                height={128}
                className={style.profile__add}
              />
            </div>
            <p className={style.profile__name}>{t("addProfile")}</p>
          </div>
        )}
      </div>
      <div className={style.button__group}>
        {!isManageMode ? (
          <button
            className={style.profile__manage_button}
            onClick={() => setIsManageMode(true)}
          >
            {t("manageProfiles")}
          </button>
        ) : (
          <>
            <button
              className={style.profile__manage_back}
              onClick={() => setIsManageMode(false)}
            >
              {t("back")}
            </button>
            <button
              className={style.profile__manage_button}
              onClick={handleSignOut}
            >
              {t("signOut")}
            </button>
          </>
        )}
      </div>

      {showAddModal && (
        <AddProfileModal
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
          data={selectedProfile}
        />
      )}
    </main>
  );
};

export default SelectProfile;
