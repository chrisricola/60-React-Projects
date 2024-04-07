import crashaudio from '../sounds/crash.mp3';
import tom2audio from '../sounds/tom-2.mp3';
import kickaudio from '../sounds/kick-bass.mp3';
import snareaudio from '../sounds/snare.mp3';
import tom1audio from '../sounds/tom-1.mp3';
import tom3audio from '../sounds/tom-2.mp3';
import tom4audio from '../sounds/tom-4.mp3';

import crash from "../images/crash.png";
import tom2 from "../images/tom2.png";
import kick from "../images/kick.png";
import snare from "../images/crash.png";
import tom1 from "../images/crash.png";
import tom3 from "../images/crash.png";
import tom4 from "../images/crash.png";

const list = [
    { name: "crash", img: crash, audio: crashaudio },
    { name: "Kickbass", img: kick, audio: kickaudio},
    { name: "Snare", img: snare, audio: snareaudio},
    { name: "Tom1", img: tom1, audio: tom1audio},
    { name: "Tom2", img: tom2, audio: tom2audio},
    { name: "Tom3", img: tom3, audio: tom3audio},
    { name: "Tom4", img: tom4, audio: tom4audio}
];

export default list;