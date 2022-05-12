import Image from "next/image";

interface Product {
  name: string;
  price: number;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface Props {
  title?: string;
  href?: string;
  products?: Product[];
}

const ProductCard = ({ name, price, href, imageAlt, imageSrc }: Product) => {
  return (
    <div className="flex flex-1 flex-col text-center">
      <a href={href}>
        <div className="relative w-full h-48 md:h-64 rounded-sm overflow-hidden">
          <Image src={imageSrc!} alt={imageAlt!} layout="fill" />
        </div>
        <h1 className="mt-2">{name}</h1>
        <p>{price}</p>
      </a>
    </div>
  );
};

const TrendingProducts = ({
  title = "Trending products",
  href = "#",
  products,
}: Props) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col md:flex-row justify-between">
        <h1>{title}</h1>
        <a href={href}>
          <p className="text-blue-600 font-semibold">See everything!</p>
        </a>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4">
        {products!.map((product: Product, index: number) => {
          return <ProductCard {...product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TrendingProducts;
