import type { LoggedUser } from "./logged-user.model";

export abstract class AuthService {
  getLoggedUser(): LoggedUser | null {
    const stored = localStorage.getItem("loggedUser");
    return stored && JSON.parse(stored);
  }

  protected setLoggedUser(user: LoggedUser) {
    console.log(user);
    localStorage.setItem("loggedUser", JSON.stringify(user));
  }

  abstract signup(email: string, password: string, name: string): Promise<void>;
  abstract login(email: string, password: string): Promise<void>;
  abstract logout(): Promise<void>;
}
