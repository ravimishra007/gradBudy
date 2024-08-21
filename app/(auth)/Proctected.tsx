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

    const isClient = typeof window !== 'undefined';

    useEffect(() => {
        if (isClient) {
            const storedUser = window.localStorage.getItem('gradbudy');
            if (storedUser) {
                dispatch(setUserFromLocalStorage());
            }
            setLoading(false);
        }
    }, [dispatch, isClient]);

    useEffect(() => {
        if (!loading && !loggedInUser) {
            router.push('/login');
        }
    }, [loading, loggedInUser, router]);

    if (loading || !loggedInUser) {
        return null;
    }

    return <>{children}</>;
}

export default Protected;
