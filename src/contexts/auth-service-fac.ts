import { isStandalone } from "@app/app-config";
import { SupabaseAuthService } from "@app/integrations/supabase/supabase-auth-service";
import { LocalAuthService } from "@app/testing/standalone-mode/local-auth-service";

export function authServiceFac() {
  return isStandalone() ? new LocalAuthService() : new SupabaseAuthService();
}
