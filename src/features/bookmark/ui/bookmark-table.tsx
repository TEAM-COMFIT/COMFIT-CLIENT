import { BookmarkCheckbox } from "./bookmark-checkbox";
import * as styles from "./bookmark-table.css";

import type { BookmarkRow } from "../types/bookmark.type";

interface BookmarkTableProps {
  rows: BookmarkRow[];
  selectedIds: Set<number>;
  isAllSelected: boolean;
  onToggleAll: (checked: boolean) => void;
  onToggleRow: (rowId: number, checked: boolean) => void;
  onClickCompany: (companyId: number) => void;
}

const BookmarkTable = ({
  rows,
  selectedIds,
  isAllSelected,
  onToggleAll,
  onToggleRow,
  onClickCompany,
}: BookmarkTableProps) => {
  return (
    <table className={styles.table}>
      <caption className={styles.srOnly}>기업 북마크 목록</caption>
      <colgroup>
        <col className={styles.checkboxColumn} />
        <col className={styles.companyColumn} />
        <col className={styles.dateColumn} />
        <col className={styles.statusColumn} />
      </colgroup>
      <thead>
        <tr>
          <th className={`${styles.headerCell} ${styles.checkboxCell}`}>
            <BookmarkCheckbox
              checked={isAllSelected}
              onCheckedChange={onToggleAll}
              ariaLabel="전체 선택"
            />
          </th>
          <th className={`${styles.headerCell} ${styles.leftCell}`}>기업명</th>
          <th className={`${styles.headerCell} ${styles.centerCell}`}>
            스크랩일
          </th>
          <th className={`${styles.headerCell} ${styles.centerCell}`}>
            경험 연결 여부
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td className={`${styles.bodyCell} ${styles.checkboxCell}`}>
              <BookmarkCheckbox
                checked={selectedIds.has(row.id)}
                onCheckedChange={(checked) => onToggleRow(row.id, checked)}
                ariaLabel={`${row.companyName} 선택`}
              />
            </td>
            <td className={`${styles.bodyCell} ${styles.leftCell}`}>
              <button
                type="button"
                className={styles.companyButton}
                onClick={() => onClickCompany(row.companyId)}
              >
                {row.companyName}
              </button>
            </td>
            <td className={`${styles.bodyCell} ${styles.centerCell}`}>
              {row.scrapedAt}
            </td>
            <td className={`${styles.bodyCell} ${styles.centerCell}`}>
              <span
                className={styles.connectionStatus({
                  connected: row.isConnected,
                })}
              >
                연결
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { BookmarkTable };
