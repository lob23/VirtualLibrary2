import { createClient } from '@supabase/supabase-js';

// Replace 'your-api-url' and 'your-api-key' with your actual Supabase project details
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default supabase;