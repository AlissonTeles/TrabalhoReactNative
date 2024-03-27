export const data = [
  {
    id: 1,
    title: "Tapioca",
    img: require("../../assets/tapioca.jpg"),
    category: "Comidas Típicas",
    acessos: 7000,
    time: "30min",
    data: "Acenda o fogo e coloque a frigideira para esquentar. Para saber se está no ponto, pingue algumas gotinhas de água. Se evaporar, ela está pronta para receber a goma da tapioca. Coloque a goma de tapioca peneirada com o auxílio de uma colher cobrindo todo o fundo da frigideira. Quanto mais fina você deixar a goma, mais crocante e molinha a sua tapioca vai ficar. Em relação ao tamanho e espessura da goma na frigideira, o ideal é cerca de 15 centímetros de diâmetro, mais ou menos 80 gramas. Quanto mais fino o disco, maior o risco de que a goma fique ressecada. Acrescente um pouquinho de sal ou outro tempero que preferir para dar gosto a goma. O ponto para virar é quando a tapioca começa a descolar do fundo da frigideira sem perder o formato de disco. No ponto certo, a tapioca deve estar úmida, sem desmanchar ou quebrar. Vire com o auxílio de uma espátula e recheie com o sabor que preferir.",
  },
  {
    id: 2,
    title: "Rapadura",
    img: require("../../assets/rapadura.jpg"),
    category: "Comidas Típicas",
    acessos: 3000,
    time: "90min",
    data: "Em uma panela grande, adicione o açúcar mascavo e a água. Misture bem para dissolver o açúcar. Leve a panela ao fogo médio-alto e deixe ferver, mexendo ocasionalmente para evitar que o açúcar grude no fundo da panela, até a mistura borbulhar e engrossar.Quando a mistura atingir o ponto de bala dura, despeje a mistura em uma superfície lisa e untada com óleo ou manteiga.Deixe esfriar até que a rapadura fique firme o suficiente para ser cortada em servir em porções individuais.",
  },
  {
    id: 3,
    title: "Brownie",
    img: require("../../assets/brownie.jpg"),
    category: "Doces",
    acessos: 3500,
    time: "35min",
    data: "Em uma tigela coloque os ovos e o açúcar e bata com a ajuda de fouet ou garfo. Em seguida adicione a manteiga e o achocolatado em pó. Misture tudo e depois adicione a farinha de trigo. Mexa a massa até que fique homogênea. Despeje a massa em uma forma untada com achocolatado em pó. Leve para assar em forno pré-aquecido a 180ºC por 35 minutos.",
  },
  {
    id: 4,
    title: "Brigadeiro",
    img: require("../../assets/brigadeiro.jpg"),
    category: "Doces",
    acessos: 6500,
    time: "45min",
    data: "Em uma panela, coloque o Leite MOÇA com o Chocolate em Pó DOIS FRADES e a manteiga. Misture bem e leve ao fogo baixo, mexendo sempre até desprender do fundo da panela (cerca de 10 minutos). Retire do fogo, passe para um prato untado com manteiga e deixe esfriar.Com as mãos untadas, enrole em bolinhas e passe-as no granulado. Sirva em forminhas de papel.",
  },
  {
    id: 5,
    title: "Torta de Frango no Liquidificador",
    img: require("../../assets/tortaDeFrango.jpg"),
    category: "Tortas",
    acessos: 4500,
    time: "60min",
    data: "Em uma travessa, junte o frango, os tomates, o milho e as azeitonas. Acrescente o sal e salsa picada, misture bem e reserve. Em um liquidificador, bata todos os ingredientes líquidos e, em seguida, acrescente o restante dos ingredientes até obter uma massa homogênea. Unte uma assadeira retangular grande. Espalhe metade da massa na forma, adicione o recheio e finalize com o restante de massa. Polvilhe o queijo parmesão e leve ao forno a 180°C, já preaquecido por cerca de 40 minutos ou até dourar. Espere esfriar para cortar em quadradinhos e sirva!",
  },
  {
    id: 6,
    title: "Torta de Limão",
    img: require("../../assets/tortaDeLimao.jpg"),
    category: "Tortas",
    acessos: 2500,
    time: "30m",
    data: "Triture os biscoitos de maisena com um rolo de massa ou no processador. Em seguida, transfira para uma tigela e acrescente 2 colheres de sopa de manteiga. Misture até ficar com textura de areia molhada. Transfira a massa para uma forma redonda. Pressione e cubra o fundo e as laterais da forma. Leve para assar em forno preaquecido a 180 graus Celsius por 10 minutos. Retire do forno e despeje o recheio de limão. Leve para assar por mais 10 minutos. Espere esfriar e leve à geladeira por 4 horas antes de servir. Bata as claras com açúcar, coloque por cima da torta e finalize com raspas de limão.",
  },
];

export const category = [
  {
    title: "Comidas Típicas",
    img: require("../../assets/comidasTipicas.jpg"),
    id: 1,
    data: [
      {
        name: "Tapioca",
        id: 1,
      },
      {
        name: "Rapadura",
        id: 2,
      },
    ],
  },
  {
    title: "Doces",
    img: require("../../assets/doces.jpg"),
    id: 2,
    data: [
      {
        name: "Brownie",
        id: 3,
      },
      {
        name: "Brigadeiro",
        id: 4,
      },
    ],
  },
  {
    title: "Tortas",
    img: require("../../assets/tortas.jpg"),
    id: 3,
    data: [
      {
        name: "Torta de Frango no Liquidificador",
        id: 5,
      },
      {
        name: "Torta de Limão",
        id: 6,
      },
    ],
  },
];
