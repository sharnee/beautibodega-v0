export interface User {
    id: number;
    email: string;
    password: string;
    followers: string;
    following: string;
    tags: string;
    createdAt: number;
    gender: string;
    role: string;
    profilePicture: string;
    favoriteProducts: string;
    favoriteBrands: string;
    reviews: string;
}

export interface Session {
    id: number;
    dateCreated: number;
    username: string;
    /**
     * Timestamp indicating when the session was created, in Unix milliseconds.
     */
    issued: number;
    /**
     * Timestamp indicating when the session should expire, in Unix milliseconds.
     */ 
    expires: number;
}

export type PartialSession = Omit<Session, "issued" | "expires">;

export interface EncodeResult {
    token: string,
    expires: number,
    issued: number
}

export type DecodeResult =
    {
        type: "valid";
        session: Session;
    }
    {
        type: "integrity-error";
    }
    {
        type: "invalid-token";
    };

export type ExpirationStatus = "expired" | "active" | "grace";