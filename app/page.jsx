import CreateMeeting from '@/components/CreateMeeting';
import JoinMeeting from '@/components/JoinMeeting';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='max-w-6xl w-fit mx-auto py-16 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center justify-between flex-col md:flex-row gap-20'>
      <div>
        <div className='mb-10'>
          <h1 className='text-3xl mb-2'>
            Video Calls and meetings for you and
            <span className='text-blue-500 font-medium ml-2'>your team</span>
          </h1>
          <p>
            Join meetings, video calls,webinars with ease, and share your screen
            with others.
          </p>
        </div>

        <div>
          <CreateMeeting />
          <JoinMeeting />
        </div>
      </div>

      <Image
        src='/video-call.svg'
        alt='Video Call'
        width={600}
        height={600}
        className='hidden lg:block'
        priority
      />
    </div>
  );
};

export default Home;
