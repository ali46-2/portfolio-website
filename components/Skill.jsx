import Image from "next/image";

export default function Skill({ path, name, size }) {
  return (
    <div className="flex justify-center items-center rounded-3xl w-40 sm:w-52 lg:w-56 h-20 shadow-md shadow-black/50 front mx-auto hover:scale-110 ease-in duration-100">
      <div className="flex items-center justify-center w-[35%] h-full p-2">
        <Image src={path} alt={name} width={size} height={size} />
      </div>
      <div className="w-[50%] text-sm sm:text-base lg:text-lg text-center">
        {name}
      </div>
    </div>
  );
}
