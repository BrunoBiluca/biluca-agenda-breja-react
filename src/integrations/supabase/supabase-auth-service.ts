import { AuthService } from "@app/auth/services/auth-service";
import { supabase } from "./client";
import { LoggedUser } from "@app/auth/services/logged-user.model";

export class SupabaseAuthService extends AuthService {
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

      this.setLoggedUser(
        new LoggedUser(
          data.user!.user_metadata.display_name,
          email,
          data.user!.id,
        ),
      );
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
