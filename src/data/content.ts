/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Transcrito da ficha de execução (`docs/FICHA-LP.md`), campo `conteudo`. O conteúdo
 * que vem no template é o exemplo de referência, com imagens placeholder.
 */
import type { IconName } from './icons'
import type { Photo } from './types'

import heroBg from '@assets/heroBg.png'

/* ------------------------------------------------------------------ tipos */

export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/**
 * Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar.
 * Desvio aprovado: o primário segue o mockup de abertura da Safe Mine ("Solicitar cotação").
 */
export const cta = {
  primary: 'Solicitar cotação',
  primaryShort: 'Cotação',
  secondary: 'Identifique seu equipamento',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  /** Tagline central da barra (estrutura fixa 4.1.1): o produto principal. */
  tagline: 'Supressão de incêndio',
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Sistemas de supressão SEIVE',
  /** H1 com a palavra-chave da campanha. */
  title: 'Supressão de incêndio SEIVE em sistemas móveis e fixos.',
  /** Quebra de linha do H1 no desktop largo; a outra vem antes do destaque: três linhas. */
  titleBreakAfter: 'Supressão de incêndio',
  /** Trecho do H1 em amarelo (amarelo da folha SEIVE). */
  highlight: 'móveis e fixos.',
  text: 'Embarcado em máquinas pesadas ou instalado em ambientes críticos.\nA Safe Mine ajuda a dimensionar a solução para a sua aplicação.',
  banner: {
    src: heroBg,
    alt: 'Escavadeira com reservatório supressor SEIVE instalado, em operação numa mina',
    /** Larguras geradas: as mesmas no <Picture> do Hero e no preload do Layout. */
    widths: [640, 1024, 1536, 1981],
    sizes: '(min-width: 1024px) 1700px, 100vw',
  },
  /** Caixa de três pontos: `line1` e `line2` ficam sempre em duas linhas. */
  points: [
    { icon: 'gear', line1: 'Detecção e atuação', line2: 'automática' },
    { icon: 'excavator', line1: 'Equipamentos móveis', line2: 'e máquinas pesadas' },
    { icon: 'building', line1: 'Sistemas fixos para', line2: 'instalações críticas' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleBreakAfter: string
  highlight: string
  text: string
  banner: Photo & { widths: readonly number[]; sizes: string }
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: 'Fale com quem entende de supressão de incêndio.',
  /** Trecho do título em verde, na segunda linha. */
  titleHighlight: 'supressão de incêndio.',
  text: 'Solicite uma avaliação comercial para proteção contra incêndio em sua operação. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  /** Linha sob o botão de WhatsApp. */
  help: 'Atendemos pelo formulário ou pelo WhatsApp, como preferir.',
  trust: [
    { icon: 'zap', label: 'Atuação automática' },
    { icon: 'power', label: 'Acionamento manual' },
    { icon: 'shield', label: 'Garantia de 12 meses' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  help: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
