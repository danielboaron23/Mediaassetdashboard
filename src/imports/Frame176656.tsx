import svgPaths from "./svg-r2ppls5pzp";
import imgRectangle202 from "figma:asset/f7855680c02e10fbca56885d3d58071e0cddedad.png";
import imgRectangle203 from "figma:asset/20f3221f11029b25fd0033389a4588687da49b77.png";
import imgRectangle204 from "figma:asset/2a11502a1532fa456124c21da85151959f25facb.png";
import imgRectangle205 from "figma:asset/7fecb953b563b642ac8b221ae1f0f19c4a5e4b89.png";
import imgRectangle206 from "figma:asset/bb974e43a4f81df9f28a932efc889cb02de1d658.png";
import imgRectangle207 from "figma:asset/99755c18de43dc65a472748010e757a46171b393.png";
import imgRectangle208 from "figma:asset/5d22babf255983359f893d54096318d1bd6a5444.png";
import imgRectangle209 from "figma:asset/9f0a388be5a1b588f9253ea316c55afad8f66844.png";
import imgRectangle210 from "figma:asset/65714c83f200969ff7fe12cdf7a9574c8940fb7e.png";
import imgRectangle211 from "figma:asset/9218804b6683b2bec54717f2e03b2386f05fb637.png";
import imgRectangle212 from "figma:asset/c0ea1e5d091e813029625a536efac7712c812efc.png";

function ChevronRight() {
  return (
    <div className="relative size-[24px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron_right">
          <mask height="24" id="mask0_1_5015" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_5015)">
            <path d={svgPaths.pb8bacc0} fill="var(--fill-0, white)" id="chevron_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-[4px]">
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "24", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <ChevronRight />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[16px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre" dir="auto">
          <span>{`Intros `}</span>
          <span className="text-[#8e8e8e]">(11)</span>
        </p>
      </div>
    </div>
  );
}

function ButtonGroupBaseM() {
  return (
    <div className="bg-[#282828] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="_Button Group Base/M">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] text-nowrap whitespace-pre">All</p>
    </div>
  );
}

function ButtonGroupBaseM1() {
  return (
    <div className="bg-neutral-700 content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="_Button Group Base/M">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] text-nowrap whitespace-pre">16:9</p>
    </div>
  );
}

function ButtonGroupBaseM2() {
  return (
    <div className="bg-[#282828] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="_Button Group Base/M">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] text-nowrap whitespace-pre">9:16</p>
    </div>
  );
}

function ButtonGroupBaseM3() {
  return (
    <div className="bg-[#282828] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="_Button Group Base/M">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] text-nowrap whitespace-pre">3:4</p>
    </div>
  );
}

function ButtonGroupBaseM4() {
  return (
    <div className="bg-[#282828] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="_Button Group Base/M">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] text-nowrap whitespace-pre">4:5</p>
    </div>
  );
}

function ButtonGroupBaseM5() {
  return (
    <div className="bg-[#282828] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="_Button Group Base/M">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] text-nowrap whitespace-pre">1:1</p>
    </div>
  );
}

function ButtonGroupM() {
  return (
    <div className="absolute content-stretch flex gap-px items-center left-1/2 overflow-clip rounded-[8px] top-0 translate-x-[-50%]" data-name="Button group/M">
      <ButtonGroupBaseM />
      <ButtonGroupBaseM1 />
      <ButtonGroupBaseM2 />
      <ButtonGroupBaseM3 />
      <ButtonGroupBaseM4 />
      <ButtonGroupBaseM5 />
    </div>
  );
}

function Publish() {
  return (
    <div className="absolute bottom-[-50%] left-0 right-[-50%] top-0" data-name="publish">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="publish">
          <mask height="24" id="mask0_1_3812" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, white)" fillOpacity="0.92" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_3812)">
            <path d={svgPaths.p7703400} fill="var(--fill-0, #F0F0F0)" id="upload" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Upload() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="upload">
      <Publish />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#333333] content-stretch flex gap-[4px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[8px] right-0 rounded-[8px] top-0" data-name="Button">
      <Upload />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] text-nowrap whitespace-pre">Upload Asset</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[1472px]">
      <Frame54 />
      <ButtonGroupM />
      <Button />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Header">
      <div className="absolute h-0 left-0 top-[56px] w-[1472px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1472 1">
            <path d="M0 0.5H1472" id="Line 9" stroke="var(--stroke-0, #404040)" />
          </svg>
        </div>
      </div>
      <Frame14 />
    </div>
  );
}

function TagSelectedBig() {
  return (
    <div className="bg-neutral-700 content-stretch flex gap-[4px] h-full items-center px-[16px] py-0 relative rounded-[24px] shrink-0" data-name="Tag/Selected/Big">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#e5ff00] text-[12px] text-nowrap whitespace-pre">All</p>
    </div>
  );
}

function Filter() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0" data-name="Filter">
      <TagSelectedBig />
    </div>
  );
}

function TagDefaultBig() {
  return (
    <div className="bg-[#282828] content-stretch flex gap-[4px] h-[28px] items-center px-[16px] py-0 relative rounded-[24px] shrink-0" data-name="Tag/Default/Big">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#f0f0f0] text-[12px] text-nowrap whitespace-pre">Essentials</p>
    </div>
  );
}

function Filter1() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0" data-name="Filter">
      <TagDefaultBig />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Filter />
      <Filter1 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain rounded-[2px] size-full" src={imgRectangle202} />
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[33.289px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[33.289px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">1:1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[37.43px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[37.43px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">4:5</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge />
      <Badge1 />
      <Badge2 />
      <Badge3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container />
    </div>
  );
}

function Frame52() {
  return (
    <div className="basis-0 content-stretch flex gap-[160px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[140px]">
        <p className="leading-[1.5]">Gridiron Opener</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[53px]">
        <p className="leading-[1.5]">2.4 MB</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[62px]">
        <p className="leading-[1.5]">Video</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[70px]">
        <p className="leading-[1.5]">6/10/2025</p>
      </div>
      <Frame1 />
    </div>
  );
}

function MoreVert() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_vert">
          <path d={svgPaths.p34810300} fill="var(--fill-0, #F0F0F0)" id="more_vert_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1472px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame51 />
      <Frame52 />
      <div className="h-[16px] relative shrink-0 w-[17px]" data-name="Vector">
        <div className="absolute inset-[-4.17%_-3.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18">
            <path d={svgPaths.p21303280} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <MoreVert />
    </div>
  );
}

function Frame53() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain rounded-[2px] size-full" src={imgRectangle203} />
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[33.289px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[33.289px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">1:1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[37.43px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[37.43px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">4:5</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge4 />
      <Badge5 />
      <Badge6 />
      <Badge7 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container1 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="basis-0 content-stretch flex gap-[160px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[140px]">
        <p className="leading-[1.5]">Touchdown Blast</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[53px]">
        <p className="leading-[1.5]">3.7 MB</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[62px]">
        <p className="leading-[1.5]">Video</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[70px]">
        <p className="leading-[1.5]">5/10/2025</p>
      </div>
      <Frame12 />
    </div>
  );
}

function MoreVert1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_vert">
          <path d={svgPaths.p34810300} fill="var(--fill-0, #F0F0F0)" id="more_vert_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1472px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame53 />
      <Frame55 />
      <div className="h-[16px] relative shrink-0 w-[17px]" data-name="Vector">
        <div className="absolute inset-[-3.13%_-2.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17">
            <path d={svgPaths.p9ea1d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <MoreVert1 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <div aria-hidden="true" className="absolute inset-0 rounded-[2px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-contain rounded-[2px] size-full" src={imgRectangle202} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[2px] size-full" src={imgRectangle204} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge8 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container2 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="basis-0 content-stretch flex gap-[160px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[140px]">
        <p className="leading-[1.5]">Victory Launch</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[53px]">
        <p className="leading-[1.5]">4.3 MB</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[62px]">
        <p className="leading-[1.5]">Video</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[70px]">
        <p className="leading-[1.5]">5/10/2025</p>
      </div>
      <Frame15 />
    </div>
  );
}

function MoreVert2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_vert">
          <path d={svgPaths.p34810300} fill="var(--fill-0, #F0F0F0)" id="more_vert_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1472px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Frame56 />
        </div>
      </div>
      <Frame57 />
      <div className="h-[16px] relative shrink-0 w-[17px]" data-name="Vector">
        <div className="absolute inset-[-4.17%_-3.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18">
            <path d={svgPaths.p21303280} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <MoreVert2 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <div aria-hidden="true" className="absolute inset-0 rounded-[2px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-contain rounded-[2px] size-full" src={imgRectangle202} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[2px] size-full" src={imgRectangle205} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge10() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge9 />
      <Badge10 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container3 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="basis-0 content-stretch flex gap-[160px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[140px]">
        <p className="leading-[1.5]">Slam Dunk Start</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[53px]">
        <p className="leading-[1.5]">368 KB</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[62px]">
        <p className="leading-[1.5]">Image</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[70px]">
        <p className="leading-[1.5]">1/10/2025</p>
      </div>
      <Frame17 />
    </div>
  );
}

function MoreVert3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_vert">
          <path d={svgPaths.p34810300} fill="var(--fill-0, #F0F0F0)" id="more_vert_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1472px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame58 />
      <Frame59 />
      <div className="h-[16px] relative shrink-0 w-[17px]" data-name="Vector">
        <div className="absolute inset-[-3.13%_-2.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17">
            <path d={svgPaths.p9ea1d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <MoreVert3 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <div className="absolute inset-0 overflow-hidden rounded-[2px]">
          <img alt="" className="absolute h-[177.56%] left-0 max-w-none top-[-2.88%] w-full" src={imgRectangle206} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Badge11() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge12() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge13() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[33.289px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[33.289px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">1:1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge14() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[37.43px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[37.43px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">4:5</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge11 />
      <Badge12 />
      <Badge13 />
      <Badge14 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container4 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="basis-0 content-stretch flex gap-[160px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[140px]">
        <p className="leading-[1.5]">Fast Break Image</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[53px]">
        <p className="leading-[1.5]">6.1 MB</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[62px]">
        <p className="leading-[1.5]">Template</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[70px]">
        <p className="leading-[1.5]">2/1/2025</p>
      </div>
      <Frame18 />
    </div>
  );
}

function MoreVert4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_vert">
          <path d={svgPaths.p34810300} fill="var(--fill-0, #F0F0F0)" id="more_vert_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1472px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame60 />
      <Frame61 />
      <div className="h-[16px] relative shrink-0 w-[17px]" data-name="Vector">
        <div className="absolute inset-[-3.13%_-2.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17">
            <path d={svgPaths.p9ea1d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <MoreVert4 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <div className="absolute inset-0 overflow-hidden rounded-[2px]">
          <img alt="" className="absolute h-[177.14%] left-0 max-w-none top-[-0.2%] w-full" src={imgRectangle207} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Badge15() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge15 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container5 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="basis-0 content-stretch flex gap-[160px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[140px]">
        <p className="leading-[1.5]">Baseline Burst</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[53px]">
        <p className="leading-[1.5]">9.2 MB</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[62px]">
        <p className="leading-[1.5]">Template</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[70px]">
        <p className="leading-[1.5]">7/12/2024</p>
      </div>
      <Frame19 />
    </div>
  );
}

function MoreVert5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_vert">
          <path d={svgPaths.p34810300} fill="var(--fill-0, #F0F0F0)" id="more_vert_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1472px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame62 />
      <Frame63 />
      <div className="h-[16px] relative shrink-0 w-[17px]" data-name="Vector">
        <div className="absolute inset-[-4.17%_-3.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18">
            <path d={svgPaths.p21303280} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <MoreVert5 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <div className="absolute inset-0 overflow-hidden rounded-[2px]">
          <img alt="" className="absolute h-[177.14%] left-0 max-w-none top-[-0.84%] w-full" src={imgRectangle208} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Badge16() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge17() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge18() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[33.289px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[33.289px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">1:1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge16 />
      <Badge17 />
      <Badge18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container6 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="basis-0 content-stretch flex gap-[160px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[140px]">
        <p className="leading-[1.5]">Hoops Hype</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[53px]">
        <p className="leading-[1.5]">2.5 MB</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[62px]">
        <p className="leading-[1.5]">Template</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[70px]">
        <p className="leading-[1.5]">3/11/2024</p>
      </div>
      <Frame20 />
    </div>
  );
}

function MoreVert6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_vert">
          <path d={svgPaths.p34810300} fill="var(--fill-0, #F0F0F0)" id="more_vert_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1472px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame64 />
      <Frame65 />
      <div className="h-[16px] relative shrink-0 w-[17px]" data-name="Vector">
        <div className="absolute inset-[-4.17%_-3.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18">
            <path d={svgPaths.p21303280} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <MoreVert6 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <div className="absolute inset-0 overflow-hidden rounded-[2px]">
          <img alt="" className="absolute h-[177.56%] left-0 max-w-none top-[-0.96%] w-full" src={imgRectangle209} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Badge19() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge20() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge19 />
      <Badge20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container7 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="basis-0 content-stretch flex gap-[160px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[140px]">
        <p className="leading-[1.5]">Court Vision</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[53px]">
        <p className="leading-[1.5]">8.8 MB</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[62px]">
        <p className="leading-[1.5]">Template</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[70px]">
        <p className="leading-[1.5]">9/11/2023</p>
      </div>
      <Frame21 />
    </div>
  );
}

function MoreVert7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_vert">
          <path d={svgPaths.p34810300} fill="var(--fill-0, #F0F0F0)" id="more_vert_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1472px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame66 />
      <Frame67 />
      <div className="h-[16px] relative shrink-0 w-[17px]" data-name="Vector">
        <div className="absolute inset-[-3.13%_-2.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17">
            <path d={svgPaths.p9ea1d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <MoreVert7 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[2px] size-full" src={imgRectangle210} />
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Badge21() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge22() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge21 />
      <Badge22 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container8 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="basis-0 content-stretch flex gap-[160px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[140px]">
        <p className="leading-[1.5]">Alley-Oop Art</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[53px]">
        <p className="leading-[1.5]">4.7 MB</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[62px]">
        <p className="leading-[1.5]">Template</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[70px]">
        <p className="leading-[1.5]">11/4/2023</p>
      </div>
      <Frame22 />
    </div>
  );
}

function MoreVert8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_vert">
          <path d={svgPaths.p34810300} fill="var(--fill-0, #F0F0F0)" id="more_vert_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1472px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame68 />
      <Frame69 />
      <div className="h-[16px] relative shrink-0 w-[17px]" data-name="Vector">
        <div className="absolute inset-[-3.13%_-2.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17">
            <path d={svgPaths.p9ea1d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <MoreVert8 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[2px] size-full" src={imgRectangle211} />
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Badge23() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge23 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container9 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="basis-0 content-stretch flex gap-[160px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[140px]">
        <p className="leading-[1.5]">Swish Starter</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[53px]">
        <p className="leading-[1.5]">10.3 MB</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[62px]">
        <p className="leading-[1.5]">Template</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[70px]">
        <p className="leading-[1.5]">4/9/2026</p>
      </div>
      <Frame23 />
    </div>
  );
}

function MoreVert9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_vert">
          <path d={svgPaths.p34810300} fill="var(--fill-0, #F0F0F0)" id="more_vert_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1472px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame70 />
      <Frame71 />
      <div className="h-[16px] relative shrink-0 w-[17px]" data-name="Vector">
        <div className="absolute inset-[-3.13%_-2.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17">
            <path d={svgPaths.p9ea1d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <MoreVert9 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[2px] size-full" src={imgRectangle212} />
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Badge24() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge25() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge26() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[33.289px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[33.289px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">1:1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge27() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[37.43px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[37.43px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">4:5</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge24 />
      <Badge25 />
      <Badge26 />
      <Badge27 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container10 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="basis-0 content-stretch flex gap-[160px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[140px]">
        <p className="leading-[1.5]">Nothing But Net</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[53px]">
        <p className="leading-[1.5]">5.4 MB</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[62px]">
        <p className="leading-[1.5]">Template</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] w-[70px]">
        <p className="leading-[1.5]">6/7/2024</p>
      </div>
      <Frame24 />
    </div>
  );
}

function MoreVert10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_vert">
          <path d={svgPaths.p34810300} fill="var(--fill-0, #F0F0F0)" id="more_vert_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1472px]">
      <Frame72 />
      <Frame73 />
      <div className="h-[16px] relative shrink-0 w-[17px]" data-name="Vector">
        <div className="absolute inset-[-3.13%_-2.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17">
            <path d={svgPaths.p9ea1d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <MoreVert10 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[#181818] content-stretch flex flex-col gap-[24px] items-start left-1/2 p-[24px] rounded-[8px] top-0 translate-x-[-50%] w-[1520px]">
      <div aria-hidden="true" className="absolute border border-neutral-700 border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Header />
      <Frame13 />
      <Frame50 />
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative size-[24px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron_right">
          <mask height="24" id="mask0_1_5015" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_5015)">
            <path d={svgPaths.pb8bacc0} fill="var(--fill-0, white)" id="chevron_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame74() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-[4px]">
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "24", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <ChevronRight1 />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[16px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre" dir="auto">
          <span>{`Midtros `}</span>
          <span className="text-[#8e8e8e]">(9)</span>
        </p>
      </div>
    </div>
  );
}

function ButtonGroupBaseM6() {
  return (
    <div className="bg-[#282828] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="_Button Group Base/M">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] text-nowrap whitespace-pre">All</p>
    </div>
  );
}

function ButtonGroupBaseM7() {
  return (
    <div className="bg-neutral-700 content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="_Button Group Base/M">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] text-nowrap whitespace-pre">16:9</p>
    </div>
  );
}

function ButtonGroupBaseM8() {
  return (
    <div className="bg-neutral-700 content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="_Button Group Base/M">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] text-nowrap whitespace-pre">9:16</p>
    </div>
  );
}

function ButtonGroupBaseM9() {
  return (
    <div className="bg-[#282828] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="_Button Group Base/M">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] text-nowrap whitespace-pre">3:4</p>
    </div>
  );
}

function ButtonGroupBaseM10() {
  return (
    <div className="bg-[#282828] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="_Button Group Base/M">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] text-nowrap whitespace-pre">4:5</p>
    </div>
  );
}

function ButtonGroupBaseM11() {
  return (
    <div className="bg-[#282828] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="_Button Group Base/M">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] text-nowrap whitespace-pre">1:1</p>
    </div>
  );
}

function ButtonGroupM1() {
  return (
    <div className="absolute content-stretch flex gap-px items-center left-1/2 overflow-clip rounded-[8px] top-0 translate-x-[-50%]" data-name="Button group/M">
      <ButtonGroupBaseM6 />
      <ButtonGroupBaseM7 />
      <ButtonGroupBaseM8 />
      <ButtonGroupBaseM9 />
      <ButtonGroupBaseM10 />
      <ButtonGroupBaseM11 />
    </div>
  );
}

function Publish1() {
  return (
    <div className="absolute bottom-[-50%] left-0 right-[-50%] top-0" data-name="publish">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="publish">
          <mask height="24" id="mask0_1_3812" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, white)" fillOpacity="0.92" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_3812)">
            <path d={svgPaths.p7703400} fill="var(--fill-0, #F0F0F0)" id="upload" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Upload1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="upload">
      <Publish1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#333333] content-stretch flex gap-[4px] h-[32px] items-center justify-center left-[1336px] pl-[8px] pr-[16px] py-[8px] rounded-[8px] top-0" data-name="Button">
      <Upload1 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#f0f0f0] text-[14px] text-nowrap whitespace-pre">Upload Asset</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[1480px]">
      <Frame74 />
      <ButtonGroupM1 />
      <Button1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Header">
      <div className="absolute h-0 left-0 top-[56px] w-[1472px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1472 1">
            <path d="M0 0.5H1472" id="Line 9" stroke="var(--stroke-0, #404040)" />
          </svg>
        </div>
      </div>
      <Frame25 />
    </div>
  );
}

function TagSelectedBig1() {
  return (
    <div className="bg-neutral-700 content-stretch flex gap-[4px] h-full items-center px-[16px] py-0 relative rounded-[24px] shrink-0" data-name="Tag/Selected/Big">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[#e5ff00] text-[12px] text-nowrap whitespace-pre">All</p>
    </div>
  );
}

function Filter2() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0" data-name="Filter">
      <TagSelectedBig1 />
    </div>
  );
}

function TagDefaultBig1() {
  return (
    <div className="bg-[#282828] content-stretch flex gap-[4px] h-[28px] items-center px-[16px] py-0 relative rounded-[24px] shrink-0" data-name="Tag/Default/Big">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#f0f0f0] text-[12px] text-nowrap whitespace-pre">Essentials</p>
    </div>
  );
}

function Filter3() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0" data-name="Filter">
      <TagDefaultBig1 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Filter2 />
      <Filter3 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain rounded-[2px] size-full" src={imgRectangle202} />
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[80px] grow items-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f0f0f0] text-[14px]">
      <div className="flex flex-col justify-end relative shrink-0 w-[140px]">
        <p className="leading-[1.5]">Gridiron Opener</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[53px]">
        <p className="leading-[1.5]">2.4 MB</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[42px]">
        <p className="leading-[1.5]">Video</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">6/10/2025</p>
      </div>
    </div>
  );
}

function Badge28() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge29() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge30() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[33.289px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[33.289px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">1:1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge31() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[37.43px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[37.43px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">4:5</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge28 />
      <Badge29 />
      <Badge30 />
      <Badge31 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container11 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1473.06px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame75 />
      <Frame76 />
      <Frame27 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain rounded-[2px] size-full" src={imgRectangle203} />
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[80px] grow items-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f0f0f0] text-[14px]">
      <div className="flex flex-col justify-end relative shrink-0 w-[140px]">
        <p className="leading-[1.5]">Touchdown Blast</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[53px]">
        <p className="leading-[1.5]">3.7 MB</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[42px]">
        <p className="leading-[1.5]">Video</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">5/10/2025</p>
      </div>
    </div>
  );
}

function Badge32() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge33() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge34() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[33.289px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[33.289px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">1:1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge35() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[37.43px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[37.43px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">4:5</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge32 />
      <Badge33 />
      <Badge34 />
      <Badge35 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container12 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1473.06px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame77 />
      <Frame78 />
      <Frame29 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <div aria-hidden="true" className="absolute inset-0 rounded-[2px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-contain rounded-[2px] size-full" src={imgRectangle202} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[2px] size-full" src={imgRectangle204} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[80px] grow items-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f0f0f0] text-[14px]">
      <div className="flex flex-col justify-end relative shrink-0 w-[140px]">
        <p className="leading-[1.5]">Victory Launch</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[53px]">
        <p className="leading-[1.5]">4.3 MB</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[42px]">
        <p className="leading-[1.5]">Video</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">5/10/2025</p>
      </div>
    </div>
  );
}

function Badge36() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge36 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container13 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1473.06px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Frame79 />
        </div>
      </div>
      <Frame80 />
      <Frame31 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <div aria-hidden="true" className="absolute inset-0 rounded-[2px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-contain rounded-[2px] size-full" src={imgRectangle202} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[2px] size-full" src={imgRectangle205} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[80px] grow items-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f0f0f0] text-[14px]">
      <div className="flex flex-col justify-end relative shrink-0 w-[140px]">
        <p className="leading-[1.5]">Slam Dunk Start</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[53px]">
        <p className="leading-[1.5]">368 KB</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[42px]">
        <p className="leading-[1.5]">Image</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">1/10/2025</p>
      </div>
    </div>
  );
}

function Badge37() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge38() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge37 />
      <Badge38 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container14 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1473.06px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame81 />
      <Frame82 />
      <Frame33 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <div className="absolute inset-0 overflow-hidden rounded-[2px]">
          <img alt="" className="absolute h-[177.56%] left-0 max-w-none top-[-2.88%] w-full" src={imgRectangle206} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[80px] grow items-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f0f0f0] text-[14px]">
      <div className="flex flex-col justify-end relative shrink-0 w-[140px]">
        <p className="leading-[1.5]">Fast Break Image</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[53px]">
        <p className="leading-[1.5]">6.1 MB</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[42px]">
        <p className="leading-[1.5]">Video</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">2/1/2025</p>
      </div>
    </div>
  );
}

function Badge39() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge40() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge39 />
      <Badge40 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container15 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1473.06px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame83 />
      <Frame84 />
      <Frame35 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <div className="absolute inset-0 overflow-hidden rounded-[2px]">
          <img alt="" className="absolute h-[177.14%] left-0 max-w-none top-[-0.2%] w-full" src={imgRectangle207} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[80px] grow items-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f0f0f0] text-[14px]">
      <div className="flex flex-col justify-end relative shrink-0 w-[140px]">
        <p className="leading-[1.5]">Baseline Burst</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[53px]">
        <p className="leading-[1.5]">9.2 MB</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[42px]">
        <p className="leading-[1.5]">Video</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">7/12/2024</p>
      </div>
    </div>
  );
}

function Badge41() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge42() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge41 />
      <Badge42 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container16 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1473.06px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame85 />
      <Frame86 />
      <Frame37 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <div className="absolute inset-0 overflow-hidden rounded-[2px]">
          <img alt="" className="absolute h-[177.14%] left-0 max-w-none top-[-0.84%] w-full" src={imgRectangle208} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[80px] grow items-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f0f0f0] text-[14px]">
      <div className="flex flex-col justify-end relative shrink-0 w-[140px]">
        <p className="leading-[1.5]">Hoops Hype</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[53px]">
        <p className="leading-[1.5]">2.5 MB</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[42px]">
        <p className="leading-[1.5]">Image</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">3/11/2024</p>
      </div>
    </div>
  );
}

function Badge43() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge44() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge43 />
      <Badge44 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container17 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1473.06px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame87 />
      <Frame88 />
      <Frame39 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <div className="absolute inset-0 overflow-hidden rounded-[2px]">
          <img alt="" className="absolute h-[177.56%] left-0 max-w-none top-[-0.96%] w-full" src={imgRectangle209} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[80px] grow items-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f0f0f0] text-[14px]">
      <div className="flex flex-col justify-end relative shrink-0 w-[140px]">
        <p className="leading-[1.5]">Court Vision</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[53px]">
        <p className="leading-[1.5]">8.8 MB</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[42px]">
        <p className="leading-[1.5]">Video</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">9/11/2023</p>
      </div>
    </div>
  );
}

function Badge45() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge46() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge45 />
      <Badge46 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container18 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1473.06px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame89 />
      <Frame90 />
      <Frame41 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[2px] size-full" src={imgRectangle210} />
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[80px] grow items-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f0f0f0] text-[14px]">
      <div className="flex flex-col justify-end relative shrink-0 w-[140px]">
        <p className="leading-[1.5]">Alley-Oop Art</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[53px]">
        <p className="leading-[1.5]">4.7 MB</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[42px]">
        <p className="leading-[1.5]">Image</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">11/4/2023</p>
      </div>
    </div>
  );
}

function Badge47() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge48() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge47 />
      <Badge48 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container19 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1473.06px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame91 />
      <Frame92 />
      <Frame43 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[2px] size-full" src={imgRectangle211} />
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[80px] grow items-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f0f0f0] text-[14px]">
      <div className="flex flex-col justify-end relative shrink-0 w-[140px]">
        <p className="leading-[1.5]">Swish Starter</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[53px]">
        <p className="leading-[1.5]">10.3 MB</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[42px]">
        <p className="leading-[1.5]">Video</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">4/9/2026</p>
      </div>
    </div>
  );
}

function Badge49() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge50() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge49 />
      <Badge50 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container20 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1473.06px]">
      <div aria-hidden="true" className="absolute border-[#333333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame93 />
      <Frame94 />
      <Frame45 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[2px] shrink-0 w-[70px]">
      <div className="absolute aspect-[349/196] bottom-0 left-[calc(50%-0.5px)] pointer-events-none rounded-[2px] top-0 translate-x-[-50%]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[2px] size-full" src={imgRectangle212} />
        <div aria-hidden="true" className="absolute border border-[#333333] border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="basis-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[80px] grow items-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f0f0f0] text-[14px]">
      <div className="flex flex-col justify-end relative shrink-0 w-[140px]">
        <p className="leading-[1.5]">Nothing But Net</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[53px]">
        <p className="leading-[1.5]">5.4 MB</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 w-[42px]">
        <p className="leading-[1.5]">Image</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">6/7/2024</p>
      </div>
    </div>
  );
}

function Badge51() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.188px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.188px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">16:9</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge52() {
  return (
    <div className="bg-neutral-700 h-[22px] relative rounded-[8px] shrink-0 w-[43.156px]" data-name="Badge">
      <div className="content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[43.156px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">9:16</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Badge51 />
      <Badge52 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container21 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-0 py-[8px] relative shrink-0 w-[1473.06px]">
      <Frame95 />
      <Frame96 />
      <Frame47 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
      <Frame28 />
      <Frame30 />
      <Frame32 />
      <Frame34 />
      <Frame36 />
      <Frame38 />
      <Frame40 />
      <Frame42 />
      <Frame44 />
      <Frame46 />
      <Frame48 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute bg-[#181818] content-stretch flex flex-col gap-[24px] items-start left-1/2 p-[24px] rounded-[8px] top-[830px] translate-x-[-50%] w-[1520px]">
      <div aria-hidden="true" className="absolute border border-neutral-700 border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Header1 />
      <Frame26 />
      <Frame97 />
    </div>
  );
}

export default function Frame98() {
  return (
    <div className="relative size-full">
      <Frame16 />
      <Frame49 />
    </div>
  );
}