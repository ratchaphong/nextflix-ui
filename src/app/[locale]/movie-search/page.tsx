"use client";

import { Formik, Form } from "formik";
import styles from "./MovieSearch.module.css";
import useMovieSearch from "./MovieSearch.hooks";
import FormikTextInput from "@/components/FormikTextInput";
import { VideoItem } from "@/types/global";
import { useTranslations } from "next-intl";

export default function MovieSearchPage() {
  const t = useTranslations("MovieSearch");

  return (
    <main className={styles.container}>
      <Formik initialValues={{ keyword: "" }} onSubmit={() => {}}>
        <Form className={styles.form__container}>
          <FormikTextInput
            id="keyword"
            name="keyword"
            type="text"
            label={t("searchLabel")}
          />
          <MovieSearchResults t={t} />
        </Form>
      </Formik>
    </main>
  );
}

function MovieSearchResults({ t }: { t: (text: string) => string }) {
  const { results } = useMovieSearch();

  if (results.length === 0)
    return <div className={styles.not__found}>{t("notFound")}</div>;

  return (
    <div className={styles.grid}>
      {results.map((movie: VideoItem) => (
        <div key={movie.id} className={styles.card}>
          <img
            src={movie.thumbnail}
            alt={movie.title}
            className={styles.thumbnail}
          />
          <div className={styles.info}>
            <h2 className={styles.title}>{movie.title}</h2>
            <p className={styles.description}>{movie.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
