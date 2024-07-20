clean
echo "building..."
npm run build

echo "adding htacess ifles"
cp /Users/KnollElias/Documents/GitHub/sindesi-webclient/.htaccess /Users/KnollElias/Documents/GitHub/sindesi-webclient/build/.htaccess
cp /Users/KnollElias/Documents/GitHub/sindesi-webclient/.htpasswd /Users/KnollElias/Documents/GitHub/sindesi-webclient/build/.htpasswd

echo "pushing to swissonic..."
echo "you want that:      Buchs000"

scp -r ./build/* knollbackend1ch@knollb.ssh.tb-hosting.com:/data/sites/web/knollbackend1ch/www
scp -r ./build/.htaccess knollbackend1ch@knollb.ssh.tb-hosting.com:/data/sites/web/knollbackend1ch/www
scp -r ./build/.htpasswd knollbackend1ch@knollb.ssh.tb-hosting.com:/data/sites/web/knollbackend1ch/www
