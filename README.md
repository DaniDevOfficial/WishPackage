# Wish Package 🤬🤬🤬🔥🔥🔥🥱🥱🥱😣

Wish Package is a simple school exercise on how react packages work. It is just a button that makes a sound when pressed.

## Installation

You can install Wish Package via npm. Make sure you have React installed in your project.

[![npm](https://img.shields.io/npm/v/wish-package)](https://www.npmjs.com/package/wish-package)

```bash
npm install wish-package
```
Or you can also install it from the local version with the path

```bash
npm install file:path/to/WishPackage
```

## Usage

```javascript
import React from 'react';
import { WishPackage } from 'wish-package';

function App() {
  return (
    <div>
      <WishPackage />
    </div>
  );
}

export default App;
```

## What does it do?

Its just a simple Component that plays a sound after the user Clicked a button. 

```jsx
import React, { useEffect, useState } from 'react';

export function WishPackage() {


    const sound = new Audio('https://firebasestorage.googleapis.com/v0/b/funnysoundswish.appspot.com/o/Sounds%2FUploaded%2FSound.mp3?alt=media&token=4cb9d5b8-d108-4966-b087-28ac9275a81c'); // this sound is loud

    return (
        <div>
            <h1>Wish Package Counter</h1>
            <p>Wish Package Counter</p>
            <button onClick={() => {
                alert('Its loud and now your problem');
                sound.play();
            }}>DOOOO NOOTTT CLICK FOR THE LOVE OF GOD PLEASE 🤬🤬🤬🤬</button>
        </div>
    );
}


```

## Props

Wish Package does not currently accept any props.

## License

just use it man (but i wouldnt recoment)


code at: https://github.com/DaniDevOfficial/WishPackage
