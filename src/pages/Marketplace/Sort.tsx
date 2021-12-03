import { ChangeEvent, useState } from "react";

import Badge from "components/Badge";
import Button from "components/Button";
import Input from "components/Input";
import { ReactComponent as SearchIcon } from "assets/icons/edit/search.svg";
import Typography from "components/Typography";
import styles from "./Marketplace.module.scss";

const Sort = () => {
  const [value, setValue] = useState<string>("");

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
        <Badge className={styles.badge}>asfasfasfafs</Badge>
        <Badge className={styles.badge}>asfafs</Badge>
        <Badge className={styles.badge}>asfafs</Badge>
        <Badge className={styles.badge}>asfasafs</Badge>
        <Badge className={styles.badge}>asfasfafs</Badge>
        <Badge className={styles.badge}>asfafsasfasf</Badge>
      </div>
    </div>
  );
};

export { Sort };
