import imgAbout from "../../../../assets/img/imgAbout.png";
export const AboutOne = () => {
  return (
    <div className="flex items-center">
      <div className="pl-[135px] ">
        <h1 className="font-semibold mb-[40px] text-[54px] leading-[64px] tracking-[6%] text-justify">
          Our Story
        </h1>
        <p className=" font-normal text-base leading-[26px]">
          Launced in 2015, Exclusive is South Asia’s premier online shopping{" "}
          <br />
          makterplace with an active presense in Bangladesh. Supported <br /> by
          wide range of tailored marketing, data and service solutions, <br />{" "}
          Exclusive has 10,500 sallers and 300 brands and serves 3 <br />{" "}
          millioons customers across the region. <br />
          <br /> Exclusive has more than 1 Million products to offer, growing at
          a <br /> very fast. Exclusive offers a diverse assotment in categories{" "}
          <br /> ranging from consumer.
        </p>
      </div>
      <img className="pl-[75px]" src={imgAbout} alt="" />
    </div>
  );
};
