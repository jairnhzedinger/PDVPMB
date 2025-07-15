# Plataforma de Streaming de Filmes com Amigos

## Descrição
Este projeto consiste em uma plataforma web que permite que você transmita filmes para seus amigos em tempo real, utilizando RTMP e HLS, com um chat integrado e controle de acesso via código de convite.

## Tecnologias Utilizadas
- **Node.js** para o servidor backend.
- **Nginx** para servir como proxy reverso e gerenciar o RTMP.
- **HLS** para entrega do vídeo com baixa latência.
- **WebSockets** para o chat em tempo real.
- **HTML/CSS/JavaScript** para a interface do usuário.

## Funcionalidades Principais
1. **Transmissão de Vídeo:** Configurar o Nginx para receber o stream RTMP e convertê-lo em HLS.
2. **Autenticação:** Página de login que solicita um código de convite e, se correto, pede nome e e-mail.
3. **Player de Vídeo:** Página principal com o player de vídeo usando HLS.
4. **Chat:** Integração de um chat em tempo real para comunicação entre os usuários.

## Estrutura de Arquivos
- **server.js**: Servidor principal em Node.js.
- **public/**: Pasta com os arquivos estáticos (HTML, CSS, JS).
- **chat/**: Módulo para gerenciar o chat em tempo real.
- **nginx.conf**: Configuração do Nginx para RTMP e HLS.

## Passos Iniciais
1. Configurar o ambiente Node.js e instalar as dependências (Express, WebSocket, etc.).
2. Configurar o Nginx para receber o stream RTMP e converter em HLS.
3. Criar as rotas no servidor
