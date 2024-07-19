'use client';

import { randomID } from '@/utils/helpers';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const page = ({ params }) => {
  const roomID = params.id;

  const myMeeting = (element) => {
    const appID = process.env.NEXT_PUBLIC_ZEEGO_APP_ID;
    const serverSecret = process.env.NEXT_PUBLIC_ZEEGO_SERVER_SECRET || '';

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      Number(appID),
      serverSecret,
      roomID,
      randomID(5),
      randomID(5)
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // create the call
    zp?.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url: window.location.href,
          //   url:
          //     window.location.protocol +
          //     '//' +
          //     window.location.host +
          //     window.location.pathname +
          //     '?roomID=' +
          //     roomID,
        },
        {
          name: 'Group ID',
          url: roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  return (
    <div className='w-full h-[90vh]' ref={myMeeting}>
      page
    </div>
  );
};

export default page;
