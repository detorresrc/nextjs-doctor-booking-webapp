import { Container } from "@/components/container";
import { CategoryList } from "./_components/category-list";

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <Container>
      <div className='grid grid-cols-4'>
        <div className='hidden md:block'><CategoryList/></div>
        <div className='col-span-4 md:col-span-3'>{children}</div>
      </div>
    </Container>
  );
};

export default RootLayout;
