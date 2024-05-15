## TODO voir pour gerer ca avec un script js dans le package.json

echo "Pulling last version"

git pull

echo "Installing new dependencies"

pnpm i

echo "Building..."

pnpm build

echo "Deploying..."

pm2 restart jroselli

