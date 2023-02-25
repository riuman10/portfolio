import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxZnpibnBvemlweHpvZHFndWJyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NjY2MjIwMCwiZXhwIjoxOTkyMjM4MjAwfQ.BZeI5xuDxOsuCYFKXWxUrgRbfK8ikd673JRlHhmh_1w`
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
