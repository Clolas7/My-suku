import svgPaths from "../imports/svg-26uyejqhgs";
import imgImageRestoAfricains from "figma:asset/3c80c36d5555d1a3943f39a29f1310d6110401db.png";
import imgImageCourseEpiceries from "figma:asset/9e5a57a213a458a2181368f4bc21ef3894a45ddf.png";
import imgImagePharmacie from "figma:asset/d6321cf3c116f7974c2f026a4404d86154d31aff.png";
import imgImageFastFood from "figma:asset/a32b4e8e0663b13fafbfe77d6c67e6251709882e.png";
import imgRectangle3 from "figma:asset/2a0ec8c82f4ee22fa004663e53558511a0d2ab7b.png";
import imgRectangle4 from "figma:asset/5da9c6666fbbdc470a291aae8cbf29c43a5bca1c.png";
import imgRectangle5 from "figma:asset/344e9cbee0127fb68b28e28b1d8473178d0c0d84.png";
import imgRectangle6 from "figma:asset/4e0ceeac81c5db4fc87696d923d8ac42973b2cfa.png";
import imgContainer from "figma:asset/2dc5a0fbca2ee3406408ca799fd0bb1877c3ef5d.png";

export default function HomeCategorie() {
  return (
    <div className="relative w-full h-full bg-black overflow-y-auto">
      {/* Header avec image de fond */}
      <div className="relative h-[173px] w-full rounded-bl-[20px] rounded-br-[20px]">
        <img alt="" className="absolute inset-0 w-full h-full object-cover rounded-bl-[20px] rounded-br-[20px]" src={imgContainer} />
        
        {/* Adresse */}
        <div className="absolute top-[20px] left-1/2 -translate-x-1/2 bg-[#a30909] flex gap-[12px] h-[40px] items-center justify-center rounded-full px-4">
          <svg className="size-5" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p27db28c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66574" />
            <path d={svgPaths.p2d005d00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66574" />
          </svg>
          <p className="font-['Arial:Bold',sans-serif] text-[18px] text-white">Rue de Tiznit</p>
          <svg className="size-5" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p9bc3f80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66574" />
          </svg>
        </div>

        {/* Barre de recherche */}
        <div className="absolute bottom-[20px] left-[19px] right-[19px] bg-[rgba(37,40,48,0.75)] h-[44px] rounded-[15px] flex items-center justify-between px-5">
          <p className="font-['Arial:Regular',sans-serif] text-[14px] text-white">Find what you want</p>
          <div className="size-[24px]">
            <svg className="size-full" fill="none" viewBox="0 0 18 18">
              <path d="M7.22288 13.9618H0.750358" stroke="#FF7269" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path clipRule="evenodd" d={svgPaths.p779b0f0} fillRule="evenodd" stroke="#FF7269" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M10.2558 3.47313H16.7274" stroke="#FF7269" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path clipRule="evenodd" d={svgPaths.p37c96500} fillRule="evenodd" stroke="#FF7269" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Catégories */}
      <div className="px-4 pt-6">
        <h2 className="font-['Arial:Bold',sans-serif] text-[24px] text-white mb-6">Catégories</h2>
        
        <div className="grid grid-cols-4 gap-4">
          {/* Resto africains */}
          <div className="flex flex-col items-center gap-3">
            <div className="bg-neutral-900 size-20 rounded-full overflow-hidden shadow-md">
              <img alt="" className="w-full h-full object-cover opacity-90" src={imgImageRestoAfricains} />
            </div>
            <p className="font-['Arial:Bold',sans-serif] text-[12px] text-white text-center leading-[15px] w-12">Resto africains</p>
          </div>

          {/* Course & épiceries */}
          <div className="flex flex-col items-center gap-3">
            <div className="bg-neutral-900 size-20 rounded-full overflow-hidden shadow-md">
              <img alt="" className="w-full h-full object-cover opacity-90" src={imgImageCourseEpiceries} />
            </div>
            <p className="font-['Arial:Bold',sans-serif] text-[12px] text-white text-center leading-[15px] w-[53px]">{`Course & épiceries`}</p>
          </div>

          {/* Pharmacie */}
          <div className="flex flex-col items-center gap-3">
            <div className="bg-neutral-900 size-20 rounded-full overflow-hidden shadow-md">
              <img alt="" className="w-full h-full object-cover opacity-90" src={imgImagePharmacie} />
            </div>
            <p className="font-['Arial:Bold',sans-serif] text-[12px] text-white text-center leading-[15px]">Pharmacie</p>
          </div>

          {/* Fast Food */}
          <div className="flex flex-col items-center gap-3">
            <div className="bg-neutral-900 size-20 rounded-full overflow-hidden shadow-md">
              <img alt="" className="w-full h-full object-cover opacity-90" src={imgImageFastFood} />
            </div>
            <p className="font-['Arial:Bold',sans-serif] text-[12px] text-white text-center leading-[15px]">Fast Food</p>
          </div>
        </div>
      </div>

      {/* Cartes promotionnelles */}
      <div className="px-4 pt-8 pb-24 space-y-4">
        {/* Restaurants */}
        <div className="relative h-[190px] rounded-[22px] overflow-hidden">
          <img alt="" className="absolute inset-0 w-full h-full object-cover rounded-[22px]" src={imgRectangle3} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.45)] rounded-[22px]" />
          
          <div className="absolute top-[18px] left-[18.77px] bg-[rgba(0,0,0,0.55)] px-2 py-2.5 rounded-2xl">
            <p className="font-['Poppins:Bold',sans-serif] text-[12px] text-white">Restaurants</p>
          </div>

          <div className="absolute top-[111px] left-[26.28px] size-[55px] flex items-center justify-center">
            <div className="absolute inset-0 bg-white opacity-70 rounded-full blur-sm" />
            <svg className="relative size-9" fill="none" viewBox="0 0 36 40">
              <path d={svgPaths.p1da4f200} fill="white" />
              <path d={svgPaths.pf869e00} fill="white" />
            </svg>
          </div>

          <div className="absolute top-[37px] right-[6.69px] bg-[rgba(0,0,0,0.41)] px-4 py-2.5 rounded-2xl max-w-[167px]">
            <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-white text-right leading-snug">
              Savourez vos plats préférés chez vous.
            </p>
          </div>
        </div>

        {/* Courses & Épicerie */}
        <div className="relative h-[190px] rounded-[22px] overflow-hidden">
          <img alt="" className="absolute inset-0 w-full h-full object-cover rounded-[22px]" src={imgRectangle4} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.45)] rounded-[22px]" />
          
          <div className="absolute top-[18px] left-[18.77px] bg-[rgba(0,0,0,0.55)] px-2 py-2.5 rounded-2xl">
            <p className="font-['Poppins:Bold',sans-serif] text-[12px] text-white">Courses & Épicerie</p>
          </div>

          <div className="absolute top-[111px] left-[26.28px] size-[55px] flex items-center justify-center">
            <div className="absolute inset-0 bg-white opacity-70 rounded-full blur-sm" />
            <svg className="relative size-9" fill="none" viewBox="0 0 36 40">
              <path d={svgPaths.p55d0b00} fill="white" />
            </svg>
          </div>

          <div className="absolute top-[40px] right-[6.53px] bg-[rgba(0,0,0,0.41)] px-4 py-2.5 rounded-2xl max-w-[154px]">
            <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-white text-right leading-snug">
              Vos courses livrées en 30 minutes.
            </p>
          </div>
        </div>

        {/* Pharmacie */}
        <div className="relative h-[190px] rounded-[22px] overflow-hidden">
          <img alt="" className="absolute inset-0 w-full h-full object-cover rounded-[22px]" src={imgRectangle5} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.45)] rounded-[22px]" />
          
          <div className="absolute top-[18px] left-[13.14px] bg-[rgba(0,0,0,0.55)] px-2 py-2.5 rounded-2xl">
            <p className="font-['Poppins:Bold',sans-serif] text-[12px] text-white">Pharmacie</p>
          </div>

          <div className="absolute top-[111px] left-[20.65px] size-[55px] flex items-center justify-center">
            <div className="absolute inset-0 bg-white opacity-70 rounded-full blur-sm" />
            <svg className="relative size-12" fill="none" viewBox="0 0 46 48">
              <path clipRule="evenodd" d={svgPaths.p3dc07100} fill="white" fillRule="evenodd" />
            </svg>
          </div>

          <div className="absolute top-[43px] right-[11.29px] bg-[rgba(0,0,0,0.41)] px-4 py-2.5 rounded-2xl max-w-[143px]">
            <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-white text-right leading-snug">
              {`Santé & Bien-être à portée`}
            </p>
          </div>
        </div>

        {/* Livraison Express */}
        <div className="relative h-[190px] rounded-[22px] overflow-hidden">
          <img alt="" className="absolute inset-0 w-full h-full object-cover rounded-[22px]" src={imgRectangle6} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.45)] rounded-[22px]" />
          
          <div className="absolute top-[18px] left-[13.14px] bg-[rgba(0,0,0,0.55)] px-2 py-2.5 rounded-2xl">
            <p className="font-['Poppins:Bold',sans-serif] text-[12px] text-white">Livraison Express</p>
          </div>

          <div className="absolute top-[111px] left-[20.65px] size-[55px] flex items-center justify-center">
            <div className="absolute inset-0 bg-white opacity-70 rounded-full blur-sm" />
            <svg className="relative size-12" fill="none" viewBox="0 0 46 48">
              <path clipRule="evenodd" d={svgPaths.p3dc07100} fill="white" fillRule="evenodd" />
            </svg>
          </div>

          <div className="absolute top-[55px] right-[18.57px] bg-[rgba(0,0,0,0.41)] px-4 py-2.5 rounded-2xl max-w-[169px]">
            <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-white text-right leading-snug">
              Rapide, Fiable, AfriGo !
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[rgba(37,40,48,0.8)] h-[73px] rounded-tl-[40px] rounded-tr-[40px] backdrop-blur-lg">
        <div className="flex items-center justify-around h-full px-8 pt-2">
          <div className="flex flex-col items-center gap-1">
            <svg className="size-6" fill="none" viewBox="0 0 21 21">
              <path d={svgPaths.pe307f00} stroke="#FF7269" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p18dad900} stroke="#FF7269" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            <p className="font-['Arial:Bold',sans-serif] text-[12px] text-white">Accueil</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <svg className="size-6" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p15e3d540} fill="white" />
            </svg>
            <p className="font-['Arial:Bold',sans-serif] text-[12px] text-white">Notifications</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <svg className="size-6" fill="none" viewBox="0 0 19 21">
              <path d="M7.5 19.5H0.75V0.75H16.5V12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p2cd3fd00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            <p className="font-['Arial:Bold',sans-serif] text-[12px] text-white">Commandes</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <svg className="size-6" fill="none" viewBox="0 0 24 24">
              <path clipRule="evenodd" d={svgPaths.p18fb9000} fill="white" fillRule="evenodd" />
            </svg>
            <p className="font-['Arial:Bold',sans-serif] text-[12px] text-white">Compte</p>
          </div>
        </div>
      </div>
    </div>
  );
}
