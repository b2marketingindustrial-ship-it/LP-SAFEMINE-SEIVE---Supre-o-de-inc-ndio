/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * No mockup da Safe Mine (30/10/2026): texto à esquerda, foto do acionador em card com o
 * técnico sobreposto à direita e os 5 diferenciais numa barra navy abaixo. São 5 exatos:
 * a barra é `lg:grid-cols-5`.
 *
 * `cenario.jpg` é a foto do acionador SEIVE publicada pela Safe Mine; `pessoa.png` é o
 * recorte do técnico enviado pelo cliente (capacete ao quadril, fundo transparente).
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'
import pessoa from '@assets/diferenciais/pessoa.png'
import seloAbnt from '@assets/diferenciais/selo-abnt-processo-certificado.png'
import seloIso from '@assets/diferenciais/selo-abnt-iso-9001.png'

/** Selo de certificação: imagem do selo, ou o número da patente desenhado em HTML. */
export type Seal = { label: string; image: Photo } | { label: string; patent: string }

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: 'Diferenciais SEIVE',
  /** Cada item é uma linha do H2 (quebra forçada); a segunda sai em verde. 3–6 palavras. */
  titleLines: ['Proteção de ativos', 'com tecnologia SEIVE.'],
  text: `A ${site.brandShort} fornece o sistema SEIVE com atendimento consultivo. Tecnologia 100% brasileira, fabricada em Contagem/MG, com peças e preços em reais e estoque com disponibilidade imediata.`,
  /** Selo sob o botão. */
  trust: { icon: 'chat', label: 'Conte qual equipamento você precisa proteger.' },
  scene: {
    src: cenario,
    alt: 'Acionador SEIVE instalado em máquina',
  },
  person: {
    src: pessoa,
    alt: `Especialista da ${site.brandShort} de capacete, com os braços cruzados`,
  },
  reasons: [
    {
      icon: 'zap',
      title: 'Detecção e atuação',
      description: 'Da detecção à atuação, sem depender do operador.',
    },
    {
      icon: 'power',
      title: 'Acionamento manual',
      description: '2 modos manuais por botoeiras à vista.',
    },
    {
      icon: 'gear',
      title: 'Painel de monitoramento',
      description: 'Status do sistema e registro dos últimos 2.000 eventos.',
    },
    {
      icon: 'shield',
      title: 'Garantia de fábrica',
      description: '12 meses contra defeito de fabricação.',
    },
    {
      icon: 'wrench',
      title: 'Suporte técnico',
      description: 'Canal técnico direto durante o período de garantia.',
    },
  ],
  /**
   * Faixa de certificações entre o texto e a barra navy (aprovada em 02/11/2026). Fonte:
   * Apresentação SEIVE Supressor 2026, p. 2 e 3, e os selos enviados pelo cliente.
   * O selo ABNT vem do PDF; o ABNT ISO 9001 foi recortado do print enviado (baixa
   * resolução) — troque pelo arquivo original quando chegar.
   */
  certifications: {
    title: 'Certificações e normas',
    note: 'Atende aos requisitos aplicáveis das normas internacionais NFPA 17 e UL 1254.',
    seals: [
      {
        label: 'ABNT Nº 270.001/20',
        image: { src: seloAbnt, alt: 'Selo ABNT Processo Certificado' },
      },
      { label: 'Patente Kit SEIVE', patent: '903706326' },
      {
        label: 'ABNT NBR ISO 9001:2015',
        image: { src: seloIso, alt: 'Selo ABNT Sistema Certificado NBR ISO 9001' },
      },
    ],
  },
} as const satisfies {
  eyebrow: string
  titleLines: readonly [string, string]
  text: string
  trust: { icon: IconName; label: string }
  scene: Photo
  person: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
  certifications: { title: string; note: string; seals: readonly [Seal, Seal, Seal] }
}
