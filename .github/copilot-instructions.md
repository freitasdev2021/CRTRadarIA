# CRTRadarIA - Instruções para Agentes IA

## Visão Geral do Projeto

**CRTRadarIA** é um portal web interativo de seleção de ferramentas de IA estratégicas para técnicos industriais do CRT-ES (Centro de Referência Tecnológica). O projeto categoriza softwares de IA em 13 áreas profissionais (Civil, Elétrica, Mecânica, etc.), permitindo buscas e filtragens.

### Arquitetura Principal

- **[index.html](index.html)**: HTML semântico que define layout (topbar, hero, grid de áreas, barra de busca, cartões de resultados)
- **[areas.js](areas.js)**: Armazena dados estruturados (3000+ linhas) com objeto `areas` contendo arrays de softwares por categoria
- **[style.css](style.css)**: Estilos gerais (tipografia, layout flexbox/grid responsivo, cores corpo)
- **[areas.css](areas.css)**: Estilos do grid de cards e tags de metadados

### Estrutura de Dados

Cada software é um objeto com propriedades:
```javascript
{
  "software": "Nome do Software",
  "descricao": "Descrição clara",
  "pagamento": "Pago|Gratuito|Recursos Pagos",
  "nivel": "Iniciante|Intermediário|Avançado",
  "link": "URL do software"
}
```

Exemplo categoria: `areas["Civil"]` contém array de ~30 softwares (Revit, AutoCAD, Civil 3D, etc).

## Fluxos de Interação

### 1. Clique em Área
JavaScript em inline script (linhas 81-105 do index.html):
- Captura `data-area` do elemento `.area-item`
- Busca em `areas[area]` no objeto global
- Renderiza cards dinamicamente com template literal
- Exibe tags (área, pagamento, nível)

### 2. Busca por Nome
Keyboard event em `.search-filter input`:
- Busca **exata** e **case-insensitive**: `toLowerCase()` em ambos strings
- Flattena todas áreas: `Object.values(areas).flat()`
- Filtra por nome: `item.software.toLowerCase() === busca`
- Recria cards sem tag de área

## Padrões e Convenções

- **Nomes de Áreas**: Português (maiúsculas iniciais), match exato em `data-area` vs objeto chave
- **Renderização**: Template literals com `$.append()` (jQuery 3.7.1)
- **IDs/Classes CSS**: kebab-case (`.area-item`, `.card-header`)
- **Responsividade**: Media query @768px para grid 3 colunas em mobile
- **Acessibilidade**: HTML semântico, atributos `alt` em imagens, labels implícitas em inputs

## Enhancements Conhecidos (Não Implementados)

- Filtros de dificuldade e orçamento (HTML comentado linhas 63-72)
- Função "favoritar" (♡ coração) implementada apenas visual
- Integração com backend (dados hardcoded em .js)

## Procedimentos de Desenvolvimento

- **Adicionar Software**: Editar [areas.js](areas.js), inserir objeto no array da categoria
- **Adicionar Área**: 
  1. Criar novo `<div class="area-item" data-area="NomeArea">` em HTML
  2. Adicionar chave em `areas` object no JS
  3. Adicionar ícone em `icones/` (padrão PNG)
- **Estilo**: Manter cor primária #ff6b5f (hero) e estilos card em [areas.css](areas.css)
- **Testes**: Verificar match de nomes (data-area vs areas object keys)

## Dependências Externas

- jQuery 3.7.1 (CDN)
- Imagens PNG em `icones/` pasta

## Convenções de Repositório

- Commits descritivos (pt-br): "feat: adiciona softwares IA para Arquitetura"
- Branch naming: kebab-case (feature/nome-descritivo)
