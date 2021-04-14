import GetOneCompany from "../../components/GetOneCompany";
import Navegation from "../../components/Navegation";
import GetOneDev from "../../components/GetOneDev";
import {useState} from 'react';

import {DivTam} from './sytle';
import {BtnAtt} from "../../stylesGlobal"
import NavegationMob from "../../components/NavegationMob";

const PagePesquisa = () =>{
    const [estado ,setEstado] = useState(false);
    
    const AlterEstato = () =>{
        setEstado(!estado);
    }
    console.log( window.screen.width )
    return(
        <div>
             {window.screen.width >= 600 ? <Navegation /> : <NavegationMob/>}
            <DivTam>
                <BtnAtt onClick={() => AlterEstato()} >{estado? "Pesquisa por Dev" : "Pesquisa por Empresaa"}</BtnAtt>
            </DivTam>
            {estado?
                <GetOneCompany/> :
                <GetOneDev/>
            }
        </div>
    )
}

export default PagePesquisa;