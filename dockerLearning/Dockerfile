# importer 
FROM debian:9

# run permet de lancer des commandes dans le conteneur
#run est utilisé une fois lors de la construction de l'image
RUN apt-get update -yq \
&& apt-get install curl gnupg -yq \
&& curl -sL https://deb.nodesource.com/setup_10.x | bash \
&& apt-get install nodejs -yq \
&& apt-get clean -y

#add permet d'ajouter des fichiers dans le conteneur
ADD . /app/

#wordir permet de te deplacer dans un fichier
WORKDIR /app


RUN npm install

#exposee permet d'ecouter le port sur lequel l'application va tourner
EXPOSE 2368
#volume permet de savoir quel dossier partager entre le conteneur et l'hote
VOLUME /app/logs


#cmd permet de lancer une commande pour demarrer le conteneur
CMD npm run start

