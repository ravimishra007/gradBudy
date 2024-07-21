import { z } from 'zod';

// Schema for SignUp
export const signUpSchema = z.object({
    role: z.string(),
    name: z.string(),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;

// Schema for Login
export const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const resetPassSchema = z.object({
    email: z.string().email('Invalid email address'),
});
