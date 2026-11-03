/**
 * Dados da seção "Segmentos atendidos" (biblioteca B2, fase: prova).
 *
 * Substituiu "aplicacoes" em 02/11/2026. Em 03/11/2026 passou ao layout da galeria de
 * aplicações da LP SEIVE LUB (pedido do usuário: mesma estética): faixa verde de largura
 * total, carrossel de cards-botão e, abaixo, a faixa "não está aqui?" (o antigo segmento
 * "Outras aplicações"). As descrições ficaram curtas, com o que eram os 3 bullets de cada
 * segmento, para caber nas duas linhas do card.
 *
 * Os segmentos sem foto entram com o painel verde e o ícone até chegarem fotos.
 *
 * Os 3 números da SEIVE ficavam numa faixa sob o carrossel; em 03/11/2026 foram para os
 * diferenciais (`src/data/sections/diferenciais.ts`), a pedido do usuário.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import mineracao from '@assets/segmentos/mineracao.png'
import construcao from '@assets/segmentos/construcao.png'
import florestal from '@assets/segmentos/florestal.png'
import agronegocio from '@assets/segmentos/agronegocio.png'

export interface Segment {
  id: string
  icon: IconName
  label: string
  description: string
  photo?: Photo
}

export const segments = {
  eyebrow: 'Segmentos atendidos',
  title: 'Proteção para cada setor da operação',
  /** Trecho do título em amarelo. */
  titleHighlight: 'cada setor da operação',
  text: 'O projeto se adapta ao equipamento e à aplicação. Escolha o segmento e fale com a equipe.',
  /** Chamada no pé de cada card (o card inteiro é o botão). */
  cardCta: 'Cotar para este segmento',
  /** Faixa abaixo dos cards, para quem não se vê nos segmentos. */
  help: {
    title: 'Sua aplicação não está aqui?',
    text: 'Colhedoras de algodão, equipamentos estacionários, frotas de locação ou instalações fixas: descreva e a Safe Mine ajuda na seleção.',
  },
  items: [
    {
      id: 'mineracao',
      icon: 'mountain',
      label: 'Mineração',
      description: 'Caminhões fora de estrada, escavadeiras e perfuratrizes.',
      photo: { src: mineracao, alt: 'Caminhão fora de estrada em mina' },
    },
    {
      id: 'construcao',
      icon: 'truck',
      label: 'Construção',
      description: 'Escavadeiras, pás carregadeiras e máquinas de obras.',
      photo: { src: construcao, alt: 'Escavadeira com reservatório supressor SEIVE em mina' },
    },
    {
      id: 'florestal',
      icon: 'leaf',
      label: 'Florestal',
      description: 'Harvesters e forwarders entre galhos e resíduos secos.',
      photo: { src: florestal, alt: 'Máquina florestal carregando toras' },
    },
    {
      id: 'agronegocio',
      icon: 'grid',
      label: 'Agronegócio',
      description: 'Colheitadeiras, tratores e pulverizadores em jornadas longas.',
      photo: { src: agronegocio, alt: 'Colheitadeira em lavoura de grãos' },
    },
    {
      id: 'industria',
      icon: 'factory',
      label: 'Indústria',
      description: 'Equipamentos de pátio e áreas técnicas em operação contínua.',
    },
    {
      id: 'sucroenergetico',
      icon: 'droplet',
      label: 'Sucroenergético',
      description: 'Colhedoras de cana e transbordos com palha e bagaço secos.',
    },
    {
      id: 'portuario',
      icon: 'box',
      label: 'Portuário',
      description: 'Reach stackers, empilhadeiras de contêineres e guindastes.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  cardCta: string
  help: { title: string; text: string }
  items: readonly Segment[]
}
