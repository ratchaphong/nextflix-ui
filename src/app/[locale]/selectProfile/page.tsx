"use client";
import { useSelectProfile } from "./selectProfile.hooks";
import Image from "next/image";
import style from "./select_profile.module.css";

const SelectProfile = () => {
  const { profiles, handleSelect } = useSelectProfile();

  return (
    <main>
      <div className={style.selectProfileContainer}>
        <h1 className={style.selectProfileTitle}>เลือกผู้ชม</h1>
        <div className={style.profileGrid}>
          {profiles.map((profile) => (
            <div key={profile.name} className={style.profileCard}>
              <div
                className={style.profileImageWrapper}
                onClick={() => handleSelect}
              >
                <Image
                  src={profile.img}
                  alt={profile.name}
                  width={128}
                  height={128}
                />
              </div>
              <div className={style.profileName}>
                {profile.name}
                {profile.locked && " 🔒"}
              </div>
            </div>
          ))}
        </div>
        <button className={style.manageButton}>
          <p>จัดการโปรไฟล์</p>
        </button>
      </div>
    </main>
  );
};

export default SelectProfile;
