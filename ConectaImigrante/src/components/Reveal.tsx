import { useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Reveal({ children, duration = 1, delay = 0, y = 20 }: { children: ReactNode; duration?: number; delay?: number; y?: number }) {
    const elementRef = useRef(null);

    useGSAP(() => {
        gsap.from(elementRef.current, {
            opacity: 0,
            y: y,
            duration: duration,
            delay: delay,
            ease: "power2.out",
        });
    }, { scope: elementRef }); // O scope garante que a animação seja isolada

    return (
        <div ref={elementRef} className="w-fit">
            {children}
        </div>
    );
}