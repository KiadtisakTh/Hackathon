import { createClient } from '@supabase/supabase-js';

// Hardcode the Supabase URL and API key
const supabaseUrl = 'https://ryqzppkvjrfugmigpgxw.supabase.co/';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5cXpwcGt2anJmdWdtaWdwZ3h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyOTQyODAsImV4cCI6MjA1Mzg3MDI4MH0.2_3Kqf_9X4Dsf2kkCVIAtbIFSVwv2M4Jz5uqPoMXtgA';

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key:', supabaseKey);

console.log(supabaseKey); // For debugging to ensure the correct key is being used

export { supabase };
