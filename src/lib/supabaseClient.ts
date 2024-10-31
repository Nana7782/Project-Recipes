import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/supabase";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabaseClient = createClient<Database>(supabaseURL, supabaseAnonKey);

// supabase.from("articles").select("*")
