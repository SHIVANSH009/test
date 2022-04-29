import { useContext } from "react";
import { UserNameContext } from "./Dashboard";

const TrackDetail = () => {
    const userName = useContext(UserNameContext);
    console.log('TrackDetail Component');
    return (
        <>
        <p>TrackDetail Component</p>
        <p>Full Name: {userName}</p>
        </>
    )
}

export default TrackDetail;
