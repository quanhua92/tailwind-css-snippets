import { ShoppingBagIcon } from "@heroicons/react/outline";
import Card from "@components/cards/Card";
import { RowContainer, Row } from "@components/containers/Row";

const Page = () => {
  return (
    <RowContainer>
      <Row>
        <Card
          title="The standard Lorem Ipsum passage, used since the 1500s"
          subtitle="vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium"
          icon={<ShoppingBagIcon />}
        />
      </Row>
    </RowContainer>
  );
};

export default Page;
