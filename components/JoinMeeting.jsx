'use client';

import Link from 'next/link';
import { useState } from 'react';

const JoinMeeting = () => {
  const [roomId, setRoomId] = useState('');

  return (
    <div className='flex flex-col items-center gap-2 mt-4 w-full'>
      <input
        type='text'
        placeholder='Enter meeting ID'
        className='w-full px-4 py-2 border border-gray-300 rounded-md'
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <Link href={`/room/${roomId}`} className='w-full mt-2'>
        <button className='w-full px-4 py-2 bg-blue-500 text-white rounded-md'>
          Join Meeting
        </button>
      </Link>
    </div>
  );
};

export default JoinMeeting;
