import React from 'react';
import {ToastContainer} from 'react-toastify';
import styled from 'styled-components';
import './App.css';
import AddNewForm from './features/AddNewForm/AddNewForm';
import {ListTodo} from "./features/ListTodo";
 import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <StyledMainContentApp>
        <div className="leftSide">
          <AddNewForm />
        </div>
        <div className="rightSide">
          <ListTodo />
        </div>
      </StyledMainContentApp>
    </div>
  );
}

const StyledMainContentApp = styled.div`
  @media (min-width: ${(p) => p.theme.breakPoints.breakMedium}) {
   display: flex;
   justify-content: space-between;
  }
  .leftSide,
  .rightSide {
    text-align: center;
    width: 100%;
  }
`;

export default App;
