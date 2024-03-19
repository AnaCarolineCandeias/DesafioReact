import React from "react";

import Wb from "./ImagensFooter/wb.png"
import Github from "./ImagensFooter/github.png"
import Linkedin from "./ImagensFooter/linkedin.png"

import * as S from "./FooterStyle"

function Footer() {
    
    return(
        <footer>
            <S.FirstSectionFooter>
                <img src={Wb} alt="" />

                <S.ListFooter>
                    <li>Sobre nós</li>
                    <li>Produtos</li>
                    <li>Personagens</li>
                </S.ListFooter>

                <S.SocialNetworkFooter>
                    <img src={Github} alt="" />
                    <img src={Linkedin} alt="" />                
                </S.SocialNetworkFooter>
                
            </S.FirstSectionFooter>

            
            <S.SecondSectionFooter>
                <S.Credits>© 2024 Cartoon Network</S.Credits>
            </S.SecondSectionFooter>
        </footer>
    )
}

export default Footer