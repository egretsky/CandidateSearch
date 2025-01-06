// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    avatar: string | null;
    username: string | null;
    location: string | null;
    email: string | null;
    company: string | null;
    html_url: string | null;
}