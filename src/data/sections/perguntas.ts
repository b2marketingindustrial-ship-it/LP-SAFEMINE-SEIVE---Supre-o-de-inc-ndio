/**
 * Dados da seção "Perguntas frequentes" (biblioteca B2, fase: autoridade).
 *
 * As 4 primeiras vêm da ficha (`perguntas`); certificação e manutenção entraram em
 * 02/11/2026, com base na Apresentação SEIVE Supressor 2026 (p. 2, 3 e 14).
 */
export interface Question {
  question: string
  answer: string
}

export const faq = {
  eyebrow: 'Perguntas frequentes',
  title: 'O que perguntam antes de contratar',
  /** Trecho do título em verde. */
  titleHighlight: 'antes de contratar',
  text: 'As dúvidas mais comuns sobre o sistema e o atendimento. Não encontrou a sua? Fale com a nossa equipe.',
  items: [
    {
      question: 'O sistema depende do operador para funcionar?',
      answer:
        'Não. Da detecção à atuação, o processo é automático. O sistema também tem 2 modos manuais, por botoeiras posicionadas à vista.',
    },
    {
      question: 'O sistema SEIVE é certificado?',
      answer:
        'Sim. O supressor tem certificado ABNT Nº 270.001/20, é patenteado (nº 903706326) e atende aos requisitos aplicáveis das normas NFPA 17 e UL 1254. A fabricação segue a ABNT NBR ISO 9001:2015.',
    },
    {
      question: 'Qual é a garantia do sistema SEIVE?',
      answer:
        'São 12 meses contra defeitos de fabricação. Segundo a SEIVE, alguns componentes têm garantia maior: painel 24 meses, ampolas 10 anos e reservatórios de pó 5 anos.',
    },
    {
      question: 'Quem faz a recarga e a manutenção do sistema?',
      answer:
        'A SEIVE oferece recarga, manutenção e reposição de peças. A Safe Mine fornece as peças genuínas e o suporte técnico para manter o sistema ativo.',
    },
    {
      question: 'A Safe Mine vende o sistema diretamente?',
      answer:
        'Sim. A Safe Mine fornece o sistema de supressão SEIVE e peças genuínas, com apoio na escolha dos itens adequados à aplicação e ao modelo da máquina.',
    },
    {
      question: 'Quais informações devo enviar para solicitar uma cotação?',
      answer:
        'Conte sobre a operação, o equipamento e a aplicação. Segmento, localização, características da máquina e requisitos técnicos ajudam a equipe a indicar a solução adequada.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  items: readonly Question[]
}
