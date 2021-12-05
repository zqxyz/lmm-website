import React from 'react';

/**
 * Hacky technique to preload images to mitigate pop-in after first load
 * by defining multiple images to the background of an element
 * 
 * @returns discreet HTML element with multiple background images
 * 
 * Add images to list of backgroundImages (in #preload div's style object
 * contained within this component) to cache upon loading of any page on
 * this site. Only images above the fold should be included here. No more
 * than ~2.5MB total images should be loaded here.
 */
const Preload = () => {
    return (
        <div
            id="preload"
            style={{
                height: '0px',
                backgroundImage:
                    'url(images/fadedBoxes.jpg),'
                    + 'url(images/fadedMasthead.jpg),'
                    + 'url(images/movingAction.JPG)'
            }}
        >
            &nbsp;
        </div>
    )
}

export default Preload