import React from "react";


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