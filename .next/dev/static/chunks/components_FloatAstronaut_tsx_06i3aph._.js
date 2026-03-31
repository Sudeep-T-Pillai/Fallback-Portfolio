(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/FloatAstronaut.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingAstronaut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function FloatingAstronaut() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingAstronaut.useEffect": ()=>{
            let x = window.innerWidth / 2;
            let y = window.innerHeight / 2;
            let vx = 0.3; // horizontal speed
            let vy = -0.2; // vertical speed
            const animate = {
                "FloatingAstronaut.useEffect.animate": ()=>{
                    x += vx;
                    y += vy;
                    // 🧠 add slight randomness (space drift)
                    vx += (Math.random() - 0.5) * 0.02;
                    vy += (Math.random() - 0.5) * 0.02;
                    // limit speed (important)
                    vx = Math.max(-0.6, Math.min(0.6, vx));
                    vy = Math.max(-0.6, Math.min(0.6, vy));
                    // ✅ WRAP
                    if (x > window.innerWidth) x = 0;
                    if (x < 0) x = window.innerWidth;
                    if (y > window.innerHeight) y = 0;
                    if (y < 0) y = window.innerHeight;
                    if (ref.current) {
                        ref.current.style.transform = `translate(${x}px, ${y}px) rotate(${vx * 50}deg)`;
                    }
                    requestAnimationFrame(animate);
                }
            }["FloatingAstronaut.useEffect.animate"];
            animate();
        }
    }["FloatingAstronaut.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        ref: ref,
        src: "/astronaut.svg",
        className: "fixed w-16 pointer-events-none"
    }, void 0, false, {
        fileName: "[project]/components/FloatAstronaut.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(FloatingAstronaut, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = FloatingAstronaut;
var _c;
__turbopack_context__.k.register(_c, "FloatingAstronaut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_FloatAstronaut_tsx_06i3aph._.js.map