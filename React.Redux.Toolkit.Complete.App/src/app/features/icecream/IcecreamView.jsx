import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Number of icecream - { numOfIcecreams } </h1>
            <button onClick={() => dispatch(ordered()) } >Order icecream</button>
            <button onClick={() => dispatch(restocked(2)) } >Restock icecreams</button>
        </div>
    )
}

export default IcecreamView;