import styles from "./CardSelector.module.scss";
import Typography from "components/Typography";
import { Slot } from "pages/Game/CardSelector/Slot";
import Button from "components/Button";
import { useDispatch, useSelector } from "react-redux";
import { setStage, STAGES } from "store/reducers/game";
import { RootState } from "store";
import { Fragment, useEffect, useState } from "react";
import CardWrapper from "components/CardWrapper";

function CardSelector() {
  const { GodContract } = useSelector((state: RootState) => state.contracts);
  const { signer } = useSelector((state: RootState) => state.account);
  const dispatch = useDispatch();
  const [cards, setCards] = useState([]);
  const [oldCards, setOldCards] = useState([]);

  const [selectedDeck, setSelectedDeck] = useState([-1, -1, -1, -1, -1]);

  useEffect(() => {
    if (!GodContract || !signer) return;

    async function fetchData() {
      const res = await GodContract.connect(signer).getBalances();
      const numbers = res.map((item: any) => {
        return item.toNumber();
      });
      setCards(numbers);
      setOldCards(numbers);
    }
    fetchData();
  }, [GodContract, signer]);

  return (
    <div className={styles.wrapper}>
      <Typography variant="title1" weight="semibold">
        Customize your deck
      </Typography>
      <div className={styles.cardsWrapper}>
        <div className={styles.cards}>
          {cards.map((item, index: any) => (
            <Fragment key={index}>
              {item !== 0 && (
                <CardWrapper draggable index={index}>
                  <div className={styles.cardBody}>
                    <Typography
                      className={styles.cardText}
                      variant="title4"
                      weight="medium"
                    >
                      {item}
                    </Typography>
                  </div>
                </CardWrapper>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      <div className={styles.slots}>
        {new Array(5).fill(0).map((item, index) => (
          <Slot
            old={oldCards}
            cards={cards}
            setCards={setCards}
            selectedDeck={selectedDeck}
            setSelectedDeck={setSelectedDeck}
            index={index}
          />
        ))}
      </div>

      <Button onClick={() => dispatch(setStage(STAGES.InGame))} size="large">
        Enter Match
      </Button>
    </div>
  );
}

export default CardSelector;
