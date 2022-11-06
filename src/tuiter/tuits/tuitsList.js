import React from "react";
import { useSelector } from "react-redux";
import TuitItem from "./tuitItem";

const TuitList = () => {
  const tuitList = useSelector((state) => state.tuits);
  // const dispatch = useDispatch();
  // const deleteTuitHandler = (id) => {
  //   dispatch(deleteTuit(id));
  // }

  return (
    <ul className="list-group">
      {tuitList.map((tuit) => (
        <TuitItem key={tuit._id} tuit={tuit} />
      ))}
    </ul>
  );
};
export default TuitList;
