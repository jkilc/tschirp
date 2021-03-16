import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap"
import logo from './assets/Untitled-Artwork.png'
import chirpy from '../src/assets/IMG-2708.PNG'


let Header = () => {
    return (
        <div className='header'>
            <img src={logo} />
        </div>
    )
}


const App = () => {
    let [username, setUsername, newIcon] = useState("");
    let [msg, setMsg] = useState("");
    let [chirp, setChirp] = useState([
        {
            newIcon: images[index],
            userName: "tangerines33",
            message: "lol why did i get out of bed today",
        },
        {
            newIcon: images[index],
            userName: "chicke_nsalad",
            message: "sdkfjslk*&*^DSS&D^&YDS..._..--.---",
        },
        {
            newIcon: images[index],
            userName: "peonyflower",
            message: "i found a cool stick in the woods",
        },
    ]);

    useEffect(() => { }, [chirp]);

    let chripClick = (e) => {
        e.preventDefault()
        let newChirp = { userName: username, message: msg };
        setChirp([...chirp, newChirp]);
        emptyInputs()

    };

    let emptyInputs = () => {
        setUsername('')
        setMsg('')
    }

    let myChirp = chirp.map((value, id) => {
        return (
            <>
                <img class="icon" src={App.newIcon} />
                <p key={id}>{`@${value.userName}:`}</p>
                <p>{value.message}</p>
                <hr></hr>
            </>
        );

    });

    




    return (
        <>
            <Header />

            <form>

                <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal">
                    <img class="chirpy-logo" src={chirpy} />
                    Chirp!!
</button>


                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Wanna Chirp?</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">

                                <form>
                                    <input id="un-input" value={username} type="text" placeholder="name"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <input id="chirp-input" value={msg} type="text" placeholder="message"
                                        onChange={(e) => setMsg(e.target.value)}

                                    />

                                    <button className="btn" onClick={(e) => chripClick(e)}>chirp!</button>


                                </form>
                            </div>

                        </div>
                    </div>
                </div>


            </form>


            <div class="card">
                <div class="card-body">
                    <hr></hr>
                    <p>{myChirp}</p>

                </div>
            </div>
        </>
    );
};

export default App;