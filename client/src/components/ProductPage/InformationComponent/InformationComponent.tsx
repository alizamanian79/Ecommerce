import React from "react";
import ColorComponent from "./ColorComponent/Color";
import SizeComponent from "./SizeComponent/Size";
function InformationComponent() {
  return (
    <div
      className={`w-100 lg:w-60 md:w-50  h-[300px]
     md:h-[500px] flex justify-start flex-col
     px-[1rem]
     py-[1rem]

     `}
      style={{ direction: "rtl" }}
    >
      <h3 className={`font-["yekanBakhtBold"] text-[30px]`}>لباس جدید ما</h3>
      <h4 className={`font-["yekanBakht"] text-[19px] h-[200px]`}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.{" "}
      </h4>

      <div className="w-100 h-auto flex flex-wrap mt-[1.5rem] bg-rmv">
        <ColorComponent />
        <SizeComponent />
      </div>

    </div>
  );
}

export default InformationComponent;
