git clone https://github.com/akumarujon/botland $1

cd $1
rm -rf README.md
echo "# $1" > README.md

git remote remove origin
echo
echo
echo
echo "Everything is ready to work."
