import { motion } from "framer-motion";
type Option = {
    label: string;
    value: string;
    next?: string;
};

type Props = {
    options: readonly Option[];
    onSelect: (option: Option) => void;
    disabled?: boolean;
};
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0 },
};

const ChatOptions: React.FC<Props> = ({ options,
    onSelect,
    disabled = false, }) => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-3 mt-2"
        >
            {options.map((opt) => (
                <motion.button
                    key={opt.value}
                    variants={item}
                    className={`
                        rounded-full border px-4 py-2 text-sm transition
                        ${disabled
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-black/5"}
                      `}
                    disabled={disabled}
                    onClick={() => {
                        if (disabled) return;
                        onSelect(opt);
                    }}
                >
                    {opt.label}
                </motion.button>
            ))}
        </motion.div>
    );
};

export default ChatOptions;
