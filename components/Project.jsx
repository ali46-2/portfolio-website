import Image from "next/image";
import Link from "next/link";

export default function Project({
  name,
  description,
  imagePath,
  imageSize,
  url,
  textOrder,
  imageOrder,
}) {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 rounded-3xl shadow-md shadow-black/70 front">
      <div
        className={
          textOrder == 1
            ? "flex flex-col p-3 lg:p-4 lg:pr-2 lg:order-1"
            : "flex flex-col p-3 lg:p-4 lg:pl-2 lg:order-2"
        }
      >
        <div className="lg:pt-4 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
          {name}
        </div>

        <div className="pt-3 md:pt-6 lg:pt-10 text-sm sm:text-base lg:text-lg text-justify">
          {description}
        </div>
      </div>

      <div
        className={
          imageOrder == 1
            ? "p-3 lg:p-4 lg:pr-2 lg:order-1"
            : "p-3 lg:p-4 lg:pl-2 lg:order-1"
        }
      >
        <div className="flex justify-center border-[6px] highlight rounded-3xl overflow-hidden">
          <div className="hover:scale-110 hover:brightness-75 ease-out duration-300">
            <Link href={url} rel="noopener noreferrer" target="_blank">
              <Image
                src={imagePath}
                width={imageSize}
                height={imageSize}
                alt={name}
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
