import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://krmrlhjefrwqlltukkif.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtybXJsaGplZnJ3cWxsdHVra2lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI1OTM4NzQsImV4cCI6MjEwODE2OTg3NH0.-yiKwlangUOpkl8OxL15axWWo0Ptc9Griwx_0jYroBg'

export const supabase = createClient(supabaseUrl, supabaseKey)
