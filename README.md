# Evolumix — landing page

Site institucional da Evolumix Distribuição e Suprimentos (Goiânia e Rio Verde).
Feito com [Astro](https://astro.build) + Tailwind CSS. Página estática, sem backend.

## Rodar no computador

```bash
npm install
npm run dev       # abre em http://localhost:4321
npm run build     # gera o site final em dist/
npm run preview   # serve o dist/ para conferir
```

## Publicar na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Na Vercel: **Add New → Project**, escolha o repositório. O preset "Astro" é detectado sozinho.
3. Em **Settings → Environment Variables**, crie `SITE_URL` com o domínio final
   (ex.: `https://www.evolumix.com.br`). Ele é usado no canonical, no sitemap, no robots.txt e no Open Graph.
   Sem a variável, o site usa `https://evolumix.vercel.app`.

## Onde editar

| O quê | Arquivo |
|---|---|
| Telefones, vendedores, endereços, horários, redes, marcas, textos dos produtos | `src/data/site.ts` |
| Mensagem que abre no WhatsApp | `WA_MESSAGE` em `src/data/site.ts` |
| Título e descrição do Google | `src/pages/index.astro` |
| Cores e fonte | bloco `@theme` em `src/styles/global.css` |
| Cada seção da página | `src/components/*.astro` |

## Fotos pendentes (hoje são placeholders listrados)

| Local | Sugestão | Formato |
|---|---|---|
| Hero (`Hero.astro`) | Estoque ou equipe, foto real, sem texto por cima | Paisagem, mín. 2400×1050 |
| Sobre (`About.astro`) | Equipe reunida | Paisagem 3:2, mín. 1600×1066 |
| Cards de produtos (`site.ts` → `photo`) | Uma foto por linha de produto | 16:10, mín. 1200×750 |

Para trocar: coloque os arquivos em `src/assets/fotos/` e substitua o bloco `.ph` pelo componente
`<Image>` do Astro (`import { Image } from 'astro:assets'`), que gera versões otimizadas (WebP/AVIF).

## Logo

`public/evolumix-logo-*.svg` é uma **reconstrução vetorial provisória** do logo original.
Se a empresa tiver o arquivo original (AI/PDF/SVG), substitua estes arquivos.
