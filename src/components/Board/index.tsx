import Cell from "components/Cell";
import { RootState } from "store";
import styles from "./Board.module.scss";
import { useSelector } from "react-redux";

const Board = () => {
  const { table } = useSelector((state: RootState) => state.game);
  const { rows, columns } = table || { rows: 5, columns: 5 };

  return (
    <div>
      {new Array(rows).fill(0).map((_, rindex) => (
        <div key={rindex} className={styles.row}>
          {new Array(columns).fill(0).map((_, cindex) => (
            <div key={cindex} className={styles.column}>
              <Cell row={rindex} column={cindex} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
