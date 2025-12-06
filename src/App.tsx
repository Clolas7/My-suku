import imgImage49 from "figma:asset/0693873d809f14dae02f2fad48d1775df2fa7d10.png";
import imgRectangle from "figma:asset/424fb1edb7233e1a1dfa8bcc4d61cde5cf5ad032.png";
import imgUnsplashTqOeGdRNowY from "figma:asset/9cf7b7c559c29870db7a7e265633a9e9df677cfe.png";

function AndroidLarge() {
  return (
    <div className="absolute bg-black h-[800px] left-0 rounded-[50px] top-0 w-[360px]" data-name="Android Large - 14">
      <div className="content-stretch flex flex-col h-[800px] items-center overflow-clip relative rounded-[inherit] w-[360px]">
        <div className="h-[800px] mix-blend-color-dodge opacity-20 relative shrink-0 w-[996px]" data-name="image 49">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage49} />
        </div>
        <div className="bg-repeat bg-size-[220px_220px] bg-top-left h-[800px] opacity-10 shrink-0 w-[359.733px]" data-name="Rectangle" style={{ backgroundImage: `url('${imgRectangle}')` }} />
        <div className="relative shrink-0 size-[796.92px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 797 797">
            <circle cx="398.46" cy="398.46" fill="var(--fill-0, black)" id="Ellipse 4015" r="398.46" />
          </svg>
        </div>
        <div className="relative shrink-0 size-[796.92px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Ellipse 4016"></g>
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[11px] border-black border-solid inset-[-11px] pointer-events-none rounded-[61px] shadow-[0px_4px_104px_0px_rgba(0,0,0,0.29)]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[50px] px-[18px] py-0 top-[454px]" data-name="Heading 2">
      <p className="font-['Arial:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fffdfd] text-[16px] text-center text-nowrap whitespace-pre">Vos commandes livrées en Clic</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[800px] items-start left-0 px-[41px] py-[320px] top-0 w-[360px]">
      <AndroidLarge />
      <Heading />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute box-border content-stretch flex h-[800px] items-center justify-between left-[-1px] px-0 py-[165px] top-[-1px] w-[360px]">
      <Frame />
      <div className="absolute h-[381px] left-0 shadow-[0px_32px_43px_0px_rgba(0,0,0,0.56)] top-[165px] w-[360px]" data-name="unsplash:TqOEGdRNowY">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUnsplashTqOeGdRNowY} />
      </div>
    </div>
  );
}

export default function StartPage() {
  return (
    <div className="bg-black border border-black border-solid relative size-full" data-name="Start page">
      <Frame1 />
    </div>
  );
}
