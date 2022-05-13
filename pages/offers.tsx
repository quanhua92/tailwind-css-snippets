import { RowContainer, Row } from "@components/containers/Row";
import Offer01 from "@components/offers/Offer01";

const Page = () => {
  const args_offer_01 = {
    items: [
      {
        href: "#",
        title: "Download the app",
        subtitle: "Get a 5% discount code",
      },
      { href: "#", title: "Free Shipping", subtitle: "with Order over $100" },
      {
        href: "#",
        title: "Sign up for newsletter",
        subtitle: "15% off first order",
      },
    ],
  };
  return (
    <RowContainer>
      <Row>
        <Offer01 {...args_offer_01} />
      </Row>
    </RowContainer>
  );
};

export default Page;
