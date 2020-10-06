/* Um pouco de teoria
O Git utiliza o Sha1 como criptografia. 

Sha1 é uma função de hash criptográfica projetada pela NSA(Agência Nacional de Segurança). 
A sigla SHA significa "algoritmo de dispersão seguro"

Uma criptografia do tipo SHA1 produz um valor de dispersão de 160 bits (20 bytes) conhecido 
como ”resumo da mensagem”. Um valor de dispersão SHA1 é normalmente tratado como um número 
hexadecimal de 40 dígitos.

O Git é um sistema distribuído seguro, ele possui objetos Internos básicos do Git responsáveis pelo versionamento de código
- BLOBS = É como um objeto que encapsula arquivos e possue metadados para esses arquivos
- TREES = é um intermediário entre o commit e os bloobb árvore de diretórios
- COMMITS = é o obj que aponta para um árvore, para um parente(o ultimo commit realizado anteriormente a ele), e para um autor que faz a alteração junto com uma mensagem
Commit -> tree -> blob1, blob2, blob3 
*/

/* Comandos básicos para sobreviver no prompt de comando do Windows
cd..
Volta para a pasta anterior

cd NomeDoDiretorio
entra no NomeDoDiretorio

cls
limpa a tela do prompt

mkdir NomeDoDiretorio
cria um diretório dentro do diretório atual
*/

/* Um pouco de prática
Comandos git para linha de comando

git clone https://github.com/Re-nan/HelloGit.git
clona um repositório existente. Quando clonamos um repositório existente, estamos fazendo
uma cópia do repositório em sua branch master



git init
Transforma um diretório em um repositório git, para que o Git possa gerenciar esse diretório.
Ele irá criar uma pasta oculta com o nome ".git", use o comando "ls -a" caso queira listar
também o que tiver oculto nesde diretório. Se você entrar dentro da pasta ".git" verá que 
dentro contém outros diretórios "hooks", "info", "objects", "refs".

git remote add origin https://github.com/Re-nan/HelloGit.git
Aponta o seu repositório local com o repositório do servidor

pit push origin master
Envia seu repositório local para o repositório do servidor

git remote -v
Mostra para quais servidores remoto o seu servidor local está apontando

git add . ou git add *
Envia todos os arquivos para o index

git add NomeDoArquivo.extensao
Envia o arquivo especifico para o index

git restore --staged NomeDoArquivo.extensao
Retira o arquivo do index

git commit -m "Comitando arquivos"
Commita os arquivos do index.

git push
Envia os arquivos comitados para o meu respositório master

git status
Mostra o status dos arquivos naquele diretório, se foram adc ao index, comitados e etc..

Untracked = são os arquivos que o Git não conhece ainda para ele gerenciar
Unmodified = quando você tem um arquivo gerenciado pelo Git que não teve alteração
Modified = quando você faz alguma alteraçao em um arquivo gerenciado pelo Git 
Staged = quando você add os arquivos ao index. Ao comitar o arquivo ele volta para o status unmodified
*/

/* Entendendo o porque o Git é um sistema distribuído
Ao rodar o "git init", você está criando um repositório local, e ele por sua vez pode ser
empurado para um repesitório remoto, que seria o github, bitbucket ou gitlab

Ao clonar um projeto do servidor Github, Bitbucket ou Gitlab o git faz uma cópia do 
projeto do servidor para sua máquina, criando assim um servidor local, é um clone do
servidor remoto para o servidor local 

Ao realizar suas alterações e comitar elas, é necessário executar o comando

git push origin master
Envia suas alterações do seu servidor local para o servidor remoto do Github

Se algum arquivo já foi alterado por alguém será necessário atualizar seu repositório local
com a versão mais atualizada do repositório remoto(o do servidor que está no github), o git
irá pedir para você faze rum git pull e depois um git push

git pull origin master
Baixa as alterações do repositório do servidor para o seu repositório local

O git pode tanto atualizar seu servidor com o do github como encontrar algum conflito
E aí será preciso decidir qual arquivo ele deve manter no servidor, resolvendo os conflitos
você deve fazer um commit e um push novamente


*/

/* Comandos de configuração do repositório

git config --list
Trás a lista de configurações no seu git como nome de usuário e email

git config user.email "renan@email.com"
Define um email para aquele repositório local em específico

git config user.nickname "Re-nan"
Define um nome de usuário para aquele repositório local em específico

git config --global user.email "renan@email.com" 
git config --global user.nickname "Re-nan"
Define as mesmas informações acima, só que de forma global, ou seja para todo
*/
