import { ChangeEvent, useState } from "react";

import Badge from "components/Badge";
import Button from "components/Button";
import Input from "components/Input";
import { ReactComponent as SearchIcon } from "assets/icons/edit/search.svg";
import Typography from "components/Typography";
import styles from "./Marketplace.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { toggleSelect } from "store/reducers/markteplace";
import { clsnm } from "utils/clsnm";

const Sort = () => {
  const [value, setValue] = useState<string>("");
  const { cards, selected } = useSelector((state: RootState) => state.market);
  const dispatch = useDispatch();

  return (
    <div className={styles.sortWrapper}>
      <Input
        placeholder="Search cards"
        icon={<SearchIcon />}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <Button className={styles.button} onClick={() => null} type="secondary">
        Search
      </Button>

      <Typography className={styles.header} variant="title4" weight="medium">
        Card types
      </Typography>

      <div className={styles.badges}>
        {cards.map((item) => (
          <Badge
            onClick={() => dispatch(toggleSelect(item))}
            className={clsnm(
              styles.badge,
              selected?.includes(item) && styles.selected
            )}
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export { Sort };
