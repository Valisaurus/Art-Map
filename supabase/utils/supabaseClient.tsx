import { createClient } from '@supabase/supabase-js'

// Use a custom domain as the supabase URL
const supabase = createClient("https://qkzjywyrfmqpogdtjfmr.supabase.co/", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFremp5d3lyZm1xcG9nZHRqZm1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5MjgxODgsImV4cCI6MjAxMjUwNDE4OH0.3laGCRKp3u7j2RQvKNEt_R5chWHSE-7x0v7DoFVzbHc");

export default supabase;