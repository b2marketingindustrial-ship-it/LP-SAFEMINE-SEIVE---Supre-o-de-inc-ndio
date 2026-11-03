/**
 * Dados da seção "Sistemas móvel e fixo" (fase: oferta). Seção própria desta LP, fora da
 * biblioteca B2, criada em 03/11/2026 a pedido do usuário: a supressão SEIVE da Safe Mine
 * tem dois segmentos, móvel (embarcado na máquina) e fixo (instalações), e os dois têm de
 * aparecer na página.
 *
 * Fonte do texto e das fotos: site da Safe Mine (consultado em 03/11/2026)
 * - móvel: /produtos/sistema-de-supressao-de-incendio/8
 * - fixo: /produtos/sistema-fixo-de-alarme-e-deteccao/17
 *
 * O "acionamento automático em até 15 segundos" é a especificação da SEIVE citada no site
 * da Safe Mine. O site chama o fixo de "Sistema Fixo de Alarme e Detecção" e, no mesmo
 * produto, de "sistemas automáticos de supressão de incêndio para espaços operacionais e
 * habitacionais"; as fotos mostram baterias de cilindros SEIVE. Confirmar com o cliente.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import movel from '@assets/sistemas/movel.jpg'
import movelDetalhe from '@assets/sistemas/movel-detalhe.jpg'
import fixo from '@assets/sistemas/fixo.jpg'
import fixoDetalhe from '@assets/sistemas/fixo-detalhe.jpg'

export interface SystemLine {
  id: string
  icon: IconName
  tag: string
  title: string
  description: string
  photo: Photo
  /** Foto pequena de um componente, sobreposta ao canto da foto principal. */
  detail: Photo
  features: readonly [string, string, string]
  /** Rótulo da lista de aplicações. */
  appliesTo: string
  applications: readonly [string, string, string, string, string, string]
}

export const systems = {
  eyebrow: 'Sistemas móvel e fixo',
  title: 'Proteção na máquina e no ambiente',
  /** Trecho do título em verde. */
  titleHighlight: 'e no ambiente',
  text: 'A mesma tecnologia SEIVE, embarcada no equipamento ou instalada onde o risco de incêndio é permanente.',
  items: [
    {
      id: 'movel',
      icon: 'excavator',
      tag: 'Sistema móvel',
      title: 'Embarcado no equipamento',
      description:
        'Detecta e atua sozinho, sem depender do operador, em máquinas autopropelidas, móveis ou estacionárias.',
      photo: {
        src: movel,
        alt: 'Retroescavadeira com reservatório supressor SEIVE instalado junto ao motor',
      },
      detail: { src: movelDetalhe, alt: 'Painel de monitoramento SEIVE na cabine' },
      features: ['Atua em até 15 s', 'Botoeiras manuais', 'Painel na cabine'],
      appliesTo: 'Onde se aplica',
      applications: ['Mineração', 'Florestal', 'Agrícola', 'Portuário', 'Indústria', 'Geradores'],
    },
    {
      id: 'fixo',
      icon: 'building',
      tag: 'Sistema fixo',
      title: 'Instalado no ambiente',
      description:
        'Detecção, alarme e supressão permanentes para espaços operacionais e habitacionais.',
      photo: {
        src: fixo,
        alt: 'Bateria de cilindros SEIVE do sistema fixo instalada em base de concreto',
      },
      detail: { src: fixoDetalhe, alt: 'Acionador manual de incêndio do sistema fixo SEIVE' },
      features: ['Monitoramento contínuo', 'Alarme rápido', 'Acionador manual'],
      appliesTo: 'Onde se aplica',
      applications: [
        'Salas elétricas',
        'Data centers',
        'Usinas de energia',
        'Motores e hidráulica',
        'Áreas técnicas',
        'Alojamentos',
      ],
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  items: readonly [SystemLine, SystemLine]
}
