import React, { useState, useEffect } from 'react';
import CampoTexto from '../CampoTexto';
import './Formulario.css';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';


const Formulario = (props) => {

  /** hooks onde é definido o estado do nome, cargo e imagem e set(como alterar) do nome, cargo e imagem */
  const [nome, setNome] = useState('')  /** ao mudar o estado, o react renderiza novamente */
  const [cargo, setCargo] = useState('')  /** ao mudar o estado, o react renderiza novamente */
  const [imagem, setImagem] = useState('')  /** ao mudar o estado, o react renderiza novamente */
  const [time, setTime] = useState('')  /** ao mudar o estado, o react renderiza novamente */

  // Limpar os campos quando confirmarCard é true
  useEffect(() => {
    if (props.confirmarCard) {
      setNome('');
      setCargo('');
      setImagem('');
      setTime('');
    }
  }, [props.confirmarCard]);

  const aoSalvar = (evento) => {
    evento.preventDefault();
    // console.log(nome, cargo, imagem, time);
    props.aoColaboradorCadastrado({ 
      nome, /** indice prop da variavel nome e o valor dela dentro da variavel */
      cargo, 
      imagem, 
      time 
    });
  };

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador(a)</h2>
        <CampoTexto
          obrigatorio={true}
          iconeLabel={<i className="fas fa-user"></i>}
          label="Nome"
          placeholder="Informe o seu nome e sobrenome"
          type="text"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />

        <CampoTexto
          obrigatorio={true}
          iconeLabel={<i className="fas fa-network-wired"></i>}
          label="Cargo"
          placeholder="Informe o seu cargo"
          type="text"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />

        <CampoTexto
          label="Imagem"
          iconeLabel={<i className="fas fa-image"></i>}
          placeholder="Informe o seu endereço da imagem"
          type="text"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />

        <ListaSuspensa
          label="Time"
          iconeLabel={<i className="fas fa-people-group"></i>}
          obrigatorio={true}
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />

        <Tooltip title="Clique para criar o card" position="right" trigger="mouseenter">
          <Botao>
            <i className="fa-solid fa-address-card"></i> Criar Card
          </Botao>
        </Tooltip>
      </form>
    </section>
  );
};
/** exportado a função */
export default Formulario;
