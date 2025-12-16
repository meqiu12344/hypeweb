export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, phone, message } = body || {};

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Brak wymaganych pól: name, email, message" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Basic naive validation
    const emailOk = /.+@.+\..+/.test(email);
    if (!emailOk) {
      return new Response(
        JSON.stringify({ error: "Nieprawidłowy adres email" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Here you could integrate a mail provider (Resend/SendGrid/Nodemailer)
    // For now we just log to server and acknowledge success.
    console.log("[contact] New message:", { name, email, phone, message });

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("[contact] Error:", err);
    return new Response(
      JSON.stringify({ error: "Wewnętrzny błąd serwera" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
