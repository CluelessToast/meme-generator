import React from "react";


export default function Meme(){
    return(
        <main>
            <form className="form">
                <input className="form--input"  type="text" placeholder="Top Text" />
                <input className="form--input" type="text" placeholder="Bottom text" />
                <button className="form--button">Get a new image</button>
            </form>
        </main>
    )
}