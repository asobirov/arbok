import { DOMAttributes, memo } from "react";
import clsx from "clsx";

import { Avatar, AvatarProps } from "@components/User/Avatar"

type ChatPreviewProps =
    Pick<DOMAttributes<HTMLDivElement>, "onClick">
    & Pick<AvatarProps, "src">
    & {
        title: string;
        time: Date;
        lastMessage?: string;

        isActive?: boolean;
    }

const ChatPreviewComponent: React.FC<ChatPreviewProps> = ({
    title, time, src, lastMessage,
    isActive,
    onClick,
}) => {
    const getTimeString = (time?: Date): string => {
        if (!time) {
            return "";
        }

        // Check if it's today
        if (time.getTime() > new Date().setHours(0, 0, 0, 0)) {
            return time.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", hour12: false });
        }

        // check if it's within the last 7 days
        if (time.getTime() > new Date().getTime() - 7 * 24 * 60 * 60 * 1000) {
            return time.toLocaleDateString(undefined, { weekday: "short" });
        }

        return time.toLocaleString(undefined, { day: "2-digit", month: "2-digit", year: "2-digit" });
    }

    return (
        <div
            className={clsx("group flex py-[0.125rem] px-2 w-full transition-all duration-100 ease-in",
                "hover:cursor-pointer",
                {
                    "bg-black": isActive,
                })}
            onClick={onClick}
        >
            <div className={`flex flex-row flex-1 w-full px-4 py-3 rounded-3xl group-hover:bg-blackAlpha-700`}>
                <div>
                    <Avatar
                        alt={title}
                        priority={true}
                        size="sm"
                        src={src}
                    />
                </div>
                <div className="flex overflow-hidden flex-col grow justify-center ml-2">
                    <div className="flex flex-row justify-between items-center">
                        <span className="text-base font-medium text-neutral-100">{title}</span>
                        <span className="text-xs text-gray-400">{getTimeString(time)}</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="grow w-full text-sm font-light text-neutral-200 truncate">
                            {lastMessage ?? "No messages"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ChatPreview = memo(ChatPreviewComponent);