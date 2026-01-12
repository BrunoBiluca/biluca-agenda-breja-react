import { AuthService } from "./auth-service";

export class LocalAuthService extends AuthService {
  isEmailTaken(value: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  signup(email: string, password: string, name: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  login(email: string, password: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  logout(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
