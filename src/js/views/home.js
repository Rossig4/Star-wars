import React, { useState, useEffect, useContext } from "react";
import React from "react";
import star from "../../img/star.jpg";
import "../../styles/home.scss";
import Card from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className= "container">
            <h1 className="">Personajes></h1>
			<div className="mt-4 scrolling-wrapper-flexbox">
                {store.personajes.map((item, index) => {
                    return (
                        <div key = {index}>
                        <CardPersonajes name={item.name} index={index} />;
                        </div>
                    );
            })}
            </div>
			<h1 className="">Planetas</h1>
            <div className="mt-4 scrolling-wrapper-flexbox">
                {store.planetas.map((item, index) => {
                    return (
                        <div key = {index}>
                    <CardPlanetas name={item.name} index={index} />;
                    </div>
                    )
                })}
            </div>
        </div>
    );
            }