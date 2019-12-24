import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Button(props) {
    return <div className="protobtn" style={{background:props.color}}>{props.name}</div>;
}

ReactDOM.render(
    <div className="mainfrm">
        <div className="frmtxt">어플리케이션을 골라주세요</div>
        <div className="frmbtn">
            <Button name="투두" color="#0073e6" />
            <Button name="게시판" color="#2db300" />
        </div>
    </div>,
    document.getElementById('root')
);
