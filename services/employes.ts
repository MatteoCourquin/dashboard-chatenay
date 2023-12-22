import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://bqylfbkeyojgbjpmmjrv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxeWxmYmtleW9qZ2JqcG1tanJ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMzIzODQ0MywiZXhwIjoyMDE4ODE0NDQzfQ.ku-3sVQ-hJhtzXM1V7l-37ylgyxpcYTBAaN-r4-yru4'
);

export async function getEmployes() {
  const { data, error } = await supabase.from('data').select();
  return data;
}
