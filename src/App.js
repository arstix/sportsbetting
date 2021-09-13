import "./App.css";
import Header from "./header.js";
import Title from "./title.js";
import Listview from "./listview.js";
import Footer from "./footer.js";
import { dataList, dataCorousel } from "./data";
import { useState, useEffect } from "react";
function App() {
  const [info, setInfo] = useState(dataList); //data stored as state
  const [displayMode, setDisplayMode] = useState(false);
  const sorting = () => {
    info[0] === dataList[0] ? setInfo(dataList) : setInfo(dataCorousel);
    const sortedData = [...info]; //deep copying state
    sortedData.sort(function (a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    setInfo(sortedData);
  };

  const toggle = () => {
    const toggleState = displayMode;
    setDisplayMode(!toggleState);
    info[0] === dataList[0] ? setInfo(dataCorousel) : setInfo(dataList);
    console.log("TOGGLE", displayMode);
  };

  useEffect(() => {
    console.log("Use effect", info);
  }, [info]);

  return (
    <div className="App">
      <Header />
      <Title sorting={sorting} toggle={toggle} />
      <Listview data={info} displayMode={displayMode} />
      <Footer />
    </div>
  );
}

export default App;
