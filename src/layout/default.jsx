export default function Layout({ children }) {
  return (
    <div className='flex flex-col h-screen w-screen overflow-hidden'>
      <header className='w-screen h-20 border-b border-gray-100 transition-all py-4 px-10'>
        <img src='/images/Logo.png' className='h-full' />
      </header>
      <div className='w-full h-full overflow-y-scroll py-4 px-10'>
        {children}
      </div>
    </div>
  );
}
