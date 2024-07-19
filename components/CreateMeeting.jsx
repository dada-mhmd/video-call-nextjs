import { randomID } from '@/utils/helpers';
import Link from 'next/link';

const CreateMeeting = () => {
  return (
    <Link href={`/room/${randomID(5)}`}>
      <button className='w-full px-4 py-2 bg-blue-500 text-white rounded'>
        Create Meeting
      </button>
    </Link>
  );
};

export default CreateMeeting;
