clean
echo "building..."
npm run build

echo "adding htacess ifles"
cp /Users/eliasknoll/Documents/GitHub/youtube23/client/.htaccess /Users/eliasknoll/Documents/GitHub/youtube23/client/dist/.htaccess
cp /Users/eliasknoll/Documents/GitHub/youtube23/client/.htpasswd /Users/eliasknoll/Documents/GitHub/youtube23/client/dist/.htpasswd

echo "pushing to swissonic..."
echo "you want that:      ILove78asd!957352457"

scp -r ./dist/* sindesi-testch@sindes.ssh.tb-hosting.com:/data/sites/web/sindesi-testch/www
scp -r ./dist/.htaccess sindesi-testch@sindes.ssh.tb-hosting.com:/data/sites/web/sindesi-testch/www
scp -r ./dist/.htpasswd sindesi-testch@sindes.ssh.tb-hosting.com:/data/sites/web/sindesi-testch/www
