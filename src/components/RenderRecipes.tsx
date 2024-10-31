import { useEffect } from "react";
import { supabaseClient } from "../lib/supabaseClient";

export default function RenderRecipes() {
  useEffect(() => {
    supabaseClient
      .from(`recipes`)
      .select(`*`)
      .then((result) => {
        console.log(result);
      });
  });
  return <div></div>;
}
