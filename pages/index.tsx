import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (<>
    <div className='flex flex-col space-y-2'>
      {someCondition && <input placeholder='Big' />}
      <input placeholder='Bad' />
      <input placeholder='Baby' />
      <input placeholder='Bobby' />
      <div className='flex space-x-2'>
        <button className='px-2 py-1 text-blue-100 bg-blue-500 rounded-md'>Submit</button>
        <button className='px-2 py-1 text-indigo-100 bg-indigo-500 rounded-md'>Load</button>
        <button className='px-2 py-1 text-green-100 bg-green-500 rounded-md'>Save</button>
      </div>
    </div>
  </>);
}

export default Home;
