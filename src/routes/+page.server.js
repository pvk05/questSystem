import { supabase } from "$lib/supabaseClient.js";

export async function load() {
  const { data, error } = await supabase.from('biomes').select('*');
  if  (error) throw new Error(error.message)
  return {
	biomes: data ?? [],
  };
}