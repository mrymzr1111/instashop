
import Catagorylist from './components/cataorylist';
import ProductList from "./components/productList";
import Slider from "./components/slider";





export default function Home() {
  return (
    
      // <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    
      // </main>
      <div className="">
<Slider/>
<div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
<h1 className="text-2xl ">محصولات ویژه</h1>
<ProductList/>
</div>



<div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
<h1 className="text-2xl ">لیست دسته‌بندی‌ها</h1>
<Catagorylist/>
</div>

<div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
<h1 className="text-2xl ">محصولات جدید</h1>
<ProductList/>
</div>

      </div>
     
  );
}
