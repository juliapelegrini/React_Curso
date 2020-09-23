import "./index.css";
import ReactDOM from "react-dom";
import React from "react";
import "./App.css";

import Aleatorio from "./componentes_basicos/basico/Aleatorio";
import Primeiro from "./componentes_basicos/basico/Primeiro";
import ComParametro from "./componentes_basicos/basico/ComParametro";
import Card from "./componentes_basicos/layout/Card";
import Familia from "./componentes_basicos/basico/Familia";
import FamiliaMembro from "./componentes_basicos/basico/FamiliaMembro";
import ListaAlunos from "./componentes_basicos/repeticao/ListaAlunos";
import TabelaProdutos from "./componentes_basicos/repeticao/TabelaProdutos";
import ParOuImpar from "./componentes_basicos/condicional/ParOuImpar";
import UsuarioInfo from "./componentes_basicos/condicional/Usuarioinfo";
import DiretaPai from "./componentes_basicos/comunicacao/DiretaPai"
import IndiretaPai from "./componentes_basicos/comunicacao/IndiretaPai"
import Input from './componentes_basicos/formulario/Input'
import Contador from './componentes_basicos/contador/Contador'

const el = document.getElementById("root");
ReactDOM.render(
  <div className="App">
    <h1>Fundamentos do React</h1>
    <div className="Cards">
      <Card titulo="Primeiro componente" color="#E8B71A">
        <Primeiro> </Primeiro>
      </Card>

      <Card titulo="Com parâmetro" color="#E94C6F">
        <ComParametro titulo="vamos la" dois="foi" />
      </Card>

      <Card titulo="Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={10} />
      </Card>

      <Card titulo="Componente com Filhos" color="#00c8f8">
        <Familia sobrenome="Machado" />
        <FamiliaMembro nome="Pedro" />
        <FamiliaMembro nome="Julia" />
        <FamiliaMembro nome="Jonathan" />
      </Card>

      <Card titulo="Repetição" color="#3a9ad9">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="Produtos" color="#ff4c65">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="Renderização condicional" color="#982395">
        <ParOuImpar numero={19}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
      </Card>

      <Card titulo="Comunicação Direta" color="#59323C">
      <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="Comunicação Indireta" color="#8bad39">
      <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="Componente Controlado" color="#e45f56">
      <Input></Input>
      </Card>

      <Card titulo="Contador" color="#424242">
      <Contador numeroInicial={10}></Contador>
      </Card>
    </div>
  </div>,
  el
);
