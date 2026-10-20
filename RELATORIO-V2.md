# Empório Natural — Relatório da V2

## Status

A V2 foi implementada no projeto Astro existente, compilada com sucesso e revisada visualmente em desktop e mobile. As alterações estão apenas no workspace local. Não houve push para o GitHub, deploy, alteração de DNS ou nova publicação.

## O que mudou

- Reposicionamento da página como **loja multimarcas de suplementos e produtos naturais**.
- Os quatro itens passaram a ser tratados como **destaques**, não como catálogo completo.
- Nova seção de categorias e variedade para deixar explícito que existem outros produtos e marcas.
- WhatsApp como caminho principal de compra, com mensagens contextuais por produto, entrega e atendimento geral.
- Instagram oficial como canal de referência, novidades e relacionamento.
- Copy de entrega revisada para evitar promessas absolutas de prazo, frete ou disponibilidade.
- Remoção de alegações médicas, promessas de resultado e depoimentos não comprovados da versão anterior.
- Remoção do uso de “Essencial Prime” como marca principal da comunicação pública.
- Nova seção “Como comprar” em quatro etapas.
- Nova seção de entrega com Espírito Santo como foco de atendimento e outras regiões sob consulta.
- FAQ factual com JSON-LD correspondente.
- CTA final de conversão no rodapé.

## Imagens aplicadas

As imagens fornecidas foram copiadas para `public/images/products/`, convertidas para WebP e usadas nos locais abaixo:

- `omega-3.webp`: imagem principal do hero e card de Ômega 3.
- `curcuma.webp`: miniatura do hero e card de Cúrcuma.
- `magnesio.webp`: miniatura do hero e card de Magnésio.
- `colageno.webp`: card de Colágeno.

Os JPEGs não utilizados foram removidos do bundle público para reduzir o peso da página. Os arquivos originais continuam preservados no diretório de upload do ambiente.

## Design system aplicado

- Paleta natural premium em verde-esmeralda, fundo quase branco, azul-marinho e âmbar para CTA.
- Tipografia Rubik para títulos e Nunito Sans para corpo.
- Tokens CSS centralizados em `src/styles/global.css`.
- Cards com borda suave, profundidade moderada e hover discreto.
- Grid editorial no hero com produto real, CTAs contrastantes e microcopy de redução de risco.
- Área mínima de toque de aproximadamente 44 px nos principais controles.
- Foco visível para teclado e suporte a `prefers-reduced-motion`.
- Layout mobile-first sem rolagem horizontal planejada.

## SEO, Schema e rastreamento

- `title`, `description`, canonical e Open Graph no HTML inicial.
- Twitter Card configurado.
- JSON-LD com `OnlineStore`, `WebSite`, `WebPage` e `FAQPage`.
- `public/robots.txt` com acesso para Googlebot, Googlebot-Image, Storebot-Google, OAI-SearchBot e Google-Extended.
- `GPTBot` bloqueado por padrão para treinamento, sem bloquear a busca do ChatGPT via OAI-SearchBot.
- `public/sitemap.xml` com a homepage pública.
- `public/llms.txt` factual e opcional.
- `public/_headers` com cabeçalhos de segurança e CSP compatível com as fontes externas utilizadas.
- Canonical provisório definido como `https://emporio-natural-lp.pages.dev/`, que é a URL pública que respondeu durante a auditoria. O domínio `emporionaturales.com.br` não resolveu no momento da verificação e não foi usado como canonical.

## Validações executadas

- `npm run build`: aprovado.
- HTML inicial sem depender de JavaScript: aprovado.
- H1, metadescrição, robots, canonical, WhatsApp, Instagram e JSON-LD: presentes.
- JSON-LD: parse válido com quatro entidades no grafo.
- Sitemap XML: parse válido.
- Imagens WebP no `dist`: quatro arquivos presentes.
- Ausência de copy antiga com alegações como “anti-inflamatório”, “livre-se das dores”, “100% Produtos Naturais”, depoimentos e “Essencial Prime” na página gerada.
- Capturas visuais realizadas em 1440 px, 390 px e visão vertical ampla.

## Pendências antes de publicar

1. Confirmar se o domínio próprio `emporionaturales.com.br` será usado; se sim, atualizar `canonicalUrl`, `site`, sitemap, robots e `llms.txt`.
2. Confirmar que telefone, e-mail, CNPJ e endereço continuam autorizados para publicação.
3. Confirmar marcas, apresentações, composição, estoque e preços reais antes de detalhar os cards.
4. Substituir ou complementar imagens ilustrativas por fotografias oficiais quando disponíveis.
5. Validar as regras logísticas reais: cidades, prazos, modalidades, pedido mínimo e condições de frete.
6. Conectar Google Search Console somente depois de um deploy autorizado.
7. Instalar Analytics, Tag Manager, Meta Pixel ou outro rastreador apenas com autorização e IDs confirmados.

## Arquivos principais

- `src/pages/index.astro`
- `src/components/Hero.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`
- `src/data/business.ts`
- `src/data/catalog.ts`
- `public/images/products/*.webp`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/llms.txt`
- `public/_headers`

## Revisão de copy solicitada — V2.1

Após a primeira revisão visual, a copy foi ajustada para recuperar a essência da V1 sem voltar às promessas médicas ou aos depoimentos não comprovados. O hero voltou a falar sobre cuidado depois dos 35, cansaço, disposição e diferentes necessidades da rotina. Foi criada a seção “Você tem sentido que o ritmo da sua rotina mudou?”, com temas de cansaço, músculos, descanso, mobilidade, articulações, alimentação, foco, pele e aporte proteico.

Os cards agora explicam por que cada destaque costuma ser procurado: Cúrcuma para mobilidade e rotina articular; Magnésio para energia, músculos e descanso; Ômega 3 para alimentação e autocuidado; e Colágeno para pele, unhas e aporte proteico. A redação informa que composição, dose, marca, apresentação e disponibilidade devem ser conferidas no rótulo e com a equipe.

## Atualização aplicada — V2.1.1

- Adicionada uma seção de combinações comerciais para consulta de mais de um produto no mesmo pedido.
- Removida linguagem de tratamento, sinergia clínica ou resultado implícito das combinações.
- Adicionadas áreas de atendimento consultivo para Vitória, Vila Velha, Serra, Cariacica, Linhares, Guarapari e outras cidades do Espírito Santo.
- Mantidos os links contextuais de WhatsApp e acrescentado um gerador específico para combinações.
- Configurada imagem real de produto para Open Graph e Twitter Card.
- Mantidos dados legais, e-mail, Instagram, FAQ factual e ausência de depoimentos fictícios.

## Atualização aplicada — V2.2 mobile e conversão

- Hero reescrito para uma promessa operacional mais clara: consulta de marcas, preço e entrega.
- CTA principal alterado para “Consultar opções no WhatsApp”; Instagram passou a ser ação secundária.
- Mensagem geral do WhatsApp passou a solicitar produto/categoria e cidade/CEP para qualificar a conversa.
- No mobile, a vitrine de produtos e as combinações aparecem antes das seções editoriais de necessidades e categorias.
- Cards e espaçamentos foram compactados no mobile sem remover a vitrine ou os dados essenciais.
- Adicionada barra fixa inferior de WhatsApp no mobile, respeitando safe area e sem aparecer no desktop.
- Menu mobile passou a priorizar “Falar com a equipe” antes do Instagram.

## Atualização aplicada — V2.3 configuração híbrida mobile

- Os quatro produtos principais permanecem empilhados verticalmente no mobile, preservando descoberta, comparação e CTAs individuais.
- Combinações, necessidades, categorias, condições de entrega e etapas de compra passaram a usar carrosséis somente no mobile.
- Cada carrossel possui swipe nativo, snap horizontal, contador “1 de N”, controles anterior/próximo e alvos de toque de 44 px.
- Os controles ficam ocultos no desktop, que continua em grid.
- QA mobile em 390 × 844 px: 12.292 px de altura, quatro CTAs de produto acessíveis e zero overflow horizontal.
- QA desktop em 1.440 px: controles ocultos e grid original preservado.
A V2 foi implementada no projeto Astro existente, compilada com sucesso, revisada visualmente em desktop e mobile e publicada no Cloudflare Pages. A configuração híbrida mobile foi aplicada no commit de release correspondente, mantendo os quatro produtos principais empilhados e usando carrosséis apenas nas seções secundárias.
