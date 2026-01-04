// // components/ChatWidget.tsx
// import React, { useEffect, useRef, useState } from "react";
// import HeadImg from "../../assets/chat.svg"; // your head image

// type Props = {
//   size?: number; // px size of the head image
// };

// const ChatWidget: React.FC<Props> = ({ size = 90 }) => {
//   const [open, setOpen] = useState(false);
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (open) inputRef.current?.focus();
//   }, [open]);

//   return (
//     <>
//       {/* Floating Head */}
//       <button
//         aria-label={open ? "Chat launcher (panel open)" : "Open chat"}
//         onClick={() => setOpen(!open)}
//         className={[
//           "fixed z-[900]",
//           "right-[calc(1.25rem+env(safe-area-inset-right,0px))]",
//           "bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))]",
//           "transition hover:scale-[1.05] active:scale-[0.98]",
//         ].join(" ")}
//         style={{ width: size, height: size }}
//       >
//         <img
//           src={HeadImg}
//           alt="Chat"
//           className="w-full h-full object-contain"
//           draggable={false}
//         />
//       </button>

//       {/* Chat Panel */}
//       {open && (
//         <div
//           className="fixed z-[1000] w-[380px] max-w-[92vw] overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e0e] text-white shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
//           style={{
//             right: "calc(1.25rem + env(safe-area-inset-right,0px))",
//             bottom: `${size + 16}px`, // gap above head
//           }}
//           role="dialog"
//           aria-modal="true"
//         >
//           <header className="flex items-center justify-between px-4 py-3 bg-white/5">
//             <span className="text-sm font-semibold">Chat with us</span>
//             <button
//               onClick={() => setOpen(false)}
//               aria-label="Close chat"
//               className="p-1 hover:bg-white/10 rounded"
//             >
//               <svg
//                 viewBox="0 0 24 24"
//                 className="h-5 w-5"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 fill="none"
//               >
//                 <path d="M6 6l12 12M18 6L6 18" />
//               </svg>
//             </button>
//           </header>

//           <div className="h-64 overflow-y-auto px-4 py-3 space-y-3 text-sm">
//             <div className="max-w-[85%] rounded-xl bg-white/10 px-3 py-2">
//               Hey! How can we help?
//             </div>
//           </div>

//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               (e.target as HTMLFormElement).reset();
//               inputRef.current?.focus();
//             }}
//             className="flex items-center gap-2 p-3 bg-white/5"
//           >
//             <input
//               ref={inputRef}
//               type="text"
//               placeholder="Type a message…"
//               className="flex-1 rounded-full bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-white/30"
//             />
//             <button
//               type="submit"
//               className="rounded-full bg-indigo-500 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-400"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       )}
//     </>
//   );
// };

// export default ChatWidget;
// components/ChatWidget.tsx
import React, { useEffect, useRef, useState } from "react";
import HeadImg from "../../assets/chat.svg"; // launcher (blue head)
import HeaderHead from "../../assets/chat.svg"; // header avatar (can be a different asset)

type Props = {
  launcherSize?: number;   // size of floating head button
  panelWidth?: number;     // chat panel width
};

const ChatWidget: React.FC<Props> = ({
  launcherSize = 72,
  panelWidth = 360,
}) => {
  const [open, setOpen] = useState(false); // set false in prod
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <>
      {/* ===== Floating launcher (no white background) ===== */}
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-label={open ? "Hide chat" : "Open chat"}
        className="fixed z-[900] transition hover:scale-[1.04] active:scale-[0.98]"
        style={{
          right: "calc(1.0rem + env(safe-area-inset-right,0px))",
          bottom: "calc(1.0rem + env(safe-area-inset-bottom,0px))",
          width: launcherSize,
          height: launcherSize,
          // subtle drop-shadow behind the head
          filter: "drop-shadow(0 12px 22px rgba(0,0,0,0.35))",
        }}
      >
        <img
          src={HeadImg}
          alt="Chat"
          draggable={false}
          className="h-full w-full object-contain"
        />
      </button>

      {/* ===== Chat panel (smaller, cleaner) ===== */}
      {open && (
        <section
          className="fixed z-[1000] rounded-[16px] bg-white text-[#111] border border-black/8 overflow-hidden"
          style={{
            right: "calc(1.0rem + env(safe-area-inset-right,0px))",
            bottom: `calc(${launcherSize}px + 14px)`,
            width: panelWidth,
            // shadow a bit softer than before
            boxShadow: "0 22px 48px rgba(0,0,0,0.38)",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Chat"
        >
          {/* Header */}
          <header className="relative flex items-center gap-3 px-4 py-3 bg-white">
            {/* smaller header avatar with a very light halo */}
            <div className="h-7 w-7 rounded-full overflow-hidden ring-1 ring-black/5 bg-[#F4F7FF]">
              <img
                src={HeaderHead}
                alt=""
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>
            <h3 className="text-[18px] font-semibold">Lexi</h3>

            {/* close button: small round white, crisp black “×” */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="ml-auto grid place-items-center h-8 w-8 rounded-full bg-white border border-black/10 hover:bg-black/5 transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4.5 w-4.5"
                stroke="#111"
                strokeWidth="2.2"
                fill="none"
                strokeLinecap="round"
              >
                <path d="M6 6L18 18M18 6L6 18" />
              </svg>
            </button>

            {/* hairline divider like the screenshot */}
            <span className="absolute inset-x-0 bottom-0 h-px bg-black/10" />
          </header>

          {/* Scrollable messages area (shorter height) */}
          <div className="h-[420px] overflow-y-auto px-4 py-4 space-y-4">
            {/* day/time chip */}
            <div className="text-center">
              <span className="inline-block rounded-full bg-black/6 text-[11px] leading-[18px] px-3 text-black/65">
                Wed 8:21 AM
              </span>
            </div>

            {/* bot bubble */}
            <div className="flex items-start gap-3">
              <div className="mt-1 h-6 w-6 rounded-full overflow-hidden ring-1 ring-black/5 bg-[#F4F7FF]">
                <img src={HeaderHead} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="max-w-[80%] rounded-[14px] bg-[#F2F2F2] px-3.5 py-3 text-[15px] leading-[1.35] shadow-sm">
                <p>Hello, I’m Lexi. I’m your personal assistant.</p>
                <p className="mt-1">How can I help you?</p>
              </div>
            </div>

            {/* user bubble (right) */}
            <div className="flex justify-end">
              <div className="max-w-[74%]">
                <div className="rounded-[14px] bg-[#DDE7FF] px-3.5 py-3 text-[15px] leading-[1.35] shadow-sm">
                  Hello, I’m Nilam
                </div>
                <div className="mt-1 flex items-center gap-2 text-[11px] text-black/60">
                  <span className="inline-block rounded bg-black/6 px-2 py-[2px]">
                    8:22 AM
                  </span>
                  {/* tiny icons (read / edit) */}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    className="opacity-60"
                  >
                    <path d="M9 12l2 2 4-4" strokeWidth="2" />
                    <circle cx="12" cy="12" r="9" strokeWidth="2" />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    className="opacity-60"
                  >
                    <path d="M16 4l4 4-12 12H4v-4L16 4z" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Composer (large rounded input; white send button) */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              (e.target as HTMLFormElement).reset();
              inputRef.current?.focus();
            }}
            className="border-t border-black/10 bg-white"
          >
            <div className="px-4 py-3">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type your message here…"
                  className="flex-1 h-12 rounded-[14px] bg-[#F3F3F3] px-4 text-[15px] outline-none ring-1 ring-black/10 focus:ring-black/20"
                />
                <button
                  type="submit"
                  aria-label="Send"
                  className="grid place-items-center h-12 w-12 rounded-[14px] bg-white border border-black/10 hover:bg-black/5 transition"
                >
                  {/* paper-plane */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[19px] w-[19px]"
                    fill="none"
                    stroke="#111"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default ChatWidget;
