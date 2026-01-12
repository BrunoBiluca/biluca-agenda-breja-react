import { AuthService } from "../../auth/services/auth-service";

export class LocalAuthService extends AuthService {
  registeredUsers: string[] = [];

  getLoggedUser(): string | null {
    return localStorage.getItem("loggedUser") || null;
  }

  isEmailTaken(value: string): Promise<boolean> {
    return Promise.resolve(value === "exists@email.com");
  }

  signup(email: string, password: string, name: string): Promise<void> {
    this.registeredUsers.push(`${name}:${email}:${password}`);
    return Promise.resolve();
  }

  login(email: string, password: string): Promise<void> {
    const currUser = this.registeredUsers.find((user) =>
      user.includes(`${email}:${password}`),
    );
    if (currUser) {
      const name = currUser.split(":")[0];
      localStorage.setItem("loggedUser", name);
      return Promise.resolve();
    }
    return Promise.reject(new Error("Invalid credentials"));
  }

  logout(): Promise<void> {
    localStorage.removeItem("loggedUser");
    return Promise.resolve();
  }
}
