# Dentora

Site institucional da clínica, feito com Next.js (App Router) e TypeScript.

## Rodando

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Estrutura

```
dentora/
├── app/
│   ├── layout.tsx     # fonte, metadata, <html lang="pt-BR">
│   ├── page.tsx       # todas as seções da página
│   └── globals.css    # estilos e paleta (variáveis em :root)
├── public/images/
│   ├── hero.jpg       # foto do hero (close de sorriso)
│   ├── servicos/      # checkup-limpeza.jpg, clareamento.jpg, aparelhos.jpg, implantes.jpg
│   └── dentistas/     # rafael-moura.jpg, andre-lopes.jpg, sarah-khan.jpg, marcos-reis.jpg
├── next.config.mjs
├── package.json
└── tsconfig.json
```

## Personalizando

- **Telefone e e-mail:** constantes no topo de `app/page.tsx` (`PHONE_LABEL`, `PHONE_DIGITS`, `EMAIL`).
- **Redes sociais:** array `socials` em `app/page.tsx` (troque pelos perfis reais).
- **Textos de serviços, dentistas e depoimentos:** arrays no topo de `app/page.tsx`.
- **Fotos:** substitua os arquivos mantendo os nomes (os atuais são apenas marcadores).
  Hero ~1600×900, serviços ~800×500, dentistas ~800×800.
- **Cores:** variáveis em `:root` no `app/globals.css` (`--navy`, `--sky`, `--blue`, `--cream`).
