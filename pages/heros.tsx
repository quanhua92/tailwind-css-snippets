import { RowContainer, Row } from "@components/containers/Row";
import Hero01 from "@components/heros/Hero01";
import DetailOverlay from "@components/heros/DetailOverlay";
import HeroSideImage from "@components/heros/HeroSideImage";

const Page = () => {
  const args_hero_01 = {
    title: "The standard Lorem Ipsum passage, used since the 1500s",
    subtitle:
      "vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
    button01: {
      name: "Button 1",
      href: "#",
    },
    button02: {
      name: "Button 2",
      href: "#",
    },
  };
  const args_detail_overlay = {
    title: "Apple Collection",
    subtitle: "Phone, Laptop, Tablet",
    href: "#",
    buttonText: "View the collection",
    imageSrc:
      "https://images.unsplash.com/photo-1649651738909-967f63511615?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=naeim-jafari-1BJgOSThXbw-unsplash.jpg&w=640",
    imageAlt: "product 1",
  };

  const args_hero_side_image = {
    title: "The standard Lorem Ipsum passage, used since the 1500s",
    subtitle:
      "vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
    button01: {
      name: "Button 1",
      href: "#",
    },
    button02: {
      name: "Button 2",
      href: "#",
    },
    imageOnLeft: false,
    imageSrc:
      "https://images.unsplash.com/photo-1649651738909-967f63511615?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=naeim-jafari-1BJgOSThXbw-unsplash.jpg&w=640",
  };

  return (
    <RowContainer>
      <Row>
        <Hero01 {...args_hero_01} />
      </Row>
      <Row>
        <DetailOverlay {...args_detail_overlay} />
      </Row>
      <Row>
        <HeroSideImage {...args_hero_side_image} />
      </Row>
    </RowContainer>
  );
};

export default Page;
