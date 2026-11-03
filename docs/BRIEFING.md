# Registro da LP — o que a ficha decidiu e o que a execução fez

> Preenchido pelo agente **durante a execução**, a partir de `docs/FICHA-LP.md`. Não é um registro de entrevista: a entrevista aconteceu no chat web (`docs/PROMPT-FICHA-LP.md`) e a ficha é a fonte. Este arquivo existe para que, meses depois e sem a conversa, se saiba de onde veio cada coisa — e porque `docs/briefing-cliente/` fica fora do git.
>
> Nada aqui é perguntado ao usuário. Se um campo não puder ser preenchido a partir da ficha, a execução para e recusa, em vez de deixar lacuna.

> **Desvio de processo desta LP:** não houve conversa de chat com o `PROMPT-FICHA-LP.md`. A ficha foi montada no editor, em 29/10/2026, a partir do briefing de campanha organizado, do material do cliente e do fabricante e do POP de estruturação de LPs da B2. O que dependia de confirmação virou pendência declarada abaixo, não valor inventado.

## Origem

| Campo                     | Valor                                                                                                                                                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ficha de execução         | `docs/FICHA-LP.md`                                                                                                                                                                                                    |
| Data da ficha             | 2026-10-29                                                                                                                                                                                                            |
| Versão do padrão na ficha | 2.8.0 — o briefing cita v2.9.0, que não existe no repositório do starter                                                                                                                                              |
| Validada em               | 29/10/2026 por `npm run ficha`                                                                                                                                                                                        |
| Material bruto do cliente | `docs/briefing-cliente/` (fora do git): apresentação "Seive Supressor 2026" e POP de LPs; "briefing-organizado-seive-kit-incendio.md" (28/10/2026, enviado na conversa); sites safeminesolucoes.com.br e seive.com.br |
| Briefing de campanha      | sim, campanha `SEIVE_PESQ_SUPRESSAO_B2B`, grupos "Supressão em máquinas" e "Supressão em equipamentos móveis"                                                                                                         |
| Fora desta execução       | grupo "Supressão náutica" (LSI Náutico) e lubrificação automática                                                                                                                                                     |

**Cliente e fabricante.** O briefing de campanha foi organizado só com o material da SEIVE e traz a SEIVE no núcleo (marca, endereço em Contagem/MG, WhatsApp). O cliente informado na conversa é a **Safe Mine Soluções** (Belo Horizonte/MG), que revende e especifica o sistema SEIVE. A LP é da Safe Mine; a SEIVE aparece como fabricante, por extenso. **Confirmar com a B2 antes de ativar a campanha.**

## Campanha

| Campo                      | Valor                                                                                                                                                                                               |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Palavra-chave principal    | `supressão de incêndio SEIVE` — no H1 e no title                                                                                                                                                    |
| Origem                     | briefing de campanha                                                                                                                                                                                |
| Área atendida              | não declarada na página — o briefing pede confirmar a cobertura antes de usá-la em hero, selo ou cotação                                                                                            |
| Negativas de oferta        | extintor doméstico, extintor automotivo avulso, mangueira de incêndio, alarme residencial, detector de fumaça casa, central de alarme, detecção para data center, sistema de lubrificação           |
| Negativas de intenção      | curso de bombeiro, corpo de bombeiros concurso, como apagar fogo, projeto escolar incêndio (só registro)                                                                                            |
| Claims proibidos           | promessas absolutas de risco eliminado ou de perdas evitadas (em `campaign.forbidden` como "risco zero", "elimina o risco", "evita perdas"…), mais autorizado/oficial/exclusivo e superlativos      |
| Divergência de vocabulário | o cliente diz "Sistema Supressor" e "Kit de Incêndio SEIVE"; a campanha compra "sistema de supressão de incêndio" e "supressão para máquinas pesadas/equipamentos móveis" — H1 no termo da campanha |

### Famílias de palavra-chave

| Família               | Termos                                                                                                                                                           | Bloco que responde | Status  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------- |
| produto-categoria     | sistema de supressão de incêndio; supressão de incêndio SEIVE                                                                                                    | `linhas`           | coberta |
| equipamento-aplicacao | supressão para máquinas pesadas; supressão para equipamentos móveis; proteção contra incêndio máquinas industriais; sistema automático combate incêndio máquinas | `aplicacoes`       | coberta |
| setor                 | sistema de supressão de incêndio mineração                                                                                                                       | `aplicacoes`       | coberta |
| transacional          | cotação sistema supressão incêndio                                                                                                                               | `identificar`      | coberta |

### Comitê de compra

| Papel                | Argumento de compra | Bloco que responde                      | Status                                       |
| -------------------- | ------------------- | --------------------------------------- | -------------------------------------------- |
| Gestor de manutenção | ausente no briefing | `linhas`, `identificar`, `diferenciais` | coberto pelo conteúdo; argumento a confirmar |
| Gestor de segurança  | ausente no briefing | `aplicacoes`, `diferenciais`            | coberto pelo conteúdo; argumento a confirmar |
| Gestor de frotas     | ausente no briefing | `linhas`, `identificar`, `aplicacoes`   | coberto pelo conteúdo; argumento a confirmar |

### Conteúdo futuro

| Grupo             | O que oferece            | Por que está fora           |
| ----------------- | ------------------------ | --------------------------- |
| Supressão náutica | LSI Náutico, embarcações | fora do recorte da campanha |

## Composição

Derivada em: 29/10/2026 · comando aplicado: `npm run compose -- linhas identificar aplicacoes diferenciais`

### Seções que entraram

| Fase       | Seção          | Fundo     | Respiro     | Veredicto na ficha | Famílias que responde                    |
| ---------- | -------------- | --------- | ----------- | ------------------ | ---------------------------------------- |
| oferta     | `linhas`       | branco    | pt-20 pb-10 | completo           | produto-categoria                        |
| apoio      | `identificar`  | branco    | pt-6 pb-16  | completo · navy    | transacional                             |
| prova      | `aplicacoes`   | cinza-100 | pt-4 pb-20  | completo           | equipamento-aplicacao, setor             |
| autoridade | `diferenciais` | cinza-100 | pt-6 pb-8   | completo · navy    | produto-categoria, equipamento-aplicacao |

Diferenças em relação aos veredictos do briefing organizado: `linhas` (componentes do kit, com fotos da apresentação) e `aplicacoes` (fotos da apresentação e do site da SEIVE) passaram a completos com o material reunido nesta execução; `segmentos` e `perguntas` também fecham a contagem, mas perderam pela regra fixa.

### Blocos que ficaram fora

| Bloco            | Veredicto     | O que falta para entrar                                                |
| ---------------- | ------------- | ---------------------------------------------------------------------- |
| `processo`       | quase         | sequência real, responsável por etapa e marcos públicos                |
| `segmentos`      | completo      | perdeu para `aplicacoes` (responde a menos famílias)                   |
| `perguntas`      | completo      | perdeu para `diferenciais`, que já é o portador navy da fase           |
| `clientes`       | insuficiente  | logos e números da apresentação são da SEIVE, sem autorização expressa |
| `situacoes`      | insuficiente  | gatilhos de contato reais do comercial                                 |
| `especificacoes` | insuficiente  | 4 a 10 modelos ou configurações comparáveis                            |
| `vitrine`        | insuficiente  | 6 a 24 produtos                                                        |
| `escopo`         | não se aplica | não é consolidação de compras                                          |

## Entradas do núcleo

| #   | Entrada                 | Valor                                                                                                          | Origem                                                 |
| --- | ----------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 1   | MARCA                   | Safe Mine Soluções                                                                                             | cliente informado; o briefing dizia SEIVE              |
| 2   | MARCA_CURTA             | Safe Mine                                                                                                      | site do cliente                                        |
| 3   | PRODUTO_PRINCIPAL       | Sistemas de supressão de incêndio SEIVE                                                                        | briefing (título do anúncio)                           |
| 4   | CONTEXTO_DE_USO         | máquinas pesadas                                                                                               | briefing (título do anúncio)                           |
| 5   | PUBLICO                 | Gestores de manutenção, de segurança e de frotas                                                               | briefing                                               |
| 6   | HERO                    | Sistemas SEIVE para máquinas pesadas · Proteção automatizada para equipamentos móveis · Solução para mineração | briefing                                               |
| 7   | MARCAS_ATENDIDAS        | SEIVE, só por extenso                                                                                          | logo da SEIVE sem autorização registrada               |
| 8   | SELOS_DE_CONFIANCA      | Detecção e atuação automáticas · Acionamento manual disponível · Garantia de 12 meses                          | briefing                                               |
| 9   | ENDERECO                | Belo Horizonte/MG                                                                                              | site do cliente — endereço completo pendente           |
| 10  | URL_FINAL + PRIVACIDADE | `https://lp-seive-supressao-de-incendio.vercel.app/`; sem política de privacidade                              | Vercel                                                 |
| 11  | SHORTCODES              | `[atendimento_chat id="default"]` · `[atendimento_form id="default-form"]`                                     | default do padrão                                      |
| 12  | WHATSAPP                | 5531995538843 ("Orçamento por WhatsApp" do site da Safe Mine)                                                  | site do cliente; o briefing trazia os números da SEIVE |
| 13  | STACK + PUBLICACAO      | Astro, `main` → `wp-build`; preview na Vercel                                                                  | default do padrão                                      |
| 14  | TOKENS_DE_COR + FONTE   | azul #163b99 (navy #102c73), verde #7ba249 escurecido para #4d7f22; Manrope                                    | CSS do site do cliente                                 |
| 15  | CAMPANHA                | `supressão de incêndio SEIVE`                                                                                  | briefing de campanha                                   |

## Assets

| Asset           | Arquivo esperado             | Especificação               | Status                                                                              |
| --------------- | ---------------------------- | --------------------------- | ----------------------------------------------------------------------------------- |
| Logo            | `src/assets/LOGO.png`        | 240×200, fundo transparente | entregue — logo do site da Safe Mine (og:image e JSON-LD)                           |
| Logo do header  | `src/assets/header-logo.png` | 579×124                     | entregue — mesmo logo, recortado para a barra branca do mockup                      |
| Banner do hero  | `src/assets/heroBg.png`      | 1981×900, brief 4.1.3       | entregue — "Orange Excavator in Rocky Quarry.png" (1870×841), enviado em 29/10/2026 |
| Produto do hero | —                            | removido em 01/11/2026      | o reservatório sobreposto saiu com o hero claro; `linha-1.png` segue usando a foto  |

| Asset                        | Arquivo esperado                             | Especificação                 | Status                                                                                                              |
| ---------------------------- | -------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Reservatório                 | `src/assets/linhas/linha-1.png`              | PNG 800×600 recortado         | entregue — render enviado em 29/10/2026                                                                             |
| Painel de monitoramento      | `src/assets/linhas/linha-2.png`              | PNG 800×600 recortado         | entregue — apresentação SEIVE (original 328×219)                                                                    |
| Acionador                    | `src/assets/linhas/linha-3.png`              | PNG 800×600 recortado         | entregue — apresentação SEIVE                                                                                       |
| Peças genuínas (card escuro) | `src/assets/linhas/marcas.png`               | 1280×800                      | entregue — família de reservatórios da apresentação                                                                 |
| Aplicações 1–4               | `src/assets/aplicacoes/aplicacao-{1..4}.png` | 1200×900 (4:3)                | entregues — apresentação SEIVE e site da SEIVE; a florestal tem 899 px                                              |
| Cenário dos diferenciais     | `src/assets/diferenciais/cenario.jpg`        | 1600×900                      | entregue — foto do acionador do site da Safe Mine (1280×720)                                                        |
| Pessoa dos diferenciais      | `src/assets/diferenciais/pessoa.png`         | 1220×1000, fundo transparente | entregue em 30/10/2026 — "Smiling Fire-Safety Technician Cutout.png" (1024×1536), enquadrado do capacete ao quadril |

Direito de uso das fotos de máquinas da apresentação da SEIVE a confirmar.

## Conflitos com o padrão

| O que o material pedia                                 | Regra do padrão                                          | O que entrou no lugar                                                              |
| ------------------------------------------------------ | -------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| SEIVE como marca no núcleo do briefing                 | a LP é do anunciante                                     | Safe Mine na marca, rodapé e WhatsApp; SEIVE como fabricante                       |
| Certificação ABNT, NFPA, UL, ISO 9001 e patente        | o briefing pede confirmar certificados antes de publicar | liberada em 02/11/2026 com os selos enviados: faixa de selos nos diferenciais      |
| Área "Brasil e América do Sul"                         | o briefing pede confirmar a cobertura                    | nenhuma área declarada                                                             |
| Linha "Sistema fixo de alarme e detecção" da Safe Mine | o que a campanha negativa não é assunto da página        | fora até 03/11/2026; agora entra na seção `sistemas`, a pedido do usuário          |
| Logos de clientes da SEIVE                             | clientes têm de ser do anunciante, com autorização       | fora até 03/11/2026; entraram confirmados como clientes SEIVE pelo usuário         |
| Números da SEIVE sem logos                             | "clientes" exige 4–8 logos junto com os números          | faixa de 3 números sob os segmentos, com a fonte (02/11/2026)                      |
| Verde da Safe Mine nos botões                          | botão com texto branco exige 4,5:1                       | verde escurecido (#4d7f22)                                                         |
| CTA e formulário próprios                              | vocabulário de CTA e shortcode do plugin                 | CTAs do padrão; os 6 campos viraram o painel de dados para cotação                 |
| Title no formato padrão com mais de 80 caracteres      | title ≤ 70 caracteres                                    | `conteudo.title`: "Supressão de incêndio SEIVE para máquinas pesadas \| Safe Mine" |

## Dados não aplicados

LSI Náutico e SEIVE LUB; WhatsApp secundário (31) 99710-0350; contatos da SEIVE (telefones, e-mails, CNPJ, endereço); R$ 6 bi preservados (lê como claim de "evita prejuízo"); logos de clientes da SEIVE; depoimentos do site da SEIVE; demais produtos da Safe Mine; "suporte técnico 24h" e "acionamento em até 15 segundos" (não estão na apresentação — aguardam confirmação do cliente); responsável técnico (eng. José Seabra Junior).

## Desvio aprovado: abertura no mockup claro da Safe Mine (29/10/2026)

A pedido do usuário, Header e Hero seguem o mockup claro enviado em 29/10/2026 (que substituiu um mockup escuro aplicado no mesmo dia), como já foi feito na LP da Print Master:

- `Header.astro`: barra branca flutuante (`fixed`, não `sticky`), logo colorido sem a placa, duas âncoras do mockup ("Sistema SEIVE" → `#linhas`, "Aplicações" → `#aplicacoes`, escondidas no mobile) e CTA verde com seta. O padrão não prevê menu; as duas âncoras entraram porque estão no mockup. A sombra aumenta ao rolar.
- `Hero.astro`: fundo claro; eyebrow "Sistemas de supressão SEIVE" com traço verde; H1 em três linhas com "máquinas pesadas." em verde; CTA primário e link "Conhecer o sistema" (âncora para `#linhas`, com `data-cta="hero-secondary"`; rola a página, não abre atendimento); selo "Conte qual equipamento você precisa proteger."; à direita, a foto da mina em card arredondado (o banner entra ampliado e ancorado à direita, para o azul do lado esquerdo ficar fora), o reservatório SEIVE sobreposto ao canto e a legenda "Sistema SEIVE"; faixa clara de três pontos com título e apoio.
- **H1:** o mockup trazia "Proteção contra incêndio para máquinas pesadas.", sem a palavra-chave da campanha. Ficou "Supressão de incêndio SEIVE para máquinas pesadas.", com o mesmo visual — a regra 17 e o briefing de campanha exigem o termo no H1.
- **Chat do plugin:** o slot continua no hero, na coluna da cena. Fora do WordPress ele só contém o texto cru do shortcode e o CSS o esconde; a cena aparece no lugar. Quando o plugin renderiza o chat, o chat ocupa a coluna e a cena sai.
- Vocabulário de CTA: o primário passou a "Solicitar cotação", como no mockup, em toda a página.
- Ícone novo no catálogo: `excavator`. O preload do LCP em `Layout.astro` usa o mesmo `sizes` da foto do hero.
- A assinatura A8 de `scripts/check-lp.mjs` foi repinada para essa abertura.

## Hero restaurado ao padrão (01/11/2026)

A pedido do usuário, o Hero deixou o mockup claro e voltou à estrutura fixa 4.1.2, como nas demais LPs da B2: grid `1fr · 270px · 300px`, coluna 2 vazia (janela do banner), slot `shortcode` de 300px e foto de 1700px na borda do container, com véus, malha de pontos, borda inferior arredondada e `?grid=1`. O banner foi reenquadrado para 1981×900 (assunto em ~70% da largura). Saíram o link "Conhecer o sistema", o reservatório sobreposto e a legenda; entraram a caixa de três pontos, o CTA secundário "Identifique seu equipamento" e a nota "Conte qual equipamento você precisa proteger." sob os botões. O Header também voltou ao padrão (ver abaixo). A assinatura A8 do Hero voltou à da estrutura fixa.

## Desvio aprovado: seção do kit no mockup da Safe Mine (29/10/2026)

A pedido do usuário, `src/components/sections/ProductLines.astro` (seção `linhas`) segue o mockup "SEIVE Fire Suppression Components & Support.png":

- Cabeçalho com o título grande e traço verde à esquerda e o texto à direita, separados por uma linha.
- Três cards claros (chip verde, foto grande, título, descrição e checks), sem índice e sem rodapé de CTA visível. Cada card é inteiro clicável por um botão sem texto que o cobre (`data-cta="linhas-{id}"`, rótulo em `aria-label`), para manter o rastreio por item.
- O item escuro (`dark: true`, pós-venda) virou a faixa azul em largura total abaixo dos cards, com a família de reservatórios recortada, "Suporte para manter seu sistema ativo.", três checks e o CTA "Falar com especialista" em pílula.
- Copy de `linhas` atualizada na ficha e no arquivo de dados conforme o mockup; o contrato do manifesto continua atendido (4 itens, um escuro, 3 features cada).
- **Atenção:** `npm run compose` sobrescreve este componente com o da biblioteca. Se a LP for recomposta, restaure-o do git depois do compose.

## Desvio aprovado: painel "Dados para cotação" removido (29/10/2026)

A pedido do usuário, a seção `identificar` (painel navy com os 6 dados para cotação, fase de apoio) saiu da página. A composição aplicada é `linhas · aplicacoes · diferenciais`.

- O padrão exige a fase de apoio e um bloco navy em cada metade da página; o compositor recusa essa composição. Por isso `src/pages/index.astro` e `lp.manifest.json` foram ajustados à mão, e `SupportPanel.astro` e `identificar.ts` foram apagados.
- `aplicacoes` passou do ritmo `centered-lead` para `even` (py-16), para o respiro depois da seção do kit ficar dentro da faixa do padrão.
- `scripts/check-lp.mjs` (B2/B3) dispensa a fase de apoio quando ela está vazia e, nesse caso, aceita a metade branca sem bloco navy. Nenhuma outra regra de composição mudou.
- A ficha mantém o bloco `identificar` (com comentário), e `npm run ficha` ainda o deriva na fase de apoio — a composição aplicada difere da derivada de propósito. **Não rode `npm run compose` sem reaplicar esta exceção.**
- Alternativa que respeitaria o padrão: a seção "Como funciona" (`processo`, veredicto `quase`) no lugar do painel.

## Desvio aprovado: aplicações sobre chamas (29–30/10/2026)

A pedido do usuário, `src/components/sections/ApplicationsGallery.astro` (seção `aplicacoes`) segue o mockup claro "SEIVE Fire Protection for Heavy Equipment.png" (30/10/2026), que substituiu uma versão escura com chamas aplicada na véspera:

- Fundo claro com chamas suaves nos cantos de baixo, em sangria total por baixo do respiro da seção (`src/assets/fundo-chamas-claro.jpg`, do arquivo limpo "Pale background with subtle corner flames.png" enviado pelo usuário). A foto encaixa pela largura, ancorada embaixo; acima dela, o mesmo tom claro.
- Cabeçalho à esquerda: traço verde, eyebrow "Aplicações do sistema SEIVE" e título em duas linhas a partir do tablet, a segunda ("e equipamentos móveis") em verde.
- Quatro cards brancos com foto, título, descrição e o rodapé "Solicitar cotação →"; cada card é inteiro clicável por um botão sem texto que o cobre (`data-cta="aplicacoes-{id}"`).
- A foto de construção passou a ser a escavadeira com o reservatório SEIVE, recortada do banner do hero (1120×840).
- O pé da seção tem um degradê do branco para o cinza dos diferenciais, para as chamas não terminarem num corte reto.
- **Atenção:** `npm run compose` sobrescreve este componente com o da biblioteca.

## Desvio aprovado: diferenciais no mockup da Safe Mine (30/10/2026)

A pedido do usuário, `src/components/sections/WhyBrand.astro` (seção `diferenciais`) segue o mockup "Smiling fire-safety technician on SEIVE page.png":

- Fundo claro (o tom da composição). Texto à esquerda: traço verde e eyebrow, título em duas linhas com a segunda ("com tecnologia SEIVE.") em verde, texto, CTA "Solicitar cotação" e o selo com ícone de conversa "Conte qual equipamento você precisa proteger.".
- À direita, a foto do acionador (`cenario.jpg`) em card arredondado, com o técnico (`pessoa.png`) sobreposto na metade direita, do capacete ao quadril.
- Os 5 diferenciais saíram dos cards sobrepostos e foram para uma barra navy abaixo — é o bloco navy da segunda metade da página. Cinco lado a lado a partir de 1280 px; abaixo disso, duas colunas e, no celular, uma. O ícone do painel passou de `cpu` para `gear`, como no mockup.
- O container da página (1320 px) é mais estreito que o do mockup: na barra, ícone, espaçamento e texto foram reduzidos para as descrições caberem em duas linhas.
- Token novo: `--color-brand-green` (#7ba249), só para ícones sobre fundo navy (barra dos diferenciais e rodapé).
- **Atenção:** `npm run compose` sobrescreve este componente com o da biblioteca.

## Desvio aprovado: cotação e rodapé no mockup da Safe Mine (30/10/2026)

A pedido do usuário, `QuoteForm.astro` e `Footer.astro` (estrutura fixa) seguem o mockup "Premium fire suppression quote section.png":

- Cotação: fundo claro com duas formas claras bem suaves; grid `0.85fr · 1fr`. O slot do formulário fica num card branco arredondado; fora do WordPress o texto cru do shortcode é escondido por CSS e o card fica vazio, como no mockup. Abaixo, a nota de LGPD com ícone de cadeado (ícone novo `lock`).
- À direita: eyebrow com quadrado verde, título em duas linhas com "supressão de incêndio." em verde (`quote.highlight`), texto, botão "Chamar no WhatsApp" **verde** com o ícone do WhatsApp (o padrão pedia navy para não competir com o envio do formulário; o mockup pede verde) e os três selos com ícones grandes e divisórias.
- O ícone `whatsapp` ganhou o fone dentro do balão, como no mockup — vale também para o botão flutuante.
- Rodapé: navy sólido (`primary-dark-900`) com filete verde de 2px no topo, no lugar do `navy-premium`; mesma linha copyright · endereço · crédito da B2.
- A assinatura A8 de `scripts/check-lp.mjs` foi repinada para a cotação e o rodapé.

## Desvios técnicos da execução

- `npm run screens` falha nesta pasta: o script monta o comando com `shell: true` e o caminho tem espaços. As capturas foram feitas com os mesmos parâmetros (porta 4873, Playwright 1.58.2, `?screens=1` e `?grid=1`), com caminho relativo e 5 s de espera.
- Correção a levar para a biblioteca: em `processo`, quando nenhuma etapa tem prazo (a regra da seção manda omitir), o `as const` do exemplo faz o componente não compilar.
- Brilho dos botões de `identificar` e `diferenciais` tem laranja fixo em rgba no código da biblioteca, fora dos tokens.
- **Fonte servida pelo próprio site (30/10/2026).** O Lighthouse CI do GitHub (Linux) reprovou o CLS em 0,109 (limite 0,1): a Manrope vinha do Google Fonts e, até chegar, a reserva larga do Linux (DejaVu) quebrava o H1 em mais linhas. Como na LP da Print Master, a Manrope passou a vir de `@fontsource-variable/manrope@5.3.0` (import em `global.css`, preload do woff2 latino no `Layout.astro`), com reserva de métricas de Arial/Liberation Sans. Lighthouse local depois da troca: CLS 0,000, desempenho 0,99–1. Correção a levar para o template do starter.

## Estado da entrega

- [x] Primeira versão de pé (`npm run check:lp:rascunho` passa) em: 29/10/2026
- [x] Todos os assets reais entregues (30/10/2026; `assets.pendentes` vazio)
- [x] `npm run verify` passa inteiro em: 30/10/2026 — 0 erros, 1 aviso (foto florestal com 899 px de largura)
- [x] Padrão B2 versão: `2.8.0`

## Header restaurado ao padrão (01/11/2026)

A pedido do usuário, o Header deixou a barra branca flutuante do mockup de 29/10/2026 e voltou à estrutura fixa 4.1.1, como nas demais LPs da B2: barra navy `sticky`, a placa branca traz o logo SEIVE, um separador e o Safe Mine, tagline central "Supressão de incêndio" e CTA laranja em caixa-alta ("Cotação" no celular). As âncoras do topo saíram. O Hero voltou ao padding do padrão (`py-20 lg:py-24`), já que o header não é mais sobreposto. A assinatura A8 do Header em `scripts/check-lp.mjs` voltou à da estrutura fixa.

## Conteúdo da apresentação SEIVE incorporado (02/11/2026)

Revisão da LP contra a Apresentação SEIVE Supressor 2026 e o texto do cliente, item a item com o usuário:

- **Certificações:** faixa entre o texto e a barra navy dos diferenciais, com 3 selos — ABNT Nº 270.001/20 (selo "Processo certificado" do PDF, p. 3), Patente Kit SEIVE nº 903706326 (em HTML) e ABNT NBR ISO 9001:2015 (recortado do print enviado, ~130 px; trocar pelo original) — e a nota "NFPA 17 e UL 1254". O selo ABNT traz "PE - 289", mas o texto da apresentação cita a norma "ABNT PE-223": confirmar com o cliente. Os selos ficam em `src/assets/diferenciais/selo-*.png` porque o `check:lp` exige pasta de assets com o slug de uma seção.
- **Prevenção:** versão curta do texto da p. 13 no parágrafo do kit, sem "morte de pessoas" nem "prejuízos incalculáveis".
- **Kit:** features técnicas da p. 11–12 nos cards (pressões, pesos, 5 LEDs, 5 A). A apresentação escreve "pressão de trabalho de 21 kg"; a unidade kgf/cm² foi inferida.
- **Diferenciais:** "sem depender do operador", "2 modos manuais por botoeiras à vista" e o parágrafo com a fabricação nacional (100% brasileira, Contagem/MG, peças e preços em reais, estoque imediato).
- **Segmentos no lugar de aplicações:** 8 abas com o texto que a ficha já trazia em `segmentos`; as 4 fotos das aplicações foram para mineração, construção, florestal e agronegócio, e as outras 4 abas usam o painel navy com ícone até chegarem fotos. Abaixo, a faixa com +6.000 sistemas, +5.000 equipamentos salvos e +20 anos (fonte: apresentação, p. 6–7, até o 4º tri/2025).
- **Perguntas frequentes:** as 4 da ficha mais certificação e manutenção, antes dos diferenciais (o ritmo `overlap` dos diferenciais só funciona imediatamente antes da cotação). `SplitHeader.astro` e `Faq.astro` vieram da LP SEIVE LUB, e o `check:lp` passou a aceitar `<SplitHeader>` como cabeçalho, como lá.

## Sistemas móvel e fixo (03/11/2026)

A pedido do usuário: a supressão de incêndio da Safe Mine tem dois segmentos, **móvel** e **fixo**, e a página tem de tratar os dois. Fontes: as páginas de produto do site da Safe Mine, `/produtos/sistema-de-supressao-de-incendio/8` (móvel) e `/produtos/sistema-fixo-de-alarme-e-deteccao/17` (fixo), lidas em 03/11/2026.

- **Seção nova `sistemas`** (`SystemsSplit.astro`, `src/data/sections/sistemas.ts`), própria desta LP e fora da biblioteca, na fase de oferta antes de `linhas`, fundo branco, ritmo `open`. São dois cards com foto, um componente em destaque, 3 checks, 6 aplicações e o CTA `sistemas-movel` / `sistemas-fixo`. As fotos vêm das galerias das duas páginas do site da Safe Mine (`src/assets/sistemas/`, 1280×1040).
- **Kit:** passou a ser o kit do sistema móvel (eyebrow "Sistema móvel · Kit de Incêndio SEIVE", título "O que compõe o sistema móvel").
- **Hero:** o texto cita os dois sistemas, o 3º ponto virou "Sistemas fixos para instalações críticas" (antes: "Mineração e indústria") e a nota diz "equipamento ou ambiente". O H1 segue com a palavra-chave da campanha.
- **Perguntas:** entrou "Qual é a diferença entre o sistema móvel e o fixo?" como 2ª pergunta.
- **A confirmar com o cliente:** o site chama o fixo de "Sistema Fixo de Alarme e Detecção" e, no mesmo produto, de "sistemas automáticos de supressão de incêndio para espaços operacionais e habitacionais"; as fotos mostram baterias de cilindros SEIVE. A LP diz "Alarme, detecção e supressão no ambiente".
- **A revisar na campanha:** as negativas de oferta `central de alarme` e `detecção para data center` excluem justamente o público do sistema fixo. A página não usa esses termos literais, mas a campanha precisa ser revista se o fixo também for anunciado.
- `npm run ficha -- --check` não roda neste servidor (a biblioteca do starter não está ao lado da LP); `check:lp`, lint, prettier, `astro check` e build passam.

## Estética da LP SEIVE LUB (03/11/2026)

A pedido do usuário, esta LP passou a seguir a padronização de layout, estilo, cores, estrutura das seções e header da LP SEIVE LUB (`../LP-SAFEMINE-SEIVE---Lubrifica-o-centralizada`). O conteúdo da supressão não mudou, salvo os ajustes de texto listados abaixo.

- **Paleta SEIVE no lugar do azul da Safe Mine:** os tokens de `global.css` são os da LUB (verdes da logo SEIVE em tons, amarelo da folha para destaques sobre fundo escuro, ação em #00824b). Vêm junto a superfície verde com luzes e grão (`--seive-surface-*`), as texturas claras e as sombras (`card-shadow`, `panel-shadow`). A Manrope continua servida pelo próprio site (fontsource), por causa do CLS.
- **Respiro e fundos:** todas as seções usam o ritmo `uniform` (70px em cima e embaixo). Os fundos alternam seção a seção (sistemas branco, kit cinza, segmentos cinza sob a faixa verde, perguntas branco, diferenciais cinza), e o `check:lp` passou à regra da LUB. A seção acima dos diferenciais tem a base arredondada sobre o bloco verde.
- **Estrutura fixa (copiada da LUB):** header branco com as logos, a tagline com selo e o CTA verde; hero com véus verdes, título em três linhas e destaque amarelo (a nota sob os botões foi mantida); cotação sem card e sem a nota de LGPD, com a linha "Atendemos pelo formulário ou pelo WhatsApp"; rodapé verde que sobe sob a base arredondada da cotação.
- **Seções:**
  - Perguntas e diferenciais usam os componentes da LUB.
  - Os diferenciais têm bloco verde com foto, CTA amarelo e os 5 selos (ABNT, ISO 9001, patente, UL, NFPA, os mesmos arquivos `cert-*.png` da LUB). O recorte do técnico e os selos antigos saíram.
  - O kit passou aos cards da LUB, com a faixa de peças e suporte em verde e CTA amarelo.
  - A seção móvel/fixo usa os mesmos cards.
  - Os segmentos viraram a faixa verde de aplicações da LUB, que é o bloco escuro da primeira metade. São 7 cards num carrossel, os 3 números em vidro e "Sua aplicação não está aqui?" no lugar de "Outras aplicações". As descrições encurtaram (os bullets entraram nelas) e os segmentos sem foto mostram o painel verde com ícone. O fundo de chamas saiu.
- **Textos ajustados para o novo layout:** o parágrafo do hero tem quebra antes de "A Safe Mine"; os selos da cotação ficaram "Atuação automática" e "Acionamento manual"; o texto dos segmentos encurtou; e o FAQ diz "Ficou alguma dúvida sobre a sua aplicação?".

## Ajustes de 03/11/2026 (tarde)

- **Números da SEIVE** (+6.000 sistemas, +5.000 equipamentos salvos, +20 anos) saíram da faixa dos segmentos e foram para o bloco verde dos diferenciais, entre o texto e o CTA: são autoridade do fabricante. A nota com a fonte saiu da página a pedido do usuário; a fonte (apresentação, p. 6 e 7, até o 4º tri/2025) fica no comentário de `diferenciais.ts`.
- **Sistemas móvel e fixo:** título "Proteção na máquina e no ambiente" (antes "Supressão móvel para máquinas e fixa para instalações"), eyebrow "Sistemas móvel e fixo". Cards mais compactos: foto em 2:1, títulos curtos ("Embarcado no equipamento", "Instalado no ambiente"), checks curtos numa linha e etiquetas de aplicação menores.
- **Clientes:** seção `clientes` trazida da LP SEIVE LUB (componente `ClientLogos.astro`, dados e os 17 logos em `src/assets/clientes/`), depois dos segmentos, em fundo branco: título "Quem já usa a tecnologia SEIVE", duas faixas de logos em carrossel contínuo, cinza com cor no hover. O texto da LUB ("já usam o SEIVE LUB") virou "confiam na SEIVE". Os logos vêm do catálogo SEIVE LUB; o usuário confirmou em 03/11/2026 que são clientes SEIVE e valem para esta LP, o que resolve a pendência de autorização registrada em 29/10. Logos em baixa resolução (≈75×22 px no PDF): trocar pelos originais.
- **Hero:** H1 passou a "Supressão de incêndio SEIVE em sistemas móveis e fixos." (destaque amarelo em "móveis e fixos."), mantendo a palavra-chave da campanha; o parágrafo virou "Embarcado em máquinas pesadas ou instalado em ambientes críticos. A Safe Mine ajuda a dimensionar a solução para a sua aplicação." A nota sob os botões ("Conte qual equipamento…") saiu a pedido. O title da aba e a meta description seguem falando de máquinas pesadas.
- **Banner do hero:** trocado pela arte da família de reservatórios e cilindros SEIVE em galpão (enviada em 03/11/2026, 1870×841), agora `src/assets/heroBg.jpg` (o `heroBg.png` da escavadeira saiu). Reenquadrada para 1981×900: foto a 80%, conjunto centrado em 71% da largura (janela do banner, livre do texto e da coluna do chat), parede e piso estendidos em espelho, com a emenda sob o véu verde.
