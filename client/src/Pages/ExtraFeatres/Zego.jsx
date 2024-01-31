import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from 'react-router-dom'
// import MainLayout from '../components/Layout/Boost'
import { useSelector } from 'react-redux'

const Zego = () => {
    // const user = useSelector((state) => state?.auth?.user)
    const { roomId } = useParams();

    const Mymeeting = async (element) => {
        const appID = 1706977774;

        const serverSecret = "a514619e54b3795e3c52ab6e879da78e";

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), 'username');
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    };

    return (
        <>
            <center>
                <div className='container -ml-16 flex justify-center items-center align-middle h-screen ' >
                    <div className='w-screen p-3 pt-3 mt-3'>
                        <div ref={Mymeeting} />
                    </div>
                </div>
            </center>
        </>

    )
}

export default Zego;