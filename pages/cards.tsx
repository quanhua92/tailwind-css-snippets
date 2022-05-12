import { ShoppingBagIcon } from "@heroicons/react/outline";
import Card from "@components/cards/Card";

const Page = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-fit">
      <Card
        title="The standard Lorem Ipsum passage, used since the 1500s"
        subtitle="vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium"
        icon={<ShoppingBagIcon />}
      />
    </div>
  );
};

export default Page;
