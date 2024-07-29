"use client";

import { selectLoggedInUser, setUserFromLocalStorage } from '@/lib/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { useEffect, useState, ReactNode } from 'react';

interface ProtectedProps {
    children: ReactNode;
}

function Protected({ children }: ProtectedProps) {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const loggedInUser = useAppSelector(selectLoggedInUser);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = window.localStorage.getItem('user');
            console.log(storedUser);
            if (storedUser) {
                dispatch(setUserFromLocalStorage());
            }
        }
        setLoading(false);
    }, [dispatch]);

    useEffect(() => {
        if (!loading && !loggedInUser) {
            router.push('/login');
        }
    }, [loading, loggedInUser, router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!loggedInUser) {
        return null;
    }

    return <>{children}</>;
}

export default Protected;
