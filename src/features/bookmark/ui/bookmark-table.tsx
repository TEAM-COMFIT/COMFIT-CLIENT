import { BookmarkCheckbox } from "./bookmark-checkbox";
import * as styles from "./bookmark-table.css";

import type { BookmarkRow } from "../config/bookmark-page.constants";

interface BookmarkTableProps {
  rows: BookmarkRow[];
  pageSize: number;
  selectedIds: number[];
  isAllSelected: boolean;
  onToggleAll: (checked: boolean) => void;
  onToggleRow: (rowId: number, checked: boolean) => void;
  onClickCompany: (companyId: number) => void;
}

const TABLE_COLUMN_COUNT = 4;

const BookmarkTable = ({
  rows,
  pageSize,
  selectedIds,
  isAllSelected,
  onToggleAll,
  onToggleRow,
  onClickCompany,
}: BookmarkTableProps) => {
  const placeholderRowCount = rows.length > 0 ? pageSize - rows.length : 0;

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
                checked={selectedIds.includes(row.id)}
                onCheckedChange={(checked) => onToggleRow(row.id, checked)}
                ariaLabel={`${row.companyName} 선택`}
              />
            </td>
            <td className={`${styles.bodyCell} ${styles.leftCell}`}>
              <button
                type="button"
                className={styles.companyButton}
                onClick={() => onClickCompany(row.id)}
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

        {Array.from({ length: placeholderRowCount }).map((_, idx) => (
          <tr key={`placeholder-${idx}`} aria-hidden="true">
            {Array.from({ length: TABLE_COLUMN_COUNT }).map((__, colIdx) => {
              let alignClass = styles.centerCell;
              if (colIdx === 0) alignClass = styles.checkboxCell;
              if (colIdx === 1) alignClass = styles.leftCell;

              return (
                <td
                  key={`placeholder-cell-${idx}-${colIdx}`}
                  className={`${styles.bodyCell} ${alignClass} ${styles.placeholderCell}`}
                >
                  &nbsp;
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { BookmarkTable };
