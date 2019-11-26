const string = `#skin {
    background-color: #FFE600;
}

.eye {
    top: 60px;
    border: 3px solid black;
    width: 64px;
    height: 64px;
    background-color: #2E2E2E;
    border-radius: 50%;
    position: absolute;
    left: 50%;
}

.eye.left {
    transform: translateX(-152px);
}

.eye.right {
    transform: translateX(88px);
}

.eye::after {
    content: '';
    border: 3px solid black;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    left: 6px;
}

.nose {
    border: 10px solid black;
    border-color: black transparent transparent transparent;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    margin-left: -10px;
    top: 108px;
}

.nose::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 6px;
    border-radius: 20px 20px 0 0;
    background-color: black;
    top: -16px;
    left: -10px;
}



.cheek {
    border: 3px solid black;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background-color: #FF0000;
    position: absolute;
    left: 50%;
}

.cheek.left {
    transform: translateX(-210px);
    top: 170px;
}

.cheek.right {
    transform: translateX(122px);
    top: 170px;
}

.mouth .lip {
    border: 3px solid black;
    height: 30px;
    width: 90px;
    background-color: #FFE600;
    position: absolute;
    left: 50%;
    top: 134px;
    z-index: 10;
}

.mouth .lip.left {
    border-top: none;
    border-right: none;
    transform: translateX(-93px) rotate(-15deg);
    border-radius: 0 0 0 45px;
}

.mouth .lip.right {
    border-top: none;
    border-left: none;
    transform: rotate(15deg);
    border-radius: 0 0 45px 0;
}

.mouth .lip::before {
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0.5px;
    background-color: #FFE600;
}

.mouth .lip.left::before {
    right: -2px;
}

.mouth .lip.right::before {
    left: -2px;
}

.mouth .down {
    height: 180px;
    position: absolute;
    top: 144px;
    width: 100%;
    overflow: hidden;
}

.mouth .down .oralCavity {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background-color: #9B000A;
}

.mouth .down .oralCavity .tongue {
    border: 1px solid red;
    width: 200px;
    height: 300px;
    background-color: #FF485F;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
    bottom: -156px;
}
.mouth .down .oralCavity {
    overflow:hidden;
}`
export default string;