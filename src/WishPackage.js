import React, { useEffect, useState } from 'react';

export function WishPackage({ functionToCall }) {


    const sound = new Audio('https://firebasestorage.googleapis.com/v0/b/funnysoundswish.appspot.com/o/Sounds%2FUploaded%2FSound.mp3?alt=media&token=4cb9d5b8-d108-4966-b087-28ac9275a81c'); // this sound is loud

    return (
        <div>
            <h1>Wish Package Counter</h1>
            <p>Wish Package Counter</p>
            <button onClick={() => {
                sound.play();
            }}>funny</button>
        </div>
    );
}

