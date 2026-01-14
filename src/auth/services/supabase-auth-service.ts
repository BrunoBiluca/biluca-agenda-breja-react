import { createClient } from "@supabase/supabase-js";
import { AuthService } from "./auth-service";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY,
);

export class SupabaseAuthService extends AuthService {
  getLoggedUser(): string | null {
    return localStorage.getItem("loggedUser");
  }

  async signup(email: string, password: string, name: string): Promise<void> {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: name,
          },
        },
      });
      if (error) throw error;
    } catch (error: unknown) {
      throw error;
    }
  }

  async login(email: string, password: string): Promise<void> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) throw error;

      localStorage.setItem("loggedUser", data.user?.user_metadata.display_name);
    } catch (error: unknown) {
      throw error;
    }
  }

  logout(): Promise<void> {
    localStorage.removeItem("loggedUser");
    supabase.auth.signOut();
    return Promise.resolve();
  }
}
