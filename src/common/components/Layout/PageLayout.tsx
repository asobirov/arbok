const PageLayout: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    return (
        <div className="flex flex-col column min-h-screen px-8">
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}

export default PageLayout;