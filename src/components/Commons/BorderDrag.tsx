function BorderDrag(): React.ReactElement {
  return (
    <div className="w-44 h-60 m-2 flex justify-center items-center absolute inset-0 z-10 border-dashed border-2 border-sky-500 rounded-lg">
      <span className="text-xl text-sky-500 font-semibold uppercase">Drop</span>
    </div>
  );
}

export default BorderDrag;
