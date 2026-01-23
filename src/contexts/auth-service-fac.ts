import { SupabaseAuthService } from "@app/integrations/supabase/supabase-auth-service";
import { LocalAuthService } from "@app/testing/standalone-mode/services/local-auth-service";
import { StandaloneModeConfig } from "@app/testing/standalone-mode/standalone-mode";

export function authServiceFac() {
  return StandaloneModeConfig.isStandalone()
    ? new LocalAuthService()
    : new SupabaseAuthService();
}
