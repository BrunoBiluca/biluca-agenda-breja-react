import { LoggedUser } from "@app/auth/services/logged-user.model";
import { AuthService } from "@app/auth/services/auth-service";

export class LocalAuthService extends AuthService {
  registeredUsers: string[] = [];

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
      this.setLoggedUser(new LoggedUser(name, email, "1"));
      return Promise.resolve();
    }
    return Promise.reject(new Error("Invalid credentials"));
  }

  logout(): Promise<void> {
    localStorage.removeItem("loggedUser");
    return Promise.resolve();
  }
}
