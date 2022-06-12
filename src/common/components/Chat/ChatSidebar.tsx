import { ChatPreview } from "./ChatPreview";

type ChatSideBarProps = {
};

export const ChatSidebar: React.FC<ChatSideBarProps> = () => {
    return (
        <div className='max-w-sm border-r border-r-neutral-500'>
            <div className="flex flex-col sticky top-0 h-screen">
                <ChatPreview time={new Date()} title="Kawey Nest" />
                <ChatPreview time={new Date()} title="Kawey Nest" />
                <ChatPreview time={new Date()} title="Kawey Nest" />
                <ChatPreview time={new Date()} title="Kawey Nest" />
            </div>
        </div>
    )
}
