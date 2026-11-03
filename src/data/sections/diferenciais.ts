/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Layout da LP SEIVE LUB (03/11/2026, pedido do usuário: mesma estética): bloco verde-escuro
 * em largura total com a frase de autoridade (última linha em amarelo), texto, CTA amarelo e
 * os selos ao lado; foto à direita; os 5 diferenciais em cards brancos sobrepostos à base do
 * bloco. São 5 exatos: o grid é `xl:grid-cols-5`.
 *
 * `cenario.jpg` é a foto do acionador SEIVE publicada pela Safe Mine.
 *
 * `certifications`: os mesmos selos da LP SEIVE LUB (fabricante e certificações iguais), com
 * as normas da Apresentação SEIVE Supressor 2026, p. 2 e 3: certificado ABNT Nº 270.001/20,
 * ISO 9001:2015, patente nº 903706326, NFPA 17 e UL 1254. Logos `cert-*.png` em baixa
 * resolução, recortados do catálogo: trocar pelos arquivos oficiais quando chegarem.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'
import certAbnt from '@assets/diferenciais/cert-abnt.png'
import certIso from '@assets/diferenciais/cert-iso.png'
import certPatente from '@assets/diferenciais/cert-patente.png'
import certUl from '@assets/diferenciais/cert-ul.png'
import certNfpa from '@assets/diferenciais/cert-nfpa.png'

export interface Certification {
  src: Photo['src']
  alt: string
}

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada no desktop); a última sai em amarelo. */
  titleLines: ['Proteção de ativos', 'com tecnologia SEIVE.'],
  text: `A ${site.brandShort} fornece o sistema SEIVE com atendimento consultivo. Tecnologia 100% brasileira, fabricada em Contagem/MG, com peças e preços em reais e estoque com disponibilidade imediata.`,
  scene: {
    src: cenario,
    alt: 'Acionador SEIVE vermelho instalado em máquina amarela',
  },
  /** Título em uma linha (até ~19 caracteres) e descrição em duas (até ~48) nos cards do desktop. */
  reasons: [
    {
      icon: 'zap',
      title: 'Atuação automática',
      description: 'Da detecção à atuação, sem depender do operador.',
    },
    {
      icon: 'power',
      title: 'Acionamento manual',
      description: '2 modos manuais por botoeiras à vista.',
    },
    {
      icon: 'gear',
      title: 'Monitoramento',
      description: 'Status do sistema e registro de 2.000 eventos.',
    },
    {
      icon: 'shield',
      title: 'Garantia de fábrica',
      description: '12 meses contra defeito de fabricação.',
    },
    {
      icon: 'wrench',
      title: 'Suporte técnico',
      description: 'Canal técnico direto durante a garantia.',
    },
  ],
  /** Selos das certificações ao lado do CTA. */
  certifications: [
    { src: certAbnt, alt: 'Processo certificado ABNT (certificado Nº 270.001/20)' },
    { src: certIso, alt: 'ABNT NBR ISO 9001:2015' },
    { src: certPatente, alt: 'Patente do Kit SEIVE nº 903706326' },
    { src: certUl, alt: 'UL (norma UL 1254)' },
    { src: certNfpa, alt: 'NFPA (norma NFPA 17)' },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
  certifications: readonly Certification[]
}
