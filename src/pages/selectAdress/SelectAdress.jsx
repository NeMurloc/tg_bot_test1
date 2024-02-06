import React, { useEffect } from "react";
import AdressList from "../../components/SelectAdress/adressList/AdressList";
import cl from "./SelectAdress.module.css"

const SelectAdress = function () {

    useEffect(() => {
        let tg = window.Telegram.WebApp;

        tg.expand();

        tg.MainButton.textColor = "#FFFFFF";
        tg.MainButton.color = "#50A0FF";
        // tg.MainButton.text = "Выбрать точку";


        document.addEventListener("DOMContentLoaded", function () {

            var radioButtons = document.querySelectorAll('input[type="radio"][name="address"]');

            radioButtons.forEach(function (radioButton) {

                radioButton.addEventListener("change", function () {
                    if (this.checked) {
                        tg.MainButton.text = "Вы выбрали " + this.value;
                        tg.MainButton.show();

                    }
                });
            });
        });

        tg.enableClosingConfirmation();

    }, [])

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