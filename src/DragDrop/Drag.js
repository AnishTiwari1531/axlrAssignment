import React, { useState } from "react";
import './Drag.css';
// import styled from '@emotion/styled'


const Drag = () => {
    const [shapeList, setShapeList] = useState([
        // { id: "1", name: "Circle", column: "column-1" },
        { id: "1", name: <div className="shape1"></div>, column: "column-1" },
        { id: "2", name: <div className="shape2"></div>, column: "column-1" },
        { id: "3", name: <div className="shape3"></div>, column: "column-1" },
        { id: "4", name: <div className="shape4"></div>, column: "column-1" },
        { id: "5", name: <div className="shape5"></div>, column: "column-1" },
        { id: "6", name: <div className="shape6"></div>, column: "column-1" },
    ]);


    //     const StyledCircle = styled.div`
    //   width: 30px;
    //   height: 30px;
    //   border-radius: 50%;
    //   background: #FFF;
    //   margin: 0 auto;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   font-size: 18px;
    //   font-weight: bold;
    //   position: relative;
    //   `;


    // <StyledCircle id={1} name="Circle" column="column-1">
    //     {name}
    // </StyledCircle>

    const onDragStart = (e, id) => {
        e.dataTransfer.setData("id", id);
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };

    const onDrop = (e, column) => {
        let id = e.dataTransfer.getData("id");

        let shapes = shapeList.filter((shape) => {
            if (shape.id === id) {
                shape.column = column;
            }
            return shape;
        });

        setShapeList(shapes);
    };

    return (
        <div>
            <h1 > Drag and Drop </h1>
            <div className="container">
                <div
                    className="columnLeft"
                    onDragOver={(e) => onDragOver(e)}
                    onDrop={(e) => {
                        onDrop(e, "column-1");
                    }}
                >
                    <span className="title">LEFT</span>
                    {shapeList.map((shape) => {
                        return shape.column === "column-1" ? (
                            <div
                                key={shape.id}
                                onDragStart={(e) => onDragStart(e, shape.id)}
                                draggable
                                className="draggable"
                            >
                                {shape.name}
                            </div>
                        ) : (
                            false
                        );
                    })}

                </div>
                <div
                    className="columnMiddle"
                    onDragOver={(e) => onDragOver(e)}
                    onDrop={(e) => {
                        onDrop(e, "column-2");
                    }}
                >
                    <span className="title">MIDDLE</span>
                    {shapeList.map((shape) => {
                        return shape.column === "column-2" ? (
                            <div
                                key={shape.id}
                                onDragStart={(e) => onDragStart(e, shape.id)}
                                draggable
                                className="draggable"
                            >
                                {shape.name}
                            </div>
                        ) : (
                            false
                        );
                    })}
                </div>

                <div className="columnRight">
                    <span className="title">RIGHT</span>
                    <button className='btn' >EDIT</button>
                    <button className='btn' >SAVE</button>
                    <button className='btn' >DELETE</button>
                    <button className='btn' >REMOVE</button>
                </div>

            </div>
        </div>
    );
};

export default Drag;