export default function RootLayout({ children }) {
    return (
        <div>
            <main className=" flex">
                {children}
            </main>
        </div>
    )
}
