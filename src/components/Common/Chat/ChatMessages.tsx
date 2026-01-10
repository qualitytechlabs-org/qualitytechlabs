import { useEffect, useRef } from "react";
import HeaderHead from "../../../assets/chat.svg";
import { Message } from "./types";
import ChatOptions from "./ChatOptions";
type Props = {
    messages: Message[];
};

const ChatMessages: React.FC<Props> = ({ messages }) => {
    const bottomRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    }, [messages]);
    return (
        <div className="h-[420px] overflow-y-auto px-4 py-4 space-y-4">
            <div className="text-center">
                <span className="inline-block rounded-full bg-black/6 px-3 text-[11px] text-black/65">
                    Wed 8:21 AM
                </span>
            </div>
            {messages.map((msg, idx) => {
                const isLastBotMessage =
                    msg.sender === "bot" && idx === messages.length - 1;

                return msg.sender === "bot" ? (
                    <div key={msg.id} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full overflow-hidden ring-1 ring-black/5">
                            <img src={HeaderHead} alt="" />
                        </div>

                        <div className="max-w-[80%]">
                            <div className="rounded-[14px] bg-[#F2F2F2] px-3.5 py-3 whitespace-pre-line">
                                {msg.text}
                            </div>

                            {msg.options && (
                                <ChatOptions
                                    options={msg.options}
                                    disabled={!isLastBotMessage}
                                    onSelect={(opt) => {
                                        window.dispatchEvent(
                                            new CustomEvent("chat-option-selected", {
                                                detail: opt, // 👈 FULL OBJECT
                                            })
                                        );
                                    }}
                                />
                            )}
                        </div>
                    </div>
                ) : (
                    <div key={msg.id} className="flex justify-end">
                        <div className="max-w-[74%] rounded-[14px] bg-[#DDE7FF] px-3.5 py-3">
                            {msg.text}
                        </div>
                    </div>
                );
            })}

            <div ref={bottomRef} />
        </div>
    );
};

export default ChatMessages;
