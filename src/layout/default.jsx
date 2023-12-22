export default function Layout({ children }) {
  return (
    <div className='flex h-screen w-screen overflow-hidden'>
      {/* <header className='w-28 h-full bg-blue-50 transition-all'></header> */}
      <div className='w-full h-full overflow-y-scroll p-10'>{children}</div>
    </div>
  );
}
