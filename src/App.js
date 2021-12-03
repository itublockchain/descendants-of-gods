import { BrowserRouter, Route, Routes } from "react-router-dom";

// @ts-ignore
import { DndProvider } from "react-dnd";
import Game from "pages/Game";
import { HTML5Backend } from "react-dnd-html5-backend";
import Landing from "pages/Landing";
import Marketplace from "pages/Marketplace";
import { useEffect } from "react";
import { ethers } from "ethers";
import requestAccounts from "utils/requestAccounts";
import { useDispatch } from "react-redux";
import { signedIn } from "store/reducers/accounts";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      const accounts = await provider.listAccounts();
      if (accounts.length > 0) {
        requestAccounts(dispatch);
      }
      else {
        dispatch(signedIn(false));
      }
    }
    fetchData();
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/game" element={<Game />} />
          <Route path="/market" element={<Marketplace />} />
        </Routes>
      </BrowserRouter>
    </DndProvider>
  );
};

export default App;
