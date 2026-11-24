# Aprenda com José Telmo

Site institucional e portal de materiais educacionais do professor José Telmo, com conteúdos de Marketing, tecnologia, inteligência artificial e educação universitária.

**Acesse:** https://aprendacomjosetelmo.com.br/

## Trilhas universitárias em vídeo

Videoaulas gratuitas, organizadas em sequências de aprendizagem, com aplicações acadêmicas e profissionais.

| Trilha | Aulas | Acesso |
| --- | ---: | --- |
| Branding Digital | 6 | [Assistir](https://aprendacomjosetelmo.com.br/videos/branding-digital.html) |
| Google e Inteligência Artificial como apoio acadêmico | 21 | [Assistir](https://aprendacomjosetelmo.com.br/videos/google-ia-academico.html) |

[Ver todas as trilhas](https://aprendacomjosetelmo.com.br/videos/)

As páginas das trilhas utilizam HTML estático, Tailwind CSS via CDN, JavaScript incorporado e a API IFrame do YouTube. Incluem navegação entre episódios, reprodução sequencial automática (sujeita às políticas do navegador), compartilhamento de aulas, descrições para SEO e progresso armazenado localmente no navegador, sem cadastro ou banco de dados.

## Páginas e materiais

| Endereço | Conteúdo |
| --- | --- |
| [`/`](https://aprendacomjosetelmo.com.br/) | Apresentação profissional, atuação, materiais e canais de contato. |
| [`/guia/`](https://aprendacomjosetelmo.com.br/guia/) | IA para avaliação, engajamento e aprendizagem. |
| [`/nanobanana/`](https://aprendacomjosetelmo.com.br/nanobanana/) | Guia visual de IA generativa. |
| [`/espm/`](https://aprendacomjosetelmo.com.br/espm/) | Matriz BR.ai, energia e sustentabilidade. |
| [`/quiz.html`](https://aprendacomjosetelmo.com.br/quiz.html) | Quiz de e-commerce. |
| [`/github-pages/`](https://aprendacomjosetelmo.com.br/github-pages/) | Tutorial de GitHub Pages anteriormente publicado na página inicial. |
| [`/videos/`](https://aprendacomjosetelmo.com.br/videos/) | Catálogo de trilhas universitárias. |

## Estrutura do repositório

```text
.
├── index.html
├── quiz.html
├── assets/
├── styles/
├── guia/
├── nanobanana/
├── espm/
├── github-pages/
├── videos/
│   ├── index.html
│   ├── branding-digital.html
│   └── google-ia-academico.html
├── package.json
├── tailwind.config.cjs
├── robots.txt
├── sitemap.xml
├── llms.txt
├── CNAME
└── README.md
```

## Teste local

Na raiz do repositório, execute:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Acesse http://localhost:8000/ ou http://localhost:8000/videos/. Para encerrar, pressione `Ctrl+C` no terminal.

Evite abrir as páginas de vídeo diretamente pelo protocolo `file://`: a ausência do cabeçalho de referência pode causar o erro 153 do YouTube. Use o servidor HTTP local ou o endereço HTTPS publicado. É necessária conexão com a internet para carregar os vídeos e recursos externos.

## Manutenção e publicação

A home usa HTML estático, CSS compilado e ícones SVG locais. As fontes são carregadas pelo Google Fonts, com alternativas do sistema.

As três configurações de Google Analytics foram preservadas na home e no tutorial de GitHub Pages: G-032NE3P86V, G-N5BJGK8EZ1 e G-0CC016BBCT. Elas são intencionais e foram usadas em demonstrações anteriores.

Depois de mudar classes da home, executar:

```bash
npm install
npm run build:css
```

Incluir o CSS resultante no commit. O site publicado não precisa de Node. As páginas das trilhas usam Tailwind via CDN e não exigem essa etapa de compilação.

### Adicionar uma trilha

1. Criar um HTML independente em `videos/`, usando uma trilha existente como referência.
2. Atualizar títulos, descrições, IDs dos vídeos, datas, durações, hashtags e dados estruturados.
3. Usar chaves de armazenamento local exclusivas da nova trilha.
4. Adicionar a trilha ao catálogo `videos/index.html` e aos menus das páginas de vídeo.
5. Testar reprodução, navegação, compartilhamento e responsividade no servidor local.
6. Atualizar `sitemap.xml`, preservando as demais URLs públicas, e publicar pelo GitHub Pages.

### SEO e domínio

- Manter `robots.txt` e `sitemap.xml` na raiz do site.
- Incluir novas páginas públicas no sitemap, preservando as anteriores.
- Manter títulos, meta descriptions, URLs canônicas, Open Graph e dados estruturados coerentes com o conteúdo publicado.
- Ao editar o perfil, manter os dados estruturados e o `llms.txt` coerentes.
- Preservar o `CNAME` e os arquivos de verificação do domínio.
- Após alterações relevantes, conferir o sitemap no Google Search Console.

## Autoria

Professor José Telmo. Materiais educacionais voltados à aprendizagem universitária e à aplicação profissional.
