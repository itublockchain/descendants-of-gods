import styles from "./CardSelector.module.scss";
import Typography from "components/Typography";
import { Slot } from "pages/Game/CardSelector/Slot";
import Button from "components/Button";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCards, setStage, STAGES } from "store/reducers/game";
import { RootState } from "store";
import { Fragment, useEffect, useState } from "react";
import CardWrapper from "components/CardWrapper";
import { useRequest } from "hooks/useRequest";
import { clashABI } from "abi";
import { ethers } from "ethers";
import { resolver } from "utils/resolver";
import { setClashContract } from "store/reducers/contracts";

function CardSelector() {
  const { GodContract, MatchMakerContract, SonsContract } = useSelector(
    (state: RootState) => state.contracts
  );
  const {
    signer,
    address: signerAddress,
    provider
  } = useSelector((state: RootState) => state.account);
  const dispatch = useDispatch();
  const [cards, setCards] = useState([]);
  const [oldCards, setOldCards] = useState([]);

  const [selectedDeck, setSelectedDeck] = useState([-1, -1, -1, -1, -1]);

  const joinMatchReq = async () => {
    await MatchMakerContract.connect(signer).registerToMatch(1, selectedDeck, {
      gasLimit: "2000000"
    });
  };

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
  }, [GodContract, signer, MatchMakerContract]);

  const enterMatch = async () => {
    if (selectedDeck.includes(-1)) {
      alert("Select 5 cards");
      return;
    }

    const item = ethers.utils.parseEther("999999999999999");
    await SonsContract.connect(signer).approve(
      MatchMakerContract.address,
      item,
      { gasLimit: "2000000" }
    );

    try {
      await resolver({
        contract: MatchMakerContract,
        eventName: "GameStarted",
        promise: joinMatchReq,
        onStart: () => dispatch(setStage(STAGES.MatchPlayers))
      })
        .then(([gameId, address]: any) => {
          const ClashContract = new ethers.Contract(
            address,
            clashABI,
            provider
          );
          dispatch(setClashContract(ClashContract));
        })
        .catch((err) => console.log(err));
      dispatch(setStage(STAGES.InGame));
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    dispatch(setSelectedCards(selectedDeck));
  }, [selectedDeck]);

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
      <div className="d-flex gap-16">
        <Button
          onClick={() => dispatch(setStage(STAGES.SelectMap))}
          size="large"
        >
          Go back
        </Button>
        <Button onClick={enterMatch} size="large">
          Enter Match
        </Button>
      </div>
    </div>
  );
}

export default CardSelector;
