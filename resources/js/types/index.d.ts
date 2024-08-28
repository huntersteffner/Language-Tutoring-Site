export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface Tutor {
    id: number
    name: string
    image: string
    credits_required: number
    description: string
    location: string
    english?: boolean
    spanish?: boolean
    portuguese?: boolean
    french?: boolean
    german?: boolean
    japanese?: boolean
    mandarine?: boolean
    ranges: string
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    }
    tutors: {
        data: Tutor[]
    }
};
