// import HeadImg from "../../assets/chat.svg";
import HeadImg from "../../../assets/chat.svg";
type Props = {
  open: boolean;
  toggle: () => void;
  size: number;
};

const ChatLauncher: React.FC<Props> = ({ open, toggle, size }) => {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={open ? "Hide chat" : "Open chat"}
      className="fixed z-[900] transition hover:scale-[1.04] active:scale-[0.98]"
      style={{
        right: "calc(1rem + env(safe-area-inset-right,0px))",
        bottom: "calc(1rem + env(safe-area-inset-bottom,0px))",
        width: size,
        height: size,
        filter: "drop-shadow(0 12px 22px rgba(0,0,0,0.35))",
      }}
    >
      <img src={HeadImg} alt="Chat" className="h-full w-full object-contain" />
    </button>
  );
};

export default ChatLauncher;
