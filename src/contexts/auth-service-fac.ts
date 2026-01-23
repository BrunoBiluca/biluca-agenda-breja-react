import { SupabaseAuthService } from "@app/integrations/supabase/supabase-auth-service";
import { LocalAuthService } from "@app/testing/standalone-mode/services/local-auth-service";
import { isStandalone } from "@app/testing/standalone-mode/standalone-mode";

export function authServiceFac() {
  return isStandalone() ? new LocalAuthService() : new SupabaseAuthService();
}
