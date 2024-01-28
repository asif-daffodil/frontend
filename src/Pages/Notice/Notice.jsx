import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import LatestNotice from "../../Components/HomeComponents/LatestNotice/LatestNotice";


const Notice = () => {
    return (
        <>
            <CommonBanner title="Notice" subtitle="Any question or remarks? Just write us a message!" />
            <LatestNotice />
        </>
    );
};

export default Notice;