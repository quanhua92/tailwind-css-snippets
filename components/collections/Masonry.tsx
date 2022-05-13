import Image from "next/image";

const Masonry = () => {
  const imgUrl =
    "https://images.unsplash.com/photo-1649651738909-967f63511615?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=naeim-jafari-1BJgOSThXbw-unsplash.jpg&w=640";
  return (
    <div className="columns-4 gap-3 w-[1200px] mx-auto space-y-3">
      <div className="bg-gray-200 break-inside-avoid">
        <div className="text-green-700 w-full h-80 relative">
          <Image src={imgUrl} layout="fill" alt="demo" />
        </div>
      </div>
      <div className="bg-gray-200 break-inside-avoid">
        <div className="text-green-700 w-full h-64 relative">
          <Image src={imgUrl} layout="fill" alt="demo" />
        </div>
      </div>
      <div className="bg-gray-200 break-inside-avoid">
        <div className="text-green-700 w-full h-80 relative">
          <Image src={imgUrl} layout="fill" alt="demo" />
        </div>
      </div>
      <div className="bg-gray-200 break-inside-avoid">
        <div className="text-green-700 w-full h-48 relative">
          <Image src={imgUrl} layout="fill" alt="demo" />
        </div>
      </div>
      <div className="bg-gray-200 break-inside-avoid">
        <div className="text-green-700 w-full h-64 relative">
          <Image src={imgUrl} layout="fill" alt="demo" />
        </div>
      </div>
      <div className="bg-gray-200 break-inside-avoid">
        <div className="text-green-700 w-full h-80 relative">
          <Image src={imgUrl} layout="fill" alt="demo" />
        </div>
      </div>
      <div className="bg-gray-200 break-inside-avoid">
        <div className="text-green-700 w-full h-48 relative">
          <Image src={imgUrl} layout="fill" alt="demo" />
        </div>
      </div>
      <div className="bg-gray-200 break-inside-avoid">
        <div className="text-green-700 w-full h-80 relative">
          <Image src={imgUrl} layout="fill" alt="demo" />
        </div>
      </div>
      <div className="bg-gray-200 break-inside-avoid">
        <div className="text-green-700 w-full h-48 relative">
          <Image src={imgUrl} layout="fill" alt="demo" />
        </div>
      </div>
      <div className="bg-gray-200 break-inside-avoid">
        <div className="text-green-700 w-full h-64 relative">
          <Image src={imgUrl} layout="fill" alt="demo" />
        </div>
      </div>
      <div className="bg-gray-200 break-inside-avoid">
        <div className="text-green-700 w-full h-80 relative">
          <Image src={imgUrl} layout="fill" alt="demo" />
        </div>
      </div>
    </div>
  );
};

export default Masonry;
