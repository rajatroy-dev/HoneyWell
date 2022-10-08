import React from "react";
import EachSeat from "./EachSeat";

export default function SeatTypeList(props) {
    const { seats, type, price, total, setTotal } = props;

    return (
        <>
            {Object.keys(seats).map((eachKey, index) => {
                return (
                    <div key={`${type}${eachKey}${index}`}>
                        {seats[eachKey].map((value, seatNumber) => <EachSeat key={`${type}${eachKey}${index}${seatNumber}`} type={type} row={eachKey} number={index} booked={value === 1 ? true : false} price={price} total={total} setTotal={setTotal} />)}
                    </div>
                );
            })}
        </>
    );
}