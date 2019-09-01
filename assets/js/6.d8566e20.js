(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{198:function(o,e,a){o.exports=a.p+"assets/img/compilador_pt1.8f8d061d.png"},199:function(o,e,a){o.exports=a.p+"assets/img/compilador_pt2.2d6038f3.png"},230:function(o,e,a){"use strict";a.r(e);var r=a(0),i=Object(r.a)({},function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[r("h1",{attrs:{id:"_4-introducao-ao-compilador-e-vinculador"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-introducao-ao-compilador-e-vinculador","aria-hidden":"true"}},[o._v("#")]),o._v(" 4 - Introdução ao compilador e vinculador")]),o._v(" "),r("p",[o._v("Para compilar um programa em C++, usamos um compilador C++. O compilador percorre cada arquivo de código-fonte (.cpp) em seu programa e executa duas tarefas importantes:")]),o._v(" "),r("p",[o._v("Primeiro, ele verifica seu código para garantir que ele siga as regras da linguagem C++. Se isso não ocorrer, o compilador fornecerá um erro (e o número da linha correspondente) para ajudar a identificar o que precisa ser corrigido. O processo de compilação também será abortado até que o erro seja corrigido.")]),o._v(" "),r("p",[o._v("Segundo, ele converte seu código-fonte em um arquivo de linguagem de máquina chamado arquivo de objeto. Os arquivos de objetos são normalmente chamados de name.o ou name.obj, em que name é o mesmo nome do arquivo .cpp do qual foi produzido.")]),o._v(" "),r("p",[o._v("Por exemplo,se você tem seu "),r("code",[o._v("main.cpp")]),o._v(", ele irá gerar um arquivo objeto "),r("code",[o._v("main.o")])]),o._v(" "),r("p",[r("img",{attrs:{src:a(198),alt:"Compilador_pt1"}})]),o._v(" "),r("h1",{attrs:{id:"vinculador"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vinculador","aria-hidden":"true"}},[o._v("#")]),o._v(" Vinculador")]),o._v(" "),r("ul",[r("li",[r("p",[o._v("Depois que o compilador cria um ou mais arquivos de objeto, outro programa chamado vinculador(linker) entra em ação. O trabalho do linker e dividido em três etapas:")])]),o._v(" "),r("li",[r("p",[o._v("Primeiro, pegue todos os arquivos de objetos gerados pelo compilador e combine-os em um único programa executável.")])])]),o._v(" "),r("p",[r("img",{attrs:{src:a(199),alt:"Compilador_pt2"}})]),o._v(" "),r("ul",[r("li",[r("p",[o._v("Em segundo lugar, além de poder vincular arquivos de objeto, o vinculador também é capaz de vincular arquivos de biblioteca. Um arquivo de biblioteca é uma coleção de código pré-compilado que foi “empacotado” para reutilização em outros programas, como o já usado "),r("code",[o._v("<iostream>")]),o._v(".")])]),o._v(" "),r("li",[r("p",[o._v("Em terceiro lugar, o vinculador garante que todas as dependências entre arquivos sejam resolvidas corretamente. Por exemplo, se você definir algo em um arquivo .cpp e usá-lo em outro arquivo .cpp, o vinculador conectará os dois juntos. Se o vinculador não conseguir conectar uma referência a algo com sua definição, você receberá um erro de vinculador e o processo de vinculação será interrompido.")])])])])},[],!1,null,null,null);e.default=i.exports}}]);