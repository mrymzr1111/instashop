import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">INSTA SHOP</div>
          </Link>
          <p>علوم تحقیقات دانشگاه اصفهان</p>
          <span className="font-semibold">
            <Link href="https://www.ui.ac.ir/EN" target="_blank">
              https://www.ui.ac.ir/EN
            </Link>
          </span>
          <span className="font-semibold">Tel: +98 313 793 2039-40</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="Facebook" width={16} height={16} />
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={16}
              height={16}
            />
            <Image src="/youtube.png" alt="YouTube" width={16} height={16} />
            <Image
              src="/pinterest.png"
              alt="Pinterest"
              width={16}
              height={16}
            />
            <Image src="/x.png" alt="Twitter (X)" width={16} height={16} />
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-full lg:w-1/2">
          <div className="flex flex-col">
            <h1 className="font-medium text-lg">شرکت</h1>
            <div className="flex flex-col gap-6">
              <Link href="">درباره‌ی ما</Link>
              <Link href="">تیم ما</Link>
              <Link href="">همکاری‌ها</Link>
              <Link href="">وبلاگ</Link>
              <Link href="">تماس با ما</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-lg">فروشگاه</h1>
            <div className="flex flex-col gap-6">
              <Link href="">محصولات جدید</Link>
              <Link href="">لوازم جانبی</Link>
              <Link href="">مردانه</Link>
              <Link href="">زنانه</Link>
              <Link href="">همه محصولات</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-lg">پشتیبانی</h1>
            <div className="flex flex-col gap-6">
              <Link href="">خدمات مشتری</Link>
              <Link href="">حساب من</Link>
              <Link href="">یافتن فروشگاه</Link>
              <Link href="">قوانین و حریم خصوصی</Link>
              <Link href="">کارت هدیه</Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
          اولین نفری باشید که جدیدترین اخبار درباره‌ی روندها، تخفیف‌ها و خیلی چیزهای دیگر را دریافت می‌کنید 
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">JOIN</button>
          </div>
          <span className="font-semibold"></span>
         
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div>© INSTA SHOP Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div>
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">Persian | English</span>
          </div>
          <div>
          <span className="text-gray-500 mr-4">واحد:</span>
          <span className="font-medium">ریال</span>
        
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
