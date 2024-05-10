import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://rlkdcgdepgzrdwcsrlwu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsa2RjZ2RlcGd6cmR3Y3NybHd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2MDQ0NzcsImV4cCI6MjAyODE4MDQ3N30.fETunX4vDoTJKzJqPHwI08R6ySQYQKsa01_l2CTKGOI'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;