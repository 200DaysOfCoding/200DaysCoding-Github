FROM debian:bookworm

# Mise à jour et installation des outils nécessaires
RUN apt-get update -yq && \
    apt-get install -yq curl gnupg ca-certificates lsb-release && \
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /usr/share/keyrings/nodesource.gpg && \
    echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_18.x nodistro main" > /etc/apt/sources.list.d/nodesource.list && \
    apt-get update -yq && \
    apt-get install -yq nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Ajout des fichiers
ADD . /app/
WORKDIR /app

# Installation des dépendances Node.js
RUN npm install

EXPOSE 2368
VOLUME /app/logs

CMD ["npm", "run", "start"]

