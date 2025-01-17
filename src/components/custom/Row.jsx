const Row = ({label, children}) => {
    return (
      <div className='flex justify-between w-full mb-1 pb-1 border-b-[1px] border-white/10'>
        <p className='flex-1'>{label}</p>
        <div className='flex-1'>{children}</div>
      </div>
    )
  }
  export default Row;