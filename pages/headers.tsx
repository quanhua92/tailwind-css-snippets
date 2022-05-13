import { RowContainer, Row } from "@components/containers/Row";
import Header01 from "@components/headers/Header01";

const Page = () => {
  return (
    <RowContainer>
      <Row center={false}>
        <Header01 logoName="NextDNN" />
      </Row>
    </RowContainer>
  );
};

export default Page;
