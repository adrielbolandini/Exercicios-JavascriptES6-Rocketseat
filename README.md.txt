Exercícios do curso JS ES6 da Rocketseat 

Lembre-se de instalar o plugin 'classproperties' no babel para o módulo 1.
Instalando o classproperties no babel:
no Prompt digite e aguarde a intalação:
yarn add @babel/plugin-proposal-class-properties

Modifique o arquivo babel.rc para:
{
    "presets": ["@babel/preset-env"],
    "plugins":["@babel/plugin-proposal-object-rest-spread", "@babel/plugin-proposal-class-properties"]
}