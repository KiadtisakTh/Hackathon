import { createClient } from '@supabase/supabase-js';

// Fetch URL and API key from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// Initialize Supabase client (No need to pass headers now)
const supabase = createClient(supabaseUrl, supabaseKey);

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key:', supabaseKey);

console.log(supabaseKey); // For debugging to ensure the correct key is being used

export { supabase };
