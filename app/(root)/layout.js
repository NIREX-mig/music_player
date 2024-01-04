import { Providers } from "./provider";

;

export default function RootLayout({ children }) {
    return (
        <div>
            <main className=" flex">
                <Providers>{children}</Providers>
            </main>
        </div>
    )
}
