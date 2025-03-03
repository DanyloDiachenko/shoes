import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleAuthProviderProps } from "./GoogleProvider.props";

export const GoogleAuthProvider = ({ children }: GoogleAuthProviderProps) => {
    return (
        <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
        >
            {children}
        </GoogleOAuthProvider>
    );
};
