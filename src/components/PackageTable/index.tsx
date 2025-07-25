"use client";

import { useTranslations } from "next-intl";
import styles from "./PackageTable.module.css";
import { useState } from "react";
import { Package } from "@/types/global";
import { useFormikContext } from "formik";
import { RegisterFormValues } from "@/types/login.form";

export default function PackageTable({ packages }: { packages: Package[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { setFieldValue, submitForm } = useFormikContext<RegisterFormValues>();

  const t = useTranslations("Register");

  return (
    <div className={styles.table__wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th />
            {packages.map((pkg) => (
              <th key={pkg.id}>{pkg.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>Price</span>
              {t("price")}
            </td>
            {packages.map((pkg, index) => (
              <td
                key={pkg.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                ฿{pkg.price}
              </td>
            ))}
          </tr>
          <tr>
            <td>
              <span>Resolution</span>
              {t("resolution")}
            </td>
            {packages.map((pkg, index) => (
              <td
                key={pkg.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {pkg.resolution}
              </td>
            ))}
          </tr>
          <tr>
            <td>
              <span>Profiles</span>
              {t("profiles")}
            </td>
            {packages.map((pkg, index) => (
              <td
                key={pkg.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {pkg.maxProfiles}
              </td>
            ))}
          </tr>
          <tr>
            <td>
              <span>Members</span>
              {t("members")}
            </td>
            {packages.map((pkg, index) => (
              <td
                key={pkg.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {pkg.maxMembers}
              </td>
            ))}
          </tr>
          <tr className={styles.select__plan}>
            <td></td>
            {packages.map((pkg, index) => (
              <td
                key={pkg.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={
                  hoveredIndex === index
                    ? styles.select__plan__visible
                    : undefined
                }
              >
                <button
                  type="button"
                  disabled={pkg.id !== "premium-id"}
                  onClick={async () => {
                    await setFieldValue("packageId", pkg.id);
                    submitForm();
                  }}
                >
                  {t("selectButton")}
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
