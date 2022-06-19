import { useCallback, useState } from "react";
import { ChatPreview } from "./ChatPreview";

type ChatSideBarProps = {
};

export const ChatSidebar: React.FC<ChatSideBarProps> = () => {
    const [activeChat, setActiveChat] = useState<string | null>(null);
    const handleChatPreviewClick = useCallback((id: string) => {
        setActiveChat(id);
    }, [])

    return (
        <div className='w-full max-w-sm border-r border-r-neutral-800'>
            <div className="flex overflow-y-scroll sticky top-0 flex-col h-screen">
                {Array.from({ length: 20 }).map((_, key) => (
                    <>
                        <ChatPreview
                            key={key}
                            time={new Date()}
                            title={`Kawey Nest ${key}`}
                            isActive={activeChat === `${key}`}
                            onClick={() => handleChatPreviewClick(`${key}`)}
                        />
                    </>
                ))}
            </div>
        </div>
    )
}
