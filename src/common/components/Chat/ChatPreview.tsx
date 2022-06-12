import { Avatar, AvatarProps } from "@components/User/Avatar"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { useCallback } from "react";

type ChatPreviewProps = Pick<AvatarProps, "src"> & {
    title: string;
    time: Date;
    lastMessage?: string;
}

export const ChatPreview: React.FC<ChatPreviewProps> = ({ title, time, src, lastMessage }) => {
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
        <div className="flex w-full">
            <div className="flex flex-row flex-1  px-5 py-3 w-full">
                <div>
                    <Avatar
                        alt={title}
                        priority={true}
                        size="sm"
                        src={src}
                    />
                </div>
                <div className="overflow-hidden flex flex-grow flex-col justify-center ml-2">
                    <div className="flex flex-row justify-between">
                        <span className="text-base font-normal text-white">{title}</span>
                        <span className="text-xs text-neutral-400">{getTimeString(time)}</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="truncate flex-grow text-xs w-full text-neutral-300">
                            {lastMessage ?? "No messages"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}