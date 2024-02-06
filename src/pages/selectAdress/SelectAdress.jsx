import React from "react";
import AdressList from "../../components/SelectAdress/adressList/AdressList";
import cl from "./SelectAdress.module.css"

const SelectAdress = function () {



    return (
        <div className={cl.block}>
            <h2>Выберите адрес</h2>
            <AdressList value={"adress1"} />
            <AdressList value={"adress2"} />
            <AdressList value={"adress3"} />
            <AdressList value={"adress4"} />
            <AdressList value={"adress5"} />
        </div>
    )
}

export default SelectAdress;