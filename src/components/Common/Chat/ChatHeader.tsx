import HeaderHead from "../../../assets/chat.svg";

type Props = {
  onClose: () => void;
};

const ChatHeader: React.FC<Props> = ({ onClose }) => {
  return (
    <header className="relative flex items-center gap-3 px-4 py-3 bg-white">
      <div className="h-7 w-7 rounded-full overflow-hidden ring-1 ring-black/5 bg-[#F4F7FF]">
        <img src={HeaderHead} alt="" className="h-full w-full object-cover" />
      </div>

      <h3 className="text-[18px] font-semibold">Lexi</h3>

      <button
        onClick={onClose}
        className="ml-auto h-8 w-8 rounded-full border border-black/10 hover:bg-black/5 grid place-items-center"
      >
        ✕
      </button>

      <span className="absolute inset-x-0 bottom-0 h-px bg-black/10" />
    </header>
  );
};

export default ChatHeader;
