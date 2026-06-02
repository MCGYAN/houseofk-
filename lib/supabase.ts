import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.warn('[Supabase] Missing env vars; using placeholder values until runtime env is configured.');
}

export function isSupabaseConfigured(): boolean {
    return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

let serverClient: SupabaseClient | null = null;

/** Server-side client; returns null when Supabase env is not configured. */
export function getSupabaseServerClient(): SupabaseClient | null {
    if (!isSupabaseConfigured()) return null;
    if (!serverClient) {
        serverClient = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );
    }
    return serverClient;
}

export const supabase = createClient(supabaseUrl, supabaseKey);
