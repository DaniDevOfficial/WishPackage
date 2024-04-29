import React from 'react';
export function WishPackage() {
  const sound = new Audio('https://firebasestorage.googleapis.com/v0/b/funnysoundswish.appspot.com/o/Sounds%2FUploaded%2FSound.mp3?alt=media&token=4cb9d5b8-d108-4966-b087-28ac9275a81c'); // this sound is loud

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Wish Package Counter"), /*#__PURE__*/React.createElement("p", null, "Wish Package Counter"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      alert('Its loud and now your problem');
      sound.play();
    }
  }, "DOOOO NOOTTT CLICK FOR THE LOVE OF GOD PLEASE \uD83E\uDD2C\uD83E\uDD2C\uD83E\uDD2C\uD83E\uDD2C"));
}