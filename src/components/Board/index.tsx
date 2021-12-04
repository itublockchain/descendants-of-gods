import Cell from "components/Cell";
import { RootState } from "store";
import styles from "./Board.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { arrToObj } from "utils/arrToObj";
import { useEffect } from "react";
import { setCell } from "store/reducers/game";

const Board = () => {
  const { table, cellInfo } = useSelector((state: RootState) => state.game);
  const { rows, columns } = table || { rows: 5, columns: 5 };
  const dispatch = useDispatch();

  useEffect(() => {
    const items = arrToObj(cellInfo);
    dispatch(setCell(items));
  }, []);

  return (
    <div>
      {cellInfo.map((item: any, rindex: any) => (
        <div key={rindex} className={styles.row}>
          {item.map((citem: any, cindex: any) => (
            <div key={cindex} className={styles.column}>
              <Cell item={citem} row={rindex} column={cindex} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
