// Interface for the Candidate objects returned by the API

export interface Candidate {
    name: string | null;
    username: string;
    location: string | null;
    avatar_url: string;
    email: string | null;
    bio: string;
    company: string | null
}