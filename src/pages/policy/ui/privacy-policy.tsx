import {
  TERMS_OF_PRIVACY_INFO,
  type Article,
  type Section,
} from "@/shared/config";

import * as styles from "../policy-page.css";

export const PrivacyPolicy = () => {
  return (
    <div className={`${styles.content} ${styles.flexColumn({ gap: 40 })}`}>
      {/** 개인정보처리방침 타이틀 */}
      <div className={styles.flexColumn({ gap: 16 })}>
        <div>
          <h3 className={styles.textStyle()}>{TERMS_OF_PRIVACY_INFO.title}</h3>
          <p>{TERMS_OF_PRIVACY_INFO.date}</p>
        </div>
        <p>{TERMS_OF_PRIVACY_INFO.description}</p>
      </div>
      {/** 조항 리스트 (ex. 1. 개인정보의 수집 및 이용) */}
      {TERMS_OF_PRIVACY_INFO.sections.map((section: Section) => (
        <section key={section.title} className={styles.flexColumn({ gap: 16 })}>
          {/* 조항 타이틀 및 설명 */}
          <div>
            <h4 className={styles.textStyle({ type: "title2" })}>
              {section.title}
            </h4>
            <p>{section.description}</p>
          </div>
          {/** 조항 상세설명 */}
          <div className={styles.flexColumn({ gap: 16 })}>
            {section.articles?.map((article: Article, idx) => (
              <article
                key={`article-${idx}`}
                className={styles.flexColumn({ gap: 8 })}
              >
                {/** 조항 상세설명의 타이틀 (ex. 가. 회원가입 및 계정 관리) */}
                {article.title && (
                  <p className={styles.textStyle({ type: "title3" })}>
                    {article.title}
                  </p>
                )}
                <div>
                  {article.content && (
                    <div>
                      {/* 줄글 형태의 컨텐츠 */}
                      {"text" in article.content && (
                        <div>{article.content.text}</div>
                      )}
                      {/* 테이블 형태의 컨텐츠 */}
                      {"table" in article.content && (
                        <div className={`${styles.tableWrapper}`}>
                          <table className={`${styles.table}`}>
                            <thead className={styles.thead}>
                              <tr>
                                {article.content.table.header.map(
                                  (th, thIdx) => (
                                    <th
                                      key={thIdx}
                                      className={`${styles.tCell} ${styles.th}`}
                                    >
                                      {th}
                                    </th>
                                  )
                                )}
                              </tr>
                            </thead>
                            <tbody>
                              {article.content.table.rows.map((row, rowIdx) => (
                                <tr key={rowIdx}>
                                  {row.map((td, tdIdx) => (
                                    <td key={tdIdx} className={styles.tCell}>
                                      {td}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
          {/** 조항 추가사항 */}
          {section.alert && <div>{section.alert}</div>}
        </section>
      ))}
    </div>
  );
};
