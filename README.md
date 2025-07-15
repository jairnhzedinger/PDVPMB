# Plataforma de Streaming de Filmes com Amigos

## Descrição
Este projeto permite transmitir filmes em tempo real para seus amigos utilizando RTMP e HLS. Possui chat integrado e controle de acesso via código de convite.

## Tecnologias Utilizadas
- **Node.js** para o servidor backend.
- **Nginx** com módulo **RTMP** para receber o stream e gerar HLS.
- **HLS** para entrega do vídeo com baixa latência.
- **WebSockets** para o chat em tempo real.
- **HTML/CSS/JavaScript** para a interface do usuário.

## Funcionalidades Principais
1. **Transmissão de Vídeo**: O Nginx recebe o stream RTMP e disponibiliza em HLS.
2. **Autenticação**: Página de login solicita o código de convite, nome e e‑mail.
3. **Player de Vídeo**: Página principal com player HLS.
4. **Chat**: Mensagens em tempo real entre os participantes.

## Estrutura de Arquivos
- `server.js`: Servidor principal em Node.js.
- `public/`: Arquivos estáticos (HTML, CSS e JS).
- `chat/`: Módulo para o chat em tempo real.
- `nginx.conf`: Exemplo de configuração do Nginx/RTMP.

## Como Usar
1. Instale as dependências com `npm install`.
2. Defina a variável `INVITE_CODE` (opcional) e execute `node server.js`.
3. Inicie o Nginx usando o `nginx.conf` presente no projeto.
4. Transmita para `rtmp://<servidor>:1935/live/stream` através do OBS.
5. Acesse `http://<servidor>:3000/login.html` e informe o código de convite.

Este repositório serve como ponto de partida para estudos de streaming e chat em tempo real.
