import { RootState } from "store";
import { clsnm } from "utils/clsnm";
import { cornerClassGenerator } from "utils/cornerClassGenerator";
import styles from "./Cell.module.scss";
import { DropTarget, useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import {
  playCard,
  setCell,
  setPlayedCards,
  updateCell
} from "store/reducers/game";
import Card from "components/Card";
import Typography from "components/Typography";
import { Fragment } from "react";

const tab = sessionStorage.getItem("tab");

type CellProps = {
  row: number;
  column: number;
  item?: any;
};

declare const window: Window & any;

const Cell = ({ row, column, item }: CellProps) => {
  const { table, moveStack, cellInfo, playerCards } = useSelector(
    (state: RootState) => state.game
  );
  const dispatch = useDispatch();
  const borderClass =
    cornerClassGenerator({
      row,
      column,
      rows: table.rows,
      columns: table.columns
    }) || "";

  const [{ isOver, droppable }, drop]: any = useDrop({
    accept: "1",
    drop: (item: any, monitor: any) => {
      if (!cellInfo[row][column]) {
        if (
          (item.oldRow && item.oldColumn) ||
          item.oldRow === 0 ||
          item.oldColumn === 0
        ) {
          dispatch(
            updateCell({
              i: item.oldRow,
              j: item.oldColumn,
              item: null
            })
          );
        }
        dispatch(
          updateCell({
            i: row,
            j: column,
            item: playerCards[item.index]
          })
        );
        dispatch(setPlayedCards({ id: item.index }));
      }
    },
    collect: (monitor: any) => ({
      isOver: !!monitor.isOver(),
      dropabble: monitor.getItem()
    })
  });

  console.log(cellInfo[row][column]?.tab, tab);

  return (
    <div
      ref={drop}
      className={clsnm(
        styles.cell,
        table?.rows - 1 === row && styles.lastRow,
        table?.columns - 1 === column && styles.lastCol,
        isOver && !cellInfo[row][column] && styles.over,
        droppable && !cellInfo[row][column] && styles.dropabble,
        cellInfo[row][column]?.tab === tab && styles.mine,
        styles[borderClass]
      )}
    >
      <div className={styles.data}>
        {cellInfo[row][column] && (
          <Fragment>
            <div className={styles.cellCard}>
              <Card
                oldRow={row}
                oldColumn={column}
                index={cellInfo[row][column].id}
                draggable
                style={{
                  backgroundImage: `url(${cellInfo[row][column].card.img})`
                }}
              />
            </div>
            <Typography
              className={clsnm(styles.meta, styles.damage)}
              variant="body2"
              weight="semibold"
            >
              {cellInfo[row][column].card.points}PW
            </Typography>
            <Typography
              className={clsnm(styles.meta, styles.health)}
              variant="body2"
              weight="semibold"
            >
              {cellInfo[row][column].card.health}HP
            </Typography>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default DropTarget(
  "any",
  {
    canDrop: () => {
      return true;
    }
  },
  (connect, monitor) => ({
    hello: "hello"
  })
)(Cell);
