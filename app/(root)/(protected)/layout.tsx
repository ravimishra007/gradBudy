import Protected from "@/app/(auth)/Proctected";

export default function ProtectedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <Protected>
            {children}
        </Protected>
    );
}