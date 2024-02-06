import React from "react";
import photo from "../../../photo/photo.jpeg"
import cl from "./AdressList.module.css";

const AdressList = function ({ value }) {
    return (
        <div className={cl.list}>
            <div className={cl.radio}>
                <label>
                    <input  type="radio" name="address" value="address1" />
                </label>
            </div>

            <img className={cl.img} src={photo} alt="Точка 1" />
            <h4>Пр. Стачек 12</h4>

        </div>
    )
}

export default AdressList;