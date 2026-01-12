export abstract class AuthService {
  abstract getLoggedUser(): string | null;
  abstract isEmailTaken(value: string): Promise<boolean>;
  abstract signup(email: string, password: string, name: string): Promise<void>;
  abstract login(email: string, password: string): Promise<void>;
  abstract logout(): Promise<void>;
}
