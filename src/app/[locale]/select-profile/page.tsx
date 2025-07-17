"use client";

import { useSelectProfile } from "./selectProfile.hooks";
import Image from "next/image";
import style from "./selectProfile.module.css";
import AddProfileModal from "@/components/AddProfileModal";

const SelectProfile = () => {
  const {
    t,
    profile,
    showAddModal,
    handleSelectProfile,
    handleSignOut,
    handleSubmit,
    handleAddProfile,
    setShowAddModal,
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
      </div>
      <div className={style.button__group}>
        <button
          className={style.profile__manage_button}
          onClick={handleAddProfile}
        >
          {t("manageProfiles")}
        </button>
        <button
          className={style.profile__manage_button}
          onClick={handleSignOut}
        >
          {t("signOut")}
        </button>
      </div>

      {showAddModal && (
        <AddProfileModal
          onClose={() => setShowAddModal(false)}
          onSubmit={handleSubmit}
        />
      )}
    </main>
  );
};

export default SelectProfile;
