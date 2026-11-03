/**
 * Dados da seção "Segmentos atendidos" (biblioteca B2, fase: prova).
 *
 * Substituiu "aplicacoes" em 02/11/2026, a pedido do usuário: os 4 cards viraram 8 abas,
 * com o texto que a ficha já trazia em `segmentos`. As 4 fotos são as das antigas
 * aplicações; as outras abas entram sem foto (painel navy com ícone) até chegarem fotos.
 *
 * `metrics`: desvio aprovado em 02/11/2026. A seção "clientes" exige logos junto com os
 * números; aqui os 3 números da SEIVE entram sozinhos, numa faixa sob as abas.
 * Fonte: Apresentação SEIVE Supressor 2026, p. 6 e 7 (dados até o 4º trimestre de 2025).
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
  bullets: readonly [string, string, string]
  photo?: Photo
}

export interface Metric {
  icon: IconName
  value: string
  label: string
}

export const segments = {
  eyebrow: 'Segmentos atendidos',
  title: 'Proteção para cada setor da operação',
  /** Trecho do título em verde. */
  titleHighlight: 'cada setor da operação',
  text: 'O sistema é dimensionado conforme o equipamento e a aplicação, em máquinas autopropelidas, móveis ou estacionárias.',
  items: [
    {
      id: 'mineracao',
      icon: 'mountain',
      label: 'Mineração',
      description:
        'Operação abrasiva, com ar carregado e descargas elétricas constantes, onde uma máquina parada pesa no custo da produção.',
      bullets: ['Caminhões fora de estrada', 'Escavadeiras e carregadeiras', 'Perfuratrizes'],
      photo: { src: mineracao, alt: 'Caminhão fora de estrada em mina' },
    },
    {
      id: 'construcao',
      icon: 'truck',
      label: 'Construção',
      description:
        'Escavadeiras, carregadeiras e outros autopropelidos de obras e infraestrutura, com projeto conforme os pontos de risco.',
      bullets: ['Escavadeiras', 'Pás carregadeiras', 'Máquinas de obras'],
      photo: { src: construcao, alt: 'Escavadeira com reservatório supressor SEIVE em mina' },
    },
    {
      id: 'florestal',
      icon: 'leaf',
      label: 'Florestal',
      description:
        'Colheita e baldeio de madeira, uma das operações de maior risco, com galhos e resíduos secos em volta do equipamento.',
      bullets: ['Harvesters', 'Forwarders', 'Escavadeiras florestais'],
      photo: { src: florestal, alt: 'Máquina florestal carregando toras' },
    },
    {
      id: 'agronegocio',
      icon: 'grid',
      label: 'Agronegócio',
      description:
        'Máquinas que plantam e colhem em jornadas longas, com palha e poeira junto ao motor, onde uma parada custa a safra.',
      bullets: ['Colheitadeiras de grãos', 'Tratores', 'Pulverizadores autopropelidos'],
      photo: { src: agronegocio, alt: 'Colheitadeira em lavoura de grãos' },
    },
    {
      id: 'industria',
      icon: 'factory',
      label: 'Indústria',
      description:
        'Equipamentos industriais e de pátio em operação contínua, onde um princípio de incêndio interrompe a produção.',
      bullets: ['Equipamentos de pátio', 'Instalações industriais', 'Áreas técnicas'],
    },
    {
      id: 'sucroenergetico',
      icon: 'droplet',
      label: 'Sucroenergético',
      description:
        'Colheita mecanizada de cana em operação contínua, com palha e bagaço secos perto das partes quentes da máquina.',
      bullets: ['Colhedoras de cana', 'Tratores e transbordos', 'Caminhões canavieiros'],
    },
    {
      id: 'portuario',
      icon: 'box',
      label: 'Portuário',
      description:
        'Movimentação de contêineres e cargas em turnos contínuos, onde um incêndio para o pátio e atrasa a operação.',
      bullets: ['Reach stackers', 'Empilhadeiras de contêineres', 'Guindastes móveis'],
    },
    {
      id: 'outras',
      icon: 'dots',
      label: 'Outras aplicações',
      description:
        'Avaliamos outras máquinas com risco de incêndio, como colhedoras de algodão, equipamentos estacionários e frotas de locação.',
      bullets: ['Colhedoras de algodão', 'Equipamentos estacionários', 'Frotas de locação'],
    },
  ],
  metrics: [
    { icon: 'shield', value: '+6.000', label: 'sistemas SEIVE instalados' },
    { icon: 'excavator', value: '+5.000', label: 'equipamentos salvos' },
    { icon: 'clock', value: '+20 anos', label: 'em supressão de incêndio' },
  ],
  /** Fonte dos números, exibida sob a faixa. */
  metricsNote: 'Dados da SEIVE, fabricante do sistema, até o 4º trimestre de 2025.',
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  items: readonly [Segment, Segment, Segment, Segment, Segment, Segment, Segment, Segment]
  metrics: readonly [Metric, Metric, Metric]
  metricsNote: string
}
