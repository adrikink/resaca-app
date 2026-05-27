// ─────────────────────────────────────────────────
// RESACA CALCULATOR — Configuración
// ─────────────────────────────────────────────────

// 1. Supabase
const SUPABASE_URL      = 'https://xxhzowsaajueydnikrhw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4aHpvd3NhYWp1ZXlkbmlrcmh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxODQ1MDYsImV4cCI6MjA5Mzc2MDUwNn0.T43DJa83UsAmBpGnZs3S-Z34nWInfujl-0QwPjhlQB0';

// 2. Stripe Payment Links
//    Añade en cada link: ?client_reference_id={USER_ID}
//    URL de éxito: https://TU_DOMINIO/?payment=success
const STRIPE_WEEKLY  = 'https://buy.stripe.com/8x28wR9fq7dgeZm6279k401';
const STRIPE_MONTHLY = 'https://buy.stripe.com/4gM5kF1MY0OS5oM3TZ9k400';

// 3. Modo demo → false = auth real con Supabase
const DEV_MODE = true;
