import Link from 'next/link';
import Image from 'next/image';
import img from "../../../../public/Categori/winter.png"


const Footer = () => {
  return (
    <footer className="bg-[#1b1b1b] w-100 flex text-[white] justify-center items-end">
      <div className="container mx-auto w-94 py-[3rem]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Online Shopping</h3>
            <ul className="space-y-2">
              <li><Link href="/men">Men</Link></li>
              <li><Link href="/women">Women</Link></li>
              <li><Link href="/kids">Kids</Link></li>
              <li><Link href="/home">Home & Living</Link></li>
              <li><Link href="/beauty">Beauty</Link></li>
              <li><Link href="/gift-cards">Gifts Cards</Link></li>
              <li><Link href="/insider">Ebuy Insider</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Useful Links</h3>
            <ul className="space-y-2">
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/terms">T&C</Link></li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Experience Eby App on Mobile</h3>
            <div className="flex items-center space-x-4">
              <Link href="/google-play"><Image src={img} alt="Google Play" width={100} height={30} /></Link>
              <Link href="/app-store"><Image src={img} alt="App Store" width={100} height={30} /></Link>
            </div>
            {/* Add more content as needed */}
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="text-base">
                <p>100% Original guarantee for all products at ebuy.com</p>
                <p>Return within 30 days of receiving your order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
