import React from 'react';
import Descripcion from "../../data/Descripcion";  
import DescripcionImg from '../atoms/DescripcionImg';
import DescripcionText from '../atoms/DescripcionText';
import style from './DescripcionComponent.module.css';  
function DescripcionComponent() {
    return (
        <div className={style.grid}>
            {Descripcion.products.map((product, index) => (
                <div key={index} className={style.gridItem}>
                    <DescripcionImg Link={product.image} />
                    <DescripcionText text={product.description} />
                </div>
            ))}
        </div>
    );
}

export default DescripcionComponent;
