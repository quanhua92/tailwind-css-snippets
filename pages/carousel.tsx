import Carousel from "@components/carousel/Carousel";
import CarouselSlide from "@components/carousel/CarouselSlide";

interface Props {
  children?: JSX.Element;
}

const Content: React.FC<Props> = ({ children }) => {
  return <div className="px-5 md:px-10 lg:px-20">{children}</div>;
};

const Page = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center m-auto">
      <Carousel>
        <CarouselSlide index={0}>
          <Content>
            <div>This is the slide 0</div>
          </Content>
        </CarouselSlide>
        <CarouselSlide index={1}>
          <Content>
            <div>This is the slide 1</div>
          </Content>
        </CarouselSlide>
        <CarouselSlide index={2}>
          <Content>
            <div>This is the slide 2</div>
          </Content>
        </CarouselSlide>
        <CarouselSlide index={3}>
          <Content>
            <div>This is the slide 3</div>
          </Content>
        </CarouselSlide>
        <CarouselSlide index={4}>
          <Content>
            <div>This is the slide 4</div>
          </Content>
        </CarouselSlide>
        <CarouselSlide index={5}>
          <Content>
            <div>This is the slide 5</div>
          </Content>
        </CarouselSlide>
      </Carousel>
    </div>
  );
};

export default Page;
