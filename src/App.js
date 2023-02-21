import React from "react";
import info from "./Components/CardsItems.jsx";
import Title from './Components/Title.jsx'
import TeamMember from "./Components/TeamMember.jsx";

function App() {

    let showEle = info.map((e) => {
        return <TeamMember key={e.id} Title={e.title} image={e.Image1} text={e.cardText} />;
    });
    return (
      <div className="container">
        <div className="allElement">
          <Title />
          <div className="row justify-content-center">
            {showEle}
          </div>
        </div>
      </div>
    );
}
export default App;
