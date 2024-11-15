import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface AuthToken {
  id?: string;
  token?: string;
}

interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
  photo: string;
  token: string;
}

interface CustomSession extends Session {
  user: {
    id?: string;
    token?: string;
    name?: string | null;
    email?: string | null;
    role?: string | null;
    image?: string | null;
    photo?: string | null;
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Correo Electrónico", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.password || !credentials?.email) {
            console.error("Credenciales inválidas");
            return null;
        }

        const loginRequest: ILoginRequest = {
            email: credentials.email,
            password: credentials.password,
        }

        try {
            const authService = new AuthService();
            const response = await authService.login(loginRequest);

            const idString: string = response.data.user.sub.toString();

            return {
                email: response.data.user.email,
                id: idString,
                role: response.data.user.role,
                photo: response.data.user.photo,
                token: response.data.access_token,
            } as AuthUser;
        } catch (error) {
            console.log(error)
            return Promise.reject(new Error(JSON.stringify(error)))
        }
      }
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const authUser = user as AuthUser;
        token.id = authUser.id;
        token.name = authUser.name;
        token.email = authUser.email;
        token.role = authUser.role;
        token.photo = authUser.photo;
        token.token = authUser.token;
      }
      return token;
    },
    async session({ session, token }) {
      const customSession = session as CustomSession;
      customSession.user.id = (token as AuthToken).id;
      customSession.user.token = (token as AuthToken).token;
      return customSession;
    },
  },
};

export default NextAuth(authOptions);

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);