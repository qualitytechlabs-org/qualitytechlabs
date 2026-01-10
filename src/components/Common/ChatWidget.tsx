import { useState, useEffect, useRef, useCallback } from "react";
import ChatLauncher from "../Common/Chat/ChatLauncher";
import ChatHeader from "../Common/Chat/ChatHeader";
import ChatMessages from "../Common/Chat/ChatMessages";
import ChatInput from "../Common/Chat/ChatInput";
import { Message, Lead } from "../Common/Chat/types";
import { QUESTIONS } from "../Common/Chat/questions";

const ChatWidget = ({ launcherSize = 72, panelWidth = 360 }) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const soundRef = useRef<HTMLAudioElement | null>(null);
  const unlockedRef = useRef(false);
  const [currentQ, setCurrentQ] =
    useState<keyof typeof QUESTIONS>("SERVICE");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      sender: "bot",
      text: QUESTIONS.SERVICE.text,
      options: QUESTIONS.SERVICE.options,
    },
  ]);
  const [lead, setLead] = useState<Lead>({});
  const [tries, setTries] = useState<Record<string, number>>({});
  // useEffect(() => {
  //   const handler = (e: any) => {
  //     const { value, next } = e.detail;
  //     handleAnswer(value, next);
  //   };

  //   window.addEventListener("chat-option-selected", handler);
  //   return () =>
  //     window.removeEventListener("chat-option-selected", handler);
  // }, [currentQ]);
  
  
  useEffect(() => {
    soundRef.current = new Audio("/smsNotifyfinal.m4a");
    soundRef.current.volume = 0.6;
    soundRef.current.load();
    const unlock = async () => {
      if (!soundRef.current || unlockedRef.current) return;

      try {
        soundRef.current.muted = true;
        await soundRef.current.play(); 
        soundRef.current.pause();
        soundRef.current.currentTime = 0;
        soundRef.current.muted = false;

        unlockedRef.current = true;
        console.log("Sound unlocked");
      } catch (err) {
        console.log("Unlock failed:", err);
      }
    };

    window.addEventListener("click", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    window.addEventListener("touchstart", unlock, { once: true });

    return () => {
      window.removeEventListener("click", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
    };
  }, []);

  const playNotificationSound = async () => {
    if (!soundRef.current) return;

    try {
      soundRef.current.currentTime = 0;
      await soundRef.current.play();
    } catch (err) {
      console.log("Sound blocked:", err);
    }
  };
  
  // const handleAnswer = (answer: string, explicitNext?: string) => {
  //   const isEmail = (v: string) => /\S+@\S+\.\S+/.test(v.trim());
  //   const isPhone = (v: string) => {
  //     const digitsOnly = v.replace(/\D/g, "");
  //     return digitsOnly.length >= 7 && digitsOnly.length <= 15;
  //   };
    
  //   const isSkip = (v: string) => {
  //     const t = v.trim().toLowerCase();
  //     return t === "skip" || t === "no" || t === "na" || t === "not now";
  //   };
  
  //   const question = QUESTIONS[currentQ];
  //   setMessages((prev) => [
  //     ...prev,
  //     {
  //       id: crypto.randomUUID(),
  //       sender: "user",
  //       text: answer,
  //     },
  //   ]);
  //   let updatedLead: Lead = lead;
  //   if (question.field) {
  //     updatedLead = { ...lead, [question.field]: answer };
  //     setLead(updatedLead);
  //   }
  //   if (currentQ === "ASK_EMAIL") {
  //     if (isSkip(answer)) {
  //       explicitNext = "FINAL";
  //     } else if (!isEmail(answer)) {
  //       setMessages((prev) => [
  //         ...prev,
  //         {
  //           id: crypto.randomUUID(),
  //           sender: "bot",
  //           text: "⚠️ Please enter a valid email (example@gmail.com) or type 'Skip'.",
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           sender: "bot",
  //           text: QUESTIONS.ASK_EMAIL.text,
  //           options: QUESTIONS.ASK_EMAIL.options,
  //         },
  //       ]);
  //       return;
  //     } else {
  //       updatedLead = { ...updatedLead, email: answer.trim() };
  //       setLead(updatedLead);
  //       explicitNext = "FINAL";
  //     }
  //   }
  //   if (currentQ === "ASK_PHONE") {
  //     if (isSkip(answer)) {
  //       explicitNext = "FINAL";
  //     } else if (!isPhone(answer)) {
  //       setMessages((prev) => [
  //         ...prev,
  //         {
  //           id: crypto.randomUUID(),
  //           sender: "bot",
  //           text: "⚠️ Please enter a valid 10-digit phone number or type 'Skip'.",
  //         },
  //         {
  //           id: crypto.randomUUID(),
  //           sender: "bot",
  //           text: QUESTIONS.ASK_PHONE.text,
  //           options: QUESTIONS.ASK_PHONE.options,
  //         },
  //       ]);
  //       return;
  //     } else {
  //       updatedLead = { ...updatedLead, phone: answer.trim() };
  //       setLead(updatedLead);
  //       explicitNext = "FINAL";
  //     }
  //   }
  
  //   if (currentQ === "CONTACT") {
  //     const cleaned = answer.trim();
  //     const valid = isEmail(cleaned) || isPhone(cleaned);
  
  //     if (!valid) {
  //       const attempt = (tries[currentQ] || 0) + 1;
  //       setTries((prev) => ({ ...prev, [currentQ]: attempt }));
  
  //       if (attempt < 3) {
  //         setMessages((prev) => [
  //           ...prev,
  //           {
  //             id: crypto.randomUUID(),
  //             sender: "bot",
  //             text:
  //               "⚠️ Please enter a valid email (example@gmail.com) OR a 10-digit phone number.",
  //           },
  //           {
  //             id: crypto.randomUUID(),
  //             sender: "bot",
  //             text: QUESTIONS.CONTACT.text,
  //           },
  //         ]);
  //         return;
  //       }
  //       setMessages((prev) => [
  //         ...prev,
  //         {
  //           id: crypto.randomUUID(),
  //           sender: "bot",
  //           text:
  //             "No worries 🙂 You can skip this step or leave a short message for us.",
  //           options: [
  //             { label: "Skip", value: "Skip", next: "FINAL" },
  //             { label: "📝 Leave a message", value: "Leave a message", next: "MESSAGE" },
  //           ],
  //         },
  //       ]);
  //       return;
  //     }
  //     setTries((prev) => ({ ...prev, [currentQ]: 0 }));
  //     if (isEmail(cleaned)) {
  //       updatedLead = { ...updatedLead, email: cleaned, contact: cleaned };
  //       setLead(updatedLead);
  //       explicitNext = "ASK_PHONE";
  //     } else {
  //       updatedLead = { ...updatedLead, phone: cleaned, contact: cleaned };
  //       setLead(updatedLead);
  //       explicitNext = "ASK_EMAIL";
  //     }
  //   }
  //   let nextId = explicitNext;
  
  //   if (!nextId && question.options?.length) {
  //     nextId = question.options[0].next;
  //   }
  //   if (!nextId) {
  //     submitLead(updatedLead);
  
  //     setMessages((prev) => [
  //       ...prev,
  //       {
  //         id: crypto.randomUUID(),
  //         sender: "bot",
  //         text: "Thanks! Our team will contact you shortly 🙌",
  //       },
  //     ]);
  //     return;
  //   }
  
  //   const nextQuestion = QUESTIONS[nextId];
  //   if (!nextQuestion) return;
  
  //   setCurrentQ(nextId);
  
  //   setMessages((prev) => [
  //     ...prev,
  //     {
  //       id: crypto.randomUUID(),
  //       sender: "bot",
  //       text: nextQuestion.text,
  //       options: nextQuestion.options,
  //     },
  //   ]);
  //   if (nextId === "FINAL") {
  //     console.log("FINAL LEAD OBJECT:", updatedLead);
  //     submitLead(updatedLead);
  //   }
  // };
  const handleAnswer = useCallback(
    (answer: string, explicitNext?: string) => {
      const isEmail = (v: string) => /\S+@\S+\.\S+/.test(v.trim());
  
      const isPhone = (v: string) => {
        const digitsOnly = v.replace(/\D/g, "");
        return digitsOnly.length >= 7 && digitsOnly.length <= 15;
      };
  
      const isSkip = (v: string) => {
        const t = v.trim().toLowerCase();
        return t === "skip" || t === "no" || t === "na" || t === "not now";
      };
  
      const question = QUESTIONS[currentQ];
  
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), sender: "user", text: answer },
      ]);
  
      let updatedLead: Lead = lead;
  
      if (question.field) {
        updatedLead = { ...lead, [question.field]: answer };
        setLead(updatedLead);
      }
  
      // ✅ validations
      if (currentQ === "ASK_EMAIL") {
        if (isSkip(answer)) explicitNext = "FINAL";
        else if (!isEmail(answer)) {
          setMessages((prev) => [
            ...prev,
            { id: crypto.randomUUID(), sender: "bot", text: "⚠️ Please enter a valid email (example@gmail.com) or type 'Skip'." },
            { id: crypto.randomUUID(), sender: "bot", text: QUESTIONS.ASK_EMAIL.text, options: QUESTIONS.ASK_EMAIL.options },
          ]);
          return;
        } else {
          updatedLead = { ...updatedLead, email: answer.trim() };
          setLead(updatedLead);
          explicitNext = "FINAL";
        }
      }
  
      if (currentQ === "ASK_PHONE") {
        if (isSkip(answer)) explicitNext = "FINAL";
        else if (!isPhone(answer)) {
          setMessages((prev) => [
            ...prev,
            { id: crypto.randomUUID(), sender: "bot", text: "⚠️ Please enter a valid phone number or type 'Skip'." },
            { id: crypto.randomUUID(), sender: "bot", text: QUESTIONS.ASK_PHONE.text, options: QUESTIONS.ASK_PHONE.options },
          ]);
          return;
        } else {
          updatedLead = { ...updatedLead, phone: answer.trim() };
          setLead(updatedLead);
          explicitNext = "FINAL";
        }
      }
  
      if (currentQ === "CONTACT") {
        const cleaned = answer.trim();
        const valid = isEmail(cleaned) || isPhone(cleaned);
  
        if (!valid) {
          const attempt = (tries[currentQ] || 0) + 1;
          setTries((prev) => ({ ...prev, [currentQ]: attempt }));
  
          if (attempt < 3) {
            setMessages((prev) => [
              ...prev,
              { id: crypto.randomUUID(), sender: "bot", text: "⚠️ Please enter a valid email OR phone number." },
              { id: crypto.randomUUID(), sender: "bot", text: QUESTIONS.CONTACT.text },
            ]);
            return;
          }
  
          setMessages((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              sender: "bot",
              text: "No worries 🙂 You can skip this step or leave a short message for us.",
              options: [
                { label: "Skip", value: "Skip", next: "FINAL" },
                { label: "📝 Leave a message", value: "Leave a message", next: "MESSAGE" },
              ],
            },
          ]);
          return;
        }
  
        setTries((prev) => ({ ...prev, [currentQ]: 0 }));
  
        if (isEmail(cleaned)) {
          updatedLead = { ...updatedLead, email: cleaned, contact: cleaned };
          setLead(updatedLead);
          explicitNext = "ASK_PHONE";
        } else {
          updatedLead = { ...updatedLead, phone: cleaned, contact: cleaned };
          setLead(updatedLead);
          explicitNext = "ASK_EMAIL";
        }
      }
  
      let nextId = explicitNext;
      if (!nextId && question.options?.length) nextId = question.options[0].next;
  
      if (!nextId) {
        submitLead(updatedLead);
        setMessages((prev) => [
          ...prev,
          { id: crypto.randomUUID(), sender: "bot", text: "Thanks! Our team will contact you shortly 🙌" },
        ]);
        return;
      }
  
      const nextQuestion = QUESTIONS[nextId];
      if (!nextQuestion) return;
  
      setCurrentQ(nextId);
  
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), sender: "bot", text: nextQuestion.text, options: nextQuestion.options },
      ]);
  
      if (nextId === "FINAL") submitLead(updatedLead);
    },
    [currentQ, lead, tries] // ✅ correct deps
  );
  useEffect(() => {
    const handler = (e: any) => {
      const { value, next } = e.detail;
      handleAnswer(value, next);
    };
  
    window.addEventListener("chat-option-selected", handler);
    return () => window.removeEventListener("chat-option-selected", handler);
  }, [handleAnswer]);
  useEffect(() => {
    const alreadyOpened = sessionStorage.getItem("chat_auto_opened");
    if (alreadyOpened) return;
    let opened = false;
    const openChat = () => {
      if (opened) return;
      if (!document.hasFocus()) return;

      opened = true;
      setOpen(true);
      playNotificationSound();
      sessionStorage.setItem("chat_auto_opened", "true");

      window.removeEventListener("scroll", onScroll);
    };
    const timer = setTimeout(openChat, 9000);
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const scrolled = window.scrollY / scrollable;

      if (scrolled >= 0.4) {
        clearTimeout(timer);
        openChat();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);



  const submitLead = async (finalLead: Lead) => {

    console.log("finalLead payload #####", finalLead);
    // try {
    //   await fetch("http://localhost:5000/api/leads", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       ...finalLead,
    //       source: "chatbot",
    //       createdAt: new Date().toISOString(),
    //     }),
    //   });
    // } catch (err) {
    //   console.error("Lead submission failed", err);
    // }
  };


  return (
    <>
      <ChatLauncher
        open={open}
        toggle={() => {
          setOpen(!open);
          if (!open) playNotificationSound();
        }}
        size={launcherSize}
      />

      {open && (
        <section
          className="fixed z-[1000] bg-white rounded-[16px]"
          style={{
            width: panelWidth,
            right: "1rem",
            bottom: launcherSize + 14,
          }}
        >
          <ChatHeader onClose={() => setOpen(false)} />
          <ChatMessages messages={messages} />
          <ChatInput
            value={input}
            onChange={setInput}
            onSend={() => {
              if (!input.trim()) return;
              handleAnswer(input);
              setInput("");
            }}
          />
        </section>
      )}
    </>
  );
};

export default ChatWidget;
