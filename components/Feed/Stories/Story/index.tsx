const Story = ({ img, username }: any) => {
  return (
    <div>
      <img
        className=" h-16 w-16 rounded-full p-[1.5px] object-contain 
      cursor-pointer border-2 border-red-500 hover:scale-110 transition 
      transform duration-200 ease-out"
        src={img}
      />
      <p className="text-xs w-16 truncate text-center">{username}</p>
    </div>
  );
};

export default Story;