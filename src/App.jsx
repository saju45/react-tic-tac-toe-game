/* eslint-disable react/prop-types */
function Square({ value }) {
  const handleClick = () => {
    console.log("clicked ");
  };
  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div>
        <Square value="1" />
        <Square />
        <Square />
      </div>

      <div>
        <Square />
        <Square />
        <Square />
      </div>

      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
