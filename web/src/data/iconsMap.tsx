import React from 'react'
// import bpawn from '../assets/images/bpawn.svg'
// import wpawn from '../assets/images/wpawn.svg'
// import bbishop from '../assets/images/bbishop.svg'
// import wbishop from '../assets/images/wbishop.svg'
// import bknight from '../assets/images/bknight.svg'
// import wknight from '../assets/images/wknight.svg'
// import brook from '../assets/images/brook.svg'
// import wrook from '../assets/images/wrook.svg'
// import bqueen from '../assets/images/bqueen.svg'
// import wqueen from '../assets/images/wqueen.svg'
// import bking from '../assets/images/bking.svg'
// import wking from '../assets/images/wking.svg'

// const iconsMap = new Map()
// iconsMap.set('-1Pawn', bpawn)
// iconsMap.set('1Pawn', wpawn)
// iconsMap.set('bbishop', bbishop)
// iconsMap.set('wbishop', wbishop)
// iconsMap.set('bknight', bknight)
// iconsMap.set('wnight', wknight)
// iconsMap.set('brook', brook)
// iconsMap.set('wrook', wrook)
// iconsMap.set('bqueen', bqueen)
// iconsMap.set('wqueen', wqueen)

interface icons {
    [index: string]: JSX.Element
}

const piecesIcons: icons = {
    '-1Pawn': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237.73 292.27">
            <g data-name="Layer 2">
                <path
                    stroke="#e6e6e6"
                    strokeLinecap="round"
                    strokeWidth="14"
                    d="M118.86 7C97.37 7 80 23.33 80 43.49a35.13 35.13 0 007.59 21.71c-19 10.22-31.91 29.29-31.91 51.27 0 18.52 9.14 35 23.44 45.89C49.9 172 7 213 7 285.27h223.73c0-72.26-42.9-113.22-72.08-122.9 14.3-10.86 23.44-27.37 23.44-45.89 0-22-12.94-41.06-31.91-51.27a35.13 35.13 0 007.59-21.71c0-20.17-17.41-36.5-38.91-36.5z"
                    data-name="Layer 1"
                />
            </g>
        </svg>
    ),
    '1Pawn': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237.73 292.27">
            <g data-name="Layer 2">
                <path
                    fill="#e6e6e6"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeWidth="14"
                    d="M118.86 7C97.37 7 80 23.33 80 43.49a35.13 35.13 0 007.59 21.71c-19 10.22-31.91 29.29-31.91 51.27 0 18.52 9.14 35 23.44 45.89C49.9 172 7 213 7 285.27h223.73c0-72.26-42.9-113.22-72.08-122.9 14.3-10.86 23.44-27.37 23.44-45.89 0-22-12.94-41.06-31.91-51.27a35.13 35.13 0 007.59-21.71c0-20.17-17.41-36.5-38.91-36.5z"
                    data-name="Layer 1"
                />
            </g>
        </svg>
    ),
    '1Bishop': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359.81 363.11">
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path
                        fill="#e6e6e6"
                        stroke="#000"
                        stroke-strokeLinejoin="round"
                        strokeWidth="14"
                        d="M38.44 326.61c35.52-10.16 105.94 4.51 141.47-21 35.52 25.46 105.94 10.79 141.47 21a83 83 0 0131.44 21c-7.13 10.16-17.29 10.37-31.44 5.24-35.52-10.16-105.94 4.82-141.47-10.48-35.52 15.3-105.94.31-141.47 10.48-14.19 5.13-24.34 4.93-31.44-5.24 14.19-20.37 31.44-21 31.44-21z"
                    />
                    <path
                        fill="#e6e6e6"
                        stroke="#000"
                        stroke-strokeLinejoin="round"
                        strokeWidth="14"
                        d="M101.31 284.69c26.2 26.2 131 26.2 157.18 0 4.77-14.31.2-33.55-8.29-45.73a60.7 60.7 0 00-17.91-17.14c57.63-15.72 62.87-120.51-52.39-162.42-115.27 41.92-110 146.71-52.39 162.42-.77-.21-3.85 2.67-4.39 3.1a67.55 67.55 0 00-10 9.49c-10.92 12.79-17.21 34.07-11.81 50.28z"
                    />
                    <path
                        fill="#e6e6e6"
                        stroke="#000"
                        stroke-strokeLinejoin="round"
                        strokeWidth="14"
                        d="M206.1 33.2A26.2 26.2 0 11179.9 7a26.2 26.2 0 0126.2 26.2z"
                    />
                    <path
                        fill="#e6e6e6"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeWidth="14"
                        d="M127.51 221.82H232.3m-131 41.92h157.2m-78.6-151.95v52.39M153.71 138h52.39"
                    />
                </g>
            </g>
        </svg>
    ),
    '-1Bishop': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359.81 363.11">
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path
                        fill="#e6e6e6"
                        stroke="#000"
                        strokeWidth="14"
                        strokeLinejoin="round"
                        d="M38.44 326.61c35.52-10.16 105.94 4.51 141.47-21 35.52 25.46 105.94 10.79 141.47 21a83 83 0 0131.44 21c-7.13 10.16-17.29 10.37-31.44 5.24-35.52-10.16-105.94 4.82-141.47-10.48-35.52 15.3-105.94.31-141.47 10.48-14.19 5.13-24.34 4.93-31.44-5.24 14.19-20.37 31.44-21 31.44-21z"
                    />
                    <path
                        fill="#e6e6e6"
                        stroke="#000"
                        strokeWidth="14"
                        strokeLinejoin="round"
                        d="M101.31 284.69c26.2 26.2 131 26.2 157.18 0 4.77-14.31.2-33.55-8.29-45.73a60.7 60.7 0 00-17.91-17.14c57.63-15.72 62.87-120.51-52.39-162.42-115.27 41.92-110 146.71-52.39 162.42-.77-.21-3.85 2.67-4.39 3.1a67.55 67.55 0 00-10 9.49c-10.92 12.79-17.21 34.07-11.81 50.28z"
                    />
                    <path
                        fill="#e6e6e6"
                        stroke="#000"
                        strokeWidth="14"
                        strokeLinejoin="round"
                        d="M206.1 33.2A26.2 26.2 0 11179.9 7a26.2 26.2 0 0126.2 26.2z"
                    />
                    <path
                        fill="#e6e6e6"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeWidth="14"
                        d="M127.51 221.82H232.3m-131 41.92h157.2m-78.6-151.95v52.39M153.71 138h52.39"
                    />
                </g>
            </g>
        </svg>
    ),
    '1Rook': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296.93 328.37">
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path
                        fill="#e6e6e6"
                        stroke="#000"
                        strokeWidth="14"
                        strokeLinejoin="round"
                        d="M7 321.37h282.93v-31.44H7zM38.44 289.93V248H258.5v41.92zM28 59.39V7h41.87v21h52.39V7h52.39v21h52.39V7H269v52.39"
                    />
                    <path
                        fill="#e6e6e6"
                        stroke="#000"
                        strokeWidth="14"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        d="M237.54 221.82L253.26 248H43.68l15.72-26.2"
                    />
                    <path
                        fill="#e6e6e6"
                        stroke="#000"
                        stroke-width="14"
                        d="M237.54 90.83v126.68H59.39V90.83"
                    />
                    <path
                        fill="#e6e6e6"
                        stroke="#000"
                        strokeWidth="14"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        d="M269 59.39l-31.46 31.44H59.39L28 59.39"
                    />
                    <path
                        fill="#e6e6e6"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-width="14"
                        d="M28 59.39h241"
                    />
                </g>
            </g>
        </svg>
    ),
    '-1Rook': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296.93 328.37">
            <defs>
                <style>
                    {`.cls-1,.cls-2{stroke:#e6e6e6;stroke-linecap:round;stroke-width:14px}.cls-1{stroke-linejoin:round}`}
                </style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path
                        d="M7 321.37h282.93v-31.44H7zM38.44 289.93V248H258.5v41.92zM28 59.39V7h41.87v21h52.39V7h52.39v21h52.39V7H269v52.39M237.54 221.82L253.26 248H43.68l15.72-26.2"
                        className="cls-1"
                    />
                    <path
                        d="M237.54 90.83v126.68H59.39V90.83"
                        className="cls-2"
                    />
                    <path
                        d="M269 59.39l-31.46 31.44H59.39L28 59.39"
                        className="cls-1"
                    />
                    <path d="M28 59.39h241" className="cls-2" />
                </g>
            </g>
        </svg>
    ),
    '1Queen': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381.71 347.65">
            <defs>
                <style>
                    {`.cls-1,.cls-2{fill:#e6e6e6;stroke:#000;stroke-linejoin:round;stroke-width:14px}.cls-2{stroke-linecap:round}`}
                </style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path
                        d="M49.39 201.81c89.07-15.72 220.06-15.72 282.93 0l21-125.75-73.39 115.27V44.62l-57.64 141.47L190.85 28.9l-31.43 157.19-57.64-146.71v151.95L28.43 76.06z"
                        className="cls-1"
                    />
                    <path
                        d="M49.39 201.81c0 21 15.72 21 26.2 41.92 10.48 15.72 10.48 10.48 5.24 36.68-15.72 10.48-10.48 52.39-10.48 52.39 68.11 10.48 172.9 10.48 241 0 0 0 5.24-41.92-10.48-52.39-5.24-26.2-5.24-21 5.24-36.68 10.48-21 26.2-21 26.2-41.92-89.06-15.72-193.85-15.72-282.92 0z"
                        className="cls-1"
                    />
                    <path
                        d="M75.59 243.72c36.68-10.48 193.86-10.48 230.54 0M80.83 280.4c62.87-10.48 157.18-10.48 220.06 0M48.92 75.11a21 21 0 11-21-21 21 21 0 0121 21zM211.81 28a21 21 0 11-21-21 21 21 0 0121 21zM374.71 75.11a21 21 0 11-21-21 21 21 0 0121 21zM122.74 38.44a21 21 0 11-21-21 21 21 0 0121 21zM300.88 43.68a21 21 0 11-21-21 21 21 0 0121 21z"
                        className="cls-2"
                    />
                </g>
            </g>
        </svg>
    ),
    '-1Queen': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381.71 347.65">
            <defs>
                <style>
                    {`.cls-1{stroke:#e6e6e6;stroke-linecap:round;stroke-linejoin:round;stroke-width:14px}`}
                </style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path
                        d="M49.39 201.81c89.07-15.72 220.06-15.72 282.93 0l21-125.75-73.39 115.27V44.62l-57.64 141.47L190.85 28.9l-31.43 157.19-57.64-146.71v151.95L28.43 76.06z"
                        className="cls-1"
                    />
                    <path
                        d="M49.39 201.81c0 21 15.72 21 26.2 41.92 10.48 15.72 10.48 10.48 5.24 36.68-15.72 10.48-10.48 52.39-10.48 52.39 68.11 10.48 172.9 10.48 241 0 0 0 5.24-41.92-10.48-52.39-5.24-26.2-5.24-21 5.24-36.68 10.48-21 26.2-21 26.2-41.92-89.06-15.72-193.85-15.72-282.92 0zM75.59 243.72c36.68-10.48 193.86-10.48 230.54 0M80.83 280.4c62.87-10.48 157.18-10.48 220.06 0M48.92 75.11a21 21 0 11-21-21 21 21 0 0121 21zM211.81 28a21 21 0 11-21-21 21 21 0 0121 21zM374.71 75.11a21 21 0 11-21-21 21 21 0 0121 21zM122.74 38.44a21 21 0 11-21-21 21 21 0 0121 21zM300.88 43.68a21 21 0 11-21-21 21 21 0 0121 21z"
                        className="cls-1"
                    />
                </g>
            </g>
        </svg>
    ),
    '1King': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.66 388.26">
            <defs>
                <style>
                    {`.cls-1,.cls-2{fill:#e6e6e6;stroke:#000;stroke-linecap:round;stroke-width:14px}.cls-2{stroke-linejoin:round}`}
                </style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path
                        d="M192.67 85.17V22.48M193.37 132.5h-3l-13.17-5.17V70.89l-22.62-.16-7.4-7.45V48.19l8.53-8.58 21.49-.13V21.17L187.37 7h10l11.17 14.17v18.5l21.42.46 8.6 7.77v16.23l-10.54 6.76-19.48.65v55.79l-12.17 5.17h-3z"
                        className="cls-1"
                    />
                    <path
                        d="M192.67 241.06s50.11-83.52 33.41-116.93c0 0-11.14-27.84-33.41-27.84s-33.41 27.84-33.41 27.84c-16.7 33.41 33.41 116.93 33.41 116.93"
                        className="cls-1"
                    />
                    <path
                        d="M70.18 352c61.25 39 172.61 39 233.85 0v-78s100.22-50 66.81-116.85c-44.54-72.38-150.33-39-178.17 44.54C153.69 118.17 47.9 84.76 14.5 157.15-18.91 224 70.18 268.51 70.18 268.51zM70.18 274.07c61.25-33.41 172.61-33.41 233.85 0M70.18 313c61.25-33.41 172.61-33.41 233.85 0M70.18 352c61.25-33.41 172.61-33.41 233.85 0"
                        className="cls-2"
                    />
                </g>
            </g>
        </svg>
    ),
    '-1King': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.66 388.26">
            <defs>
                <style>
                    {`.cls-1,.cls-2{stroke:#e6e6e6;stroke-linecap:round;stroke-width:14px}.cls-2{stroke-linejoin:round}`}
                </style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path
                        d="M192.67 85.17V22.48M193.37 132.5h-3l-13.17-5.17V70.89l-22.62-.16-7.4-7.45V48.19l8.53-8.58 21.49-.13V21.17L187.37 7h10l11.17 14.17v18.5l21.42.46 8.6 7.77v16.23l-10.54 6.76-19.48.65v55.79l-12.17 5.17h-3z"
                        className="cls-1"
                    />
                    <path
                        d="M192.67 241.06s50.11-83.52 33.41-116.93c0 0-11.14-27.84-33.41-27.84s-33.41 27.84-33.41 27.84c-16.7 33.41 33.41 116.93 33.41 116.93"
                        className="cls-1"
                    />
                    <path
                        d="M70.18 352c61.25 39 172.61 39 233.85 0v-78s100.22-50 66.81-116.85c-44.54-72.38-150.33-39-178.17 44.54C153.69 118.17 47.9 84.76 14.5 157.15-18.91 224 70.18 268.51 70.18 268.51zM70.18 274.07c61.25-33.41 172.61-33.41 233.85 0M70.18 313c61.25-33.41 172.61-33.41 233.85 0M70.18 352c61.25-33.41 172.61-33.41 233.85 0"
                        className="cls-2"
                    />
                </g>
            </g>
        </svg>
    ),
    '1Knight': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 309.81 346.95">
            <defs>
                <style>
                    {`.cls-1{fill:#e6e6e6;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:14px}`}
                </style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path
                        d="M148.85 40.06c15.28 1.46 15.64.12 29 4.22C261 69.74 307 150.44 302.51 339.95h-241c0-94.31 124.8-68.11 103.84-220.06"
                        className="cls-1"
                    />
                    <path
                        fill="#e6e6e6"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="13.25"
                        d="M102.69 51.39c2.65-12.69 7.79-27.94 15-38.65 1.5-2.25 3.34-4.6 5.8-5.11s4.51.87 6.38 2.37c9.25 7.32 15.66 18.62 17.68 31.13"
                    />
                    <path
                        d="M174.86 157.33c-11.75 13.12-25.34 24.55-39.6 34.83-17.39 12.53-34.63 23.47-48.89 40.07a96.93 96.93 0 01-14.74 13.7c-3.74 2.76-12.24 4.6-16.83 2.17-3.63-1.93-9-6.56-12.07-9s-6.1-1.09-9.78-1c-7.75.17-7.84-.74-13.9-6.07-19-16.74-13-48.16.49-64.81 8.35-10.31 22.36-33.39 36.73-55.5 3.31-5.08 4.37-11.14 5.6-17 1.3-6.14 4.19-10.29 8.42-14.95 13.51-14.86 57-37.93 66.06-41.47 2.58-1 4.16-1.33 5.41-3.77a64.24 64.24 0 015-8c5.72-8 13-15.12 21.78-19.62 10.46.61 10.29 38.1 10.29 38.1M39.88 236.64a101.51 101.51 0 0017.2-25.56"
                        className="cls-1"
                    />
                    <path
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="5"
                        d="M37.17 204.3a5.24 5.24 0 11-4.93-5.53 5.24 5.24 0 014.93 5.53z"
                    />
                    <path
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="8"
                        d="M102.86 99c-5.39 6.8-11.6 10.86-13.87 9.07s.26-8.77 5.65-15.57 11.6-10.86 13.87-9.07-.26 8.75-5.65 15.57z"
                    />
                    <path
                        fill="#e6e6e6"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeWidth="14"
                        d="M181.38 82.16s-3.68-2 3.12 1.44c26.37 13.44 89.89 56.25 81.94 232.22"
                    />
                </g>
            </g>
        </svg>
    ),
    '-1Knight': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 309.81 346.95">
            <defs>
                <style>
                    {`.cls-1{stroke:#e6e6e6;stroke-linecap:round;stroke-linejoin:round;stroke-width:14px}`}
                </style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path
                        d="M148.85 40.06c15.28 1.46 15.64.12 29 4.22C261 69.74 307 150.44 302.51 339.95h-241c0-94.31 124.8-68.11 103.84-220.06"
                        className="cls-1"
                    />
                    <path
                        stroke="#e6e6e6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="13.25"
                        d="M102.69 51.39c2.65-12.69 7.79-27.94 15-38.65 1.5-2.25 3.34-4.6 5.8-5.11s4.51.87 6.38 2.37c9.25 7.32 15.66 18.62 17.68 31.13"
                    />
                    <path
                        d="M174.86 157.33c-11.75 13.12-25.34 24.55-39.6 34.83-17.39 12.53-34.63 23.47-48.89 40.07a96.93 96.93 0 01-14.74 13.7c-3.74 2.76-12.24 4.6-16.83 2.17-3.63-1.93-9-6.56-12.07-9s-6.1-1.09-9.78-1c-7.75.17-7.84-.74-13.9-6.07-19-16.74-13-48.16.49-64.81 8.35-10.31 22.36-33.39 36.73-55.5 3.31-5.08 4.37-11.14 5.6-17 1.3-6.14 4.19-10.29 8.42-14.95 13.51-14.86 57-37.93 66.06-41.47 2.58-1 4.16-1.33 5.41-3.77a64.24 64.24 0 015-8c5.72-8 13-15.12 21.78-19.62 10.46.61 10.29 38.1 10.29 38.1M39.88 236.64a101.51 101.51 0 0017.2-25.56"
                        className="cls-1"
                    />
                    <path
                        fill="#e6e6e6"
                        stroke="#e6e6e6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="5"
                        d="M37.17 204.3a5.24 5.24 0 11-4.93-5.53 5.24 5.24 0 014.93 5.53z"
                    />
                    <path
                        fill="#e6e6e6"
                        stroke="#e6e6e6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="8"
                        d="M102.86 99c-5.39 6.8-11.6 10.86-13.87 9.07s.26-8.77 5.65-15.57 11.6-10.86 13.87-9.07-.26 8.75-5.65 15.57z"
                    />
                    <path
                        stroke="#e6e6e6"
                        strokeLinecap="round"
                        strokeWidth="14"
                        d="M181.38 82.16s-3.68-2 3.12 1.44c26.37 13.44 89.89 56.25 81.94 232.22"
                    />
                </g>
            </g>
        </svg>
    ),
}

export default piecesIcons
