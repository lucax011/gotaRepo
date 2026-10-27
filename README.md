# Gota Alert

Painel web que mostra em um mapa as áreas de São Paulo afetadas por enchentes. A ideia é cruzar alertas da GCM, sensores e câmeras urbanas, interpretados por IA, e classificar cada ponto por gravidade.

> Protótipo de interface (jun/2025): os pontos no mapa ainda são dados simulados.

## O que tem hoje

- Mapa do Google com marcadores coloridos por tipo de alerta
  - 🔴 alagamento crítico
  - 🟡 trânsito comprometido
  - 🔵 região com risco monitorado
- Janela de detalhes ao clicar em cada ponto (local, horário e fonte)
- Barra lateral com legenda e botão de atualização

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Google Maps JavaScript API (`@googlemaps/js-api-loader`, Advanced Markers)

## Como rodar

Pré-requisitos: Node.js 18+ e uma chave da Google Maps JavaScript API.

```bash
cd gota
npm install
cp .env.example .env.local   # coloque sua chave em NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
npm run dev                  # http://localhost:3000
```

Restrinja a chave no Google Cloud ao seu domínio (referenciadores HTTP) e apenas à Maps JavaScript API.

## Próximos passos

- Trocar os dados simulados por uma API com alertas reais
- Atualização automática dos pontos
