import { Raleway } from 'next/font/google';
import Link from 'next/link';

const font = Raleway({ subsets: ['latin'], weight: '600' });

const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white p-4'>
      <div className='max-w-6xl m-auto flex items-center justify-between'>
        <h1 className={`${font.className} text-xl`}>
          <Link href='/'>Group Chat</Link>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
