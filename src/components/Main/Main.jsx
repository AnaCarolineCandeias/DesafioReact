import React from "react";


import Scooby from "./ImagensMain/scooby.png";
import Ben10 from "./ImagensMain/ben10.png";
import Looney from "./ImagensMain/looney.png";
import Gumball from "./ImagensMain/gumball.png";
import Meninas from "./ImagensMain/meninas.png";
import TomeJerry from "./ImagensMain/tomejerry.png";

import * as S from "./MainStyle.jsx"

function Main() {

    return(

        <main>
            
            <S.FirstSection>
                <img src={Scooby} alt="" />
                <img src={Ben10} alt="" />
                <img src={Looney} alt="" />
            </S.FirstSection>

            <S.SecondSection>
                <img src={Gumball} alt="" />
                <img src={Meninas} alt="" />
                <img src={TomeJerry} alt="" />
            </S.SecondSection>

        </main>
    )
}

export default Main