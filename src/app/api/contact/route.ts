import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const CONTACT_EMAIL = 'carvacodebr@gmail.com';

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY não configurada');
    return NextResponse.json(
      { error: 'Serviço de email não configurado.' },
      { status: 500 }
    );
  }

  const body = await request.json();
  const { name, email, project, budget, message } = body ?? {};

  if (!name || !email) {
    return NextResponse.json(
      { error: 'Nome e email são obrigatórios.' },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: 'CarvaCode Site <contato@carvacodeweb.com>',
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Novo contato do site: ${name}`,
      text: [
        `Nome: ${name}`,
        `Email: ${email}`,
        `Tipo de projeto: ${project || 'não informado'}`,
        `Orçamento: ${budget || 'não informado'}`,
        '',
        'Mensagem:',
        message || '(sem detalhes adicionais)',
      ].join('\n'),
    });

    if (error) {
      console.error('Erro ao enviar email via Resend:', error);
      return NextResponse.json(
        { error: 'Não foi possível enviar sua mensagem.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Erro inesperado ao enviar email:', err);
    return NextResponse.json(
      { error: 'Não foi possível enviar sua mensagem.' },
      { status: 500 }
    );
  }
}
