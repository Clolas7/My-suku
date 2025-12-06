import imgUnsplashZuIdlSz3XLg1 from "figma:asset/f52db964e8432fb612a098f5b445198f0a8454ce.png";
import imgUnsplashFdlZbwip0AM from "figma:asset/eecdb98c904886bd6452747c84f1bbd6648e6805.png";
import imgImage49 from "figma:asset/0693873d809f14dae02f2fad48d1775df2fa7d10.png";
import imgImage28 from "figma:asset/2cadf43b51d7fce39e6451e178843e173379c77c.png";
import imgRectangle from "figma:asset/424fb1edb7233e1a1dfa8bcc4d61cde5cf5ad032.png";
import imgUnsplashTqOeGdRNowY from "figma:asset/ebb484877ac3abe68730fb0fbd15f6b561ff464f.png";
import { imgUnsplashZuIdlSz3XLg } from "./svg-9it49";

function Heading() {
  return (
    <div className="absolute h-[24px] left-[116px] top-[318px] w-[127.448px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[64px] not-italic text-[#fffdfd] text-[16px] text-center text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">{`Savourez l'Afrique`}</p>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[-54.15px] top-[168.35px]" data-name="Mask group">
      <div className="absolute h-[134.031px] left-[-59.53px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.375px_40.558px] mask-size-[80px_80px] opacity-70 top-[127.79px] w-[89.354px]" data-name="unsplash:ZuIDLSz3XLg" style={{ maskImage: `url('${imgUnsplashZuIdlSz3XLg}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUnsplashZuIdlSz3XLg1} />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-[312.43px] size-[113.137px] top-[151.78px]" data-name="Mask group">
      <div className="absolute flex items-center justify-center left-[276.72px] size-[170.873px] top-[127.87px]" style={{ "--transform-inner-width": "99.9375", "--transform-inner-height": "141.6875" } as React.CSSProperties}>
        <div className="flex-none rotate-[225deg]">
          <div className="h-[141.697px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[52.282px_40.488px] mask-size-[80px_80px] opacity-70 relative w-[99.953px]" data-name="unsplash:fdlZBWIP0aM" style={{ maskImage: `url('${imgUnsplashZuIdlSz3XLg}')` }}>
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUnsplashFdlZbwip0AM} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#aa0909] h-[8px] relative rounded-[2.23696e+07px] shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[8px] w-[32px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(241,101,41,0.2)] relative rounded-[2.23696e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[8px] items-start justify-center left-[32px] top-0 w-[300px]" data-name="Container">
      <Container />
      {[...Array(2).keys()].map((_, i) => (
        <Container1 key={i} />
      ))}
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[185px] size-[16px] top-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#aa0909] h-[56px] left-[32px] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[40px] w-[300px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[149.5px] not-italic text-[14px] text-center text-nowrap text-white top-[17px] translate-x-[-50%] whitespace-pre">Suivant</p>
      <Icon />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[113px] left-0 top-[557px] w-[360px]" data-name="Container">
      <Container2 />
      <Button />
    </div>
  );
}

export default function WelcomePage() {
  return (
    <div className="bg-black relative rounded-[50px] size-full" data-name="Welcome page 1">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[747px] left-[-270.87px] mix-blend-color-dodge opacity-20 top-[-11.81px] w-[996px]" data-name="image 49">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage49} />
        </div>
        <div className="absolute h-[145.263px] left-[64px] top-[54px] w-[240px]" data-name="image 28">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage28} />
        </div>
        <div className="absolute left-[-204.96px] size-[796.92px] top-[158.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 797 797">
            <circle cx="398.46" cy="398.46" fill="var(--fill-0, black)" id="Ellipse 4015" r="398.46" />
          </svg>
        </div>
        <Heading />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[179.5px] not-italic text-[16px] text-center text-white top-[391px] translate-x-[-50%] w-[333px]">Découvrez les meilleurs restaurants africains de Marrakech, livrés directement chez vous</p>
        <div className="absolute bg-repeat bg-size-[220px_220px] bg-top-left h-[800px] left-[0.4px] opacity-10 top-0 w-[359.733px]" data-name="Rectangle" style={{ backgroundImage: `url('${imgRectangle}')` }} />
        <div className="absolute left-[-218.46px] size-[796.92px] top-[720.59px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Ellipse 4016"></g>
          </svg>
        </div>
        <div className="absolute left-[74.8px] shadow-[0px_32px_43px_0px_rgba(0,0,0,0.56)] size-[210.402px] top-[58.86px]" data-name="unsplash:TqOEGdRNowY">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUnsplashTqOeGdRNowY} />
        </div>
        <MaskGroup />
        <MaskGroup1 />
        <Container3 />
      </div>
      <div aria-hidden="true" className="absolute border-[11px] border-black border-solid inset-[-11px] pointer-events-none rounded-[61px] shadow-[0px_4px_104px_0px_rgba(0,0,0,0.29)]" />
    </div>
  );
}