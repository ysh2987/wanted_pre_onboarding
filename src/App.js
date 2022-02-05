import styled from "styled-components";
import Toggle from "./component/Toggle";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import Modal from "./component/Modal";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";
import "./App.css";

function App() {
  return (
    <Main>
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <AutoComplete />
      <ClickToEdit />
    </Main>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;
