import { createClient } from "@supabase/supabase-js";
import type { Database } from "./supabase";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY,
);

export const database = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY,
);
