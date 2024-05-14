# jroselli

This project was bootstrapped with [`create-r3f-app`](https://github.com/utsuboco/create-r3f-app)

# Homepage project

## TODO

- [x] Creer nextApp
- [x] Ajouter shadcn ui
- [x] Creer homepage
- [x] creer Navbar
- [x] creer component sections
- [x] parametrer nginx
- [ ] script deploiement
- [ ] introduction
- [ ] construire timeline
  - [x] stucture
  - [ ] contenu a terminer
- [ ] creer composant technologies
- [ ] install edgeDB

## Installation PM2 sur le serveur pour automatiser deploiement et serveur startup

- installer pm2

```bash
pnpm i -g pm2
```

-demarrer le serveur depuis le dossier du projet nextjs

```bash
pm2 start npm --name jroselli -- start
```

-ou si on veut specifier le port

```bash
pm2 start npm --name jroselli -- start -- --port <port>
```

- ajouter le script au demarrage de la machine

```bash
pm2 startup
```

- executer la commande retournée par pm2 startup puis

```bash
pm2 save
```
