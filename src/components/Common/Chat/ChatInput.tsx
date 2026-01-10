import { useRef, useEffect } from "react";

type Props = {
    value: string;
    onChange: (v: string) => void;
    onSend: () => void;
};

const ChatInput: React.FC<Props> = ({ value, onChange, onSend }) => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        ref.current?.focus();
    }, []);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSend();
            }}
            className="border-t border-black/10 bg-white"
        >
            <div className="px-4 py-3">
                <div className="flex items-center gap-2">
                    <input
                        ref={ref}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
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
    );
};

export default ChatInput;
