import React from "react";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <div className="fundo">
      <div>
        <h1 className="title">Sobre Mim:</h1>
      </div>
      <div className="resumoContainer">
        <div className="imgContainer">
          <img src={"./img/avatar.jpg"} alt="Avatar" className="fotoPerfil" />
        </div>
        <p className="resumo">
          Formado em Geografia pela UFMG em 2017, sempre tive contato com
          computadores desde pequeno, porém foi realmente durante a pós
          graduação em Geoprocessamento na PUC Minas, em 2019, que tive meu
          primeiro contato com algum tipo de programação. <br /> Durante essa
          pós graduação, tive uma matéria que ensina "querys" básicas de SQL
          aplicadas em Geoprocessamento, dessa forma passei a me interessar cada
          vez mais pela programaçao. Onde em 2021, iniciei o curso de Análise e
          desenvolvimento de Sistemas, na UNA. Durante o primeiro ano de curso,
          foquei em estudar de forma autônoma além dos temas lecionados na
          faculdade, assim tive meus primeiros contatos com React, framework
          utilizado nesse projeto, foram muitos projetos durante o ano, sejam
          eles apenas para treino ou para testes de ingressar em um programa de
          estágio.
          <br />
          Em Dezembro de 2021, recebi a tão sonhada resposta positiva de um
          processo seletivo, desse modo iniciei assim meu primeiro estágio como
          desenvolvedor. Durante um ano trabalhei no Front-end de um cliente,
          utilizando o framework Angular 7 e a linguagem TypeScript. Durante
          esse período também tive contato com algumas tecnologias e metódos os
          quais ainda não conhecia, sendo eles as Metodologias Agéis, por meio
          do SCRUM. E também tive contato com testes unitários, utilizando do
          framework Jest.
          <br />
          Durante esse periodo também, convivi com ótimos profissionais que me
          permitiram crescer tanto como profissional quanto como pessoa, não me
          faltava suporte para crescer no que fosse possivel para meus colegas
          de trabalho. Tenho muito a agradecer aos meus colegas de maior
          senoridade do Front-end, os quais me chamavam para acompanhar
          refinamentos e tarefas mais complexas para que pudesse aprender.
          Também ao QA do time, que me dava todo o suporte e inclusive me
          passava overviews de qual era seu trabalho e me convidada para
          acompanhar algumas vezes.
          <br />
          Agora, o presente, comecei esse projeto após ser desligado de tal
          empresa em que realiza meu estágio durante os layoffs do inicio de
          2023. Após esse desligamento me dei conta que não desenvolvi nada que
          pudesse ser mostrado como prova de capacidade, portanto esse projeto
          além de portfolio servirá como uma caixa de areia, onde treinarei
          criar componentes e lógicas que venham a trazer para mim crescimento
          como programador.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
