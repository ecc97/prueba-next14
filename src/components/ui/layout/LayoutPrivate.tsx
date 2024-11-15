'use client'
import Header from "../organisms/header/Header";
interface ILayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
    return (
        <div className="flex h-screen">
            <Header variant="primary" />
            <main className="flex flex-col flex-1 p-8 overflow-auto bg-gray-200">
                {children}
            </main>
        </div>
    )
}