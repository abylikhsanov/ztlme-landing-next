import { Button, Space } from 'antd';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="flex flex-col mt-20 items-center justify-center max-w-5xl mx-auto">
      <div className="flex items-center justify-center text-center">
        <span className="font-dm font-bold text-5xl">
          Fremtidens forsikring for deg som ønsker trygghet og lønnsom
          avkastning
        </span>
      </div>
      <div className="flex max-w-3xl m-8 items-center justify-center text-center bg-blue-300">
        <span className='font-dm'>
          Si farvel til tradisjonelle profittjagende forsikringsselskaper og hei
          til ztl.me - den nyskapende løsningen som tilbyr rimelig dekning med
          full transparens og avkastning.
        </span>
      </div>
      <Button type="primary" shape="round" className="bg-[#1677ff]" size='large'>Get Started</Button>
      <div className="m-8 relative h-[500px] w-[500px]">
        <div className="absolute top-0 right-0">
          <Image src="/main_image_1.png" alt="Main Image" height={350} width={350}/>
        </div>
        <div className="absolute bottom-0 left-0">
          <Image src="/main_image_1.png" alt="Main Image" height={350} width={350}/>
        </div>
      </div>
    </div>
  );
};
