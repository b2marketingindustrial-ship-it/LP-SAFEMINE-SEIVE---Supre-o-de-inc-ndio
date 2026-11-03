/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * 3 ou 4 cards, exatamente um deles escuro — normalmente o card de marcas, que
 * fecha o grid com peso visual. Cada linha tem 3 features de 2–4 palavras.
 *
 * Nesta LP os cards são os componentes do Kit de Incêndio SEIVE, e o item escuro é o
 * pós-venda — no mockup da Safe Mine ele vira a faixa azul abaixo dos três cards.
 *
 * Features técnicas da Apresentação SEIVE Supressor 2026, p. 11 e 12 (02/11/2026). A
 * apresentação escreve "pressão de trabalho de 21 kg"; a unidade kgf/cm² é inferida.
 */
import type { Photo } from '@data/types'

import linha1 from '@assets/linhas/linha-1.png'
import linha2 from '@assets/linhas/linha-2.png'
import linha3 from '@assets/linhas/linha-3.png'
import marcasPhoto from '@assets/linhas/marcas.png'

export interface ProductLine {
  id: string
  tag: string
  title: string
  description: string
  photo: Photo
  features: readonly [string, string, string]
  /** Exatamente um card escuro por grid. Informe sempre (true/false). */
  dark: boolean
}

export const productLines = {
  eyebrow: 'Kit de Incêndio SEIVE',
  title: 'O que compõe o sistema',
  /** Versão curta do texto de prevenção da apresentação SEIVE (p. 13), aprovada em 02/11/2026. */
  text: 'Máquinas em altas temperaturas exigem atenção: um pequeno foco pode sair de controle. O SEIVE age sozinho, da detecção à atuação.',
  items: [
    {
      id: 'reservatorio',
      tag: 'Supressão',
      title: 'Reservatório de pó químico',
      description: 'Pó químico ABC 90%, com pressurização por nitrogênio.',
      photo: { src: linha1, alt: 'Reservatório de pó químico SEIVE' },
      features: ['15 kg de pó ABC 90%', 'Pressão de 21 kgf/cm²', 'N₂ 320 g a 150 kgf/cm²'],
      dark: false,
    },
    {
      id: 'monitoramento',
      tag: 'Monitoramento',
      title: 'Painel de monitoramento',
      description: 'LEDs para normal, alarme, disparo e falhas; corrente máxima de 5 A.',
      photo: { src: linha2, alt: 'Painel de monitoramento SEIVE' },
      features: ['Bivolt 12/24 VCC', '5 LEDs de status', 'Registra 2.000 eventos'],
      dark: false,
    },
    {
      id: 'acionadores',
      tag: 'Acionamento',
      title: 'Acionadores automático e manual',
      description: 'Automático na cabine, por carga elétrica, e manual externo de alumínio.',
      photo: { src: linha3, alt: 'Acionador manual SEIVE' },
      features: ['Manual de 260 g', 'Ampola N₂ de 26 g', 'Ativação a 90 kgf/cm²'],
      dark: false,
    },
    {
      id: 'pecas',
      tag: 'Peças e suporte',
      title: 'Suporte para manter seu sistema ativo.',
      description: 'Peças genuínas SEIVE e atendimento técnico especializado.',
      photo: { src: marcasPhoto, alt: 'Família de reservatórios supressores SEIVE' },
      features: ['Peças genuínas', 'Suporte especializado', 'Garantia de 12 meses'],
      dark: true,
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
