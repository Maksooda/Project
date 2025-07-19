import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://xzmypkblyosjixknwhky.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6bXlwa2JseW9zaml4a253aGt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1OTM0MTcsImV4cCI6MjAyNzE2OTQxN30.-MwqUV6A5jOIWQ2MHXaIenQ8navSVk-sWgTxRLHfqp4";


export const supabase = createClient(supabaseUrl,supabaseAnonKey)