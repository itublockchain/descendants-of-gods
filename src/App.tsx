import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DndProvider } from "react-dnd";
import Game from "pages/Game";
import { HTML5Backend } from "react-dnd-html5-backend";
import Landing from "pages/Landing";
import Marketplace from "pages/Marketplace";
import { useEffect } from "react";
import useRequestAccounts from "hooks/useRequestAccounts";

const App = () => {
  const { requestAccounts } = useRequestAccounts();

  useEffect(() => {
    async function fetchData() {
      await requestAccounts();
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
