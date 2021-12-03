import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DndProvider } from "react-dnd";
import Game from "pages/Game";
import { HTML5Backend } from "react-dnd-html5-backend";
import Landing from "pages/Landing";
import Snowfall from "react-snowfall";
import React, { useEffect, useState } from "react";

const App = () => {
    const [snowfallHeight, setSnowfallHeight] = useState(0);

    useEffect(() => {
        const listener = () => {
            setSnowfallHeight(document.body.offsetHeight);
        };
        document.addEventListener("DOMContentLoaded", listener);

        return () => {
            document.removeEventListener("DOMContentLoaded", listener);
        };
    }, []);

    console.log(document.body.offsetHeight);
    return (
        <DndProvider backend={HTML5Backend}>
            <Snowfall
                style={{ height: snowfallHeight || window.innerHeight }}
                snowflakeCount={120}
            />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/game" element={<Game />} />
                </Routes>
            </BrowserRouter>
        </DndProvider>
    );
};

export default App;
