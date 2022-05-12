import TrendingProducts from "@components/collections/TrendingProducts";

const Page = () => {
  const args = {
    products: [
      {
        name: "Apple Pen",
        href: "#",
        price: 24.95,
        imageSrc:
          "https://images.unsplash.com/photo-1649651738909-967f63511615?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=naeim-jafari-1BJgOSThXbw-unsplash.jpg&w=640",
        imageAlt: "product 1",
      },
      {
        name: "Apple Pencil",
        href: "#",
        price: 24.95,
        imageSrc:
          "https://images.unsplash.com/photo-1649651738909-967f63511615?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=naeim-jafari-1BJgOSThXbw-unsplash.jpg&w=640",
        imageAlt: "product 1",
      },
      {
        name: "Banana Pen",
        href: "#",
        price: 24.95,
        imageSrc:
          "https://images.unsplash.com/photo-1649651738909-967f63511615?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=naeim-jafari-1BJgOSThXbw-unsplash.jpg&w=640",
        imageAlt: "product 1",
      },
    ],
  };
  return (
    <div className="bg-white dark:bg-gray-900 min-h-fit">
      <TrendingProducts {...args} />
    </div>
  );
};

export default Page;
