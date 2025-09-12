import type { SvgTech } from "../../../../../types/types";

export const ArrowBack = ({ size = '24px', onChange, style, stroke = '#a684ff' }: SvgTech) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height="24" 
        viewBox="0 0 24 24"
        fill="none" 
        stroke={stroke}
        onClick={onChange}
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className={`lucide lucide-arrow-left-icon lucide-arrow-left ${style}`}
    >
        <path d="m12 19-7-7 7-7"/>
        <path d="M19 12H5"/>
    </svg>
);

export const Quest = ({ size = '24px', onClick }: SvgTech) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size}
        onClick={onClick}
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"
    >
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <path d="M12 17h.01"/>
    </svg>
);
