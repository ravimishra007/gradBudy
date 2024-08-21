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
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                const storedUser = window.localStorage.getItem('gradbudy');
                if (storedUser) {
                    dispatch(setUserFromLocalStorage());
                } else {
                    router.push('/login');
                }
                setIsInitialized(true);
            }
        } catch (error) {
            console.error("We're having trouble accessing your account. Please try logging in again.");
            router.push('/login');
        }
    }, [dispatch, router]);

    useEffect(() => {
        if (isInitialized && !loggedInUser) {
            router.push('/login');
        }
    }, [isInitialized, loggedInUser, router]);

    if (!isInitialized || !loggedInUser) {
        return null;
    }

    return <>{children}</>;
}

export default Protected;