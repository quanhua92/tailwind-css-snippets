import React from "react";
import TrendingProducts from "@components/collections/TrendingProducts";
import SplitImages from "@components/collections/SplitImages";
import { RowContainer, Row } from "@components/containers/Row";
import Masonry from "@components/collections/Masonry";

const Page = () => {
  const args_trending = {
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

  const args_split = {
    leftPanel: {
      subtitle: "Pen",
      title: "Apple Pen",
      href: "#",
      buttonText: "Shop now",
      imageSrc:
        "https://images.unsplash.com/photo-1649651738909-967f63511615?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=naeim-jafari-1BJgOSThXbw-unsplash.jpg&w=640",
      imageAlt: "product 1",
    },
    rightPanel: {
      subtitle: "Pen",
      title: "Apple Pen",
      href: "#",
      buttonText: "Shop now",
      imageSrc:
        "https://images.unsplash.com/photo-1649651738909-967f63511615?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=naeim-jafari-1BJgOSThXbw-unsplash.jpg&w=640",
      imageAlt: "product 1",
    },
  };
  return (
    <RowContainer>
      <Row>
        <TrendingProducts {...args_trending} />
      </Row>
      <Row>
        <SplitImages {...args_split} />
      </Row>
      <Row>
        <Masonry />
      </Row>
    </RowContainer>
  );
};

export default Page;
