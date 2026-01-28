export function inicio() {
  const screenDiv = document.getElementById("mainScreen");
  const main = document.createElement("main");
  main.id = "menu";
  screenDiv.appendChild(main);

  const background = document.createElement("section");
  background.id = "inicio";
  background.className = "relative min-h-screen flex items-center";
  main.appendChild(background);

  const bgWrap = document.createElement("div");
  bgWrap.className = "absolute inset-0 overflow-hidden";
  background.appendChild(bgWrap);

  const backgroundColor = document.createElement("div");
  backgroundColor.className = "absolute inset-0 gradient-orange opacity-95";
  bgWrap.appendChild(backgroundColor);

  const detail = document.createElement("div");
  detail.className =
    "absolute top-20 right-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl";
  bgWrap.appendChild(detail);

  const detail2 = document.createElement("div");
  detail2.className =
    "absolute bottom-20 left-0 w-72 h-72 bg-primary-foreground/5 rounded-full blur-2xl";
  bgWrap.appendChild(detail2);

  const container = document.createElement("div");
  container.className = "container mx-auto px-4 pt-24 pb-16 relative z-10";
  background.appendChild(container);

  const grade = document.createElement("div");
  grade.className = "grid lg:grid-cols-2 gap-12 items-center";
  container.appendChild(grade);

  const gradeLeft = document.createElement("div");
  gradeLeft.className =
    "text-primary-foreground w-full min-w-0 space-y-8 animate-fade-in-up break-all";
  grade.appendChild(gradeLeft);

  const floatWindow = document.createElement("div");
  floatWindow.className =
    "inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 rounded-full text-sm font-medium backdrop-blur-sm";
  gradeLeft.appendChild(floatWindow);

  const window = document.createElement("span");
  window.className = "w-2 h-2 bg-primary-foreground rounded-full animate-pulse";
  floatWindow.appendChild(window);

  const windowText = document.createElement("div");
  windowText.textContent = "Banco Digital Fintech";
  floatWindow.appendChild(windowText);

  const texto = document.createElement("h1");
  texto.className =
    "text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-balance";
  texto.textContent = "Soluções de pagamento que";
  gradeLeft.appendChild(texto);

  const texto2 = document.createElement("span");
  texto2.className = "block mt-2";
  texto2.textContent = "impulsionam seu negócio";
  texto.appendChild(texto2);

  const subTitle = document.createElement("p");
  subTitle.className = "text-lg md:text-xl text-primary-foreground/90 max-w-xl";
  subTitle.textContent =
    "Aceite cartões, Split de Pagamentos, Vendas com BitCoin, Pix e QR Code com as menores taxas do mercado. Receba na hora e conte com suporte humanizado 24 horas.";
  gradeLeft.appendChild(subTitle);

  const checkItens = document.createElement("div");
  checkItens.className = "flex flex-wrap gap-4";
  gradeLeft.appendChild(checkItens);

  const check1 = document.createElement("div");
  check1.className = "flex items-center gap-2 text-primary-foreground/90";
  checkItens.appendChild(check1);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("class", "lucide lucide-circle-check w-5 h-5");

  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  circle.setAttribute("cx", "12");
  circle.setAttribute("cy", "12");
  circle.setAttribute("r", "10");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "m9 12 2 2 4-4");

  svg.appendChild(circle);
  svg.appendChild(path);
  check1.appendChild(svg);

  const check1Title = document.createElement("span");
  check1Title.className = "font-medium";
  check1Title.textContent = "Recebimento imediato";
  check1.appendChild(check1Title);

  const check2 = document.createElement("div");
  check2.className = "flex items-center gap-2 text-primary-foreground/90";
  checkItens.appendChild(check2);

  const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg2.setAttribute("width", "24");
  svg2.setAttribute("height", "24");
  svg2.setAttribute("viewBox", "0 0 24 24");
  svg2.setAttribute("fill", "none");
  svg2.setAttribute("stroke", "currentColor");
  svg2.setAttribute("stroke-width", "2");
  svg2.setAttribute("stroke-linecap", "round");
  svg2.setAttribute("stroke-linejoin", "round");
  svg2.setAttribute("class", "lucide lucide-circle-check w-5 h-5");

  const circle2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  circle2.setAttribute("cx", "12");
  circle2.setAttribute("cy", "12");
  circle2.setAttribute("r", "10");

  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("d", "m9 12 2 2 4-4");

  svg2.appendChild(circle2);
  svg2.appendChild(path2);
  check2.appendChild(svg2);

  const check2Title = document.createElement("span");
  check2Title.className = "font-medium";
  check2Title.textContent = "Todas as bandeiras";
  check2.appendChild(check2Title);

  const check3 = document.createElement("div");
  check3.className = "flex items-center gap-2 text-primary-foreground/90";
  checkItens.appendChild(check3);

  const svg3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg3.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg3.setAttribute("width", "24");
  svg3.setAttribute("height", "24");
  svg3.setAttribute("viewBox", "0 0 24 24");
  svg3.setAttribute("fill", "none");
  svg3.setAttribute("stroke", "currentColor");
  svg3.setAttribute("stroke-width", "2");
  svg3.setAttribute("stroke-linecap", "round");
  svg3.setAttribute("stroke-linejoin", "round");
  svg3.setAttribute("class", "lucide lucide-circle-check w-5 h-5");

  const circle3 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  circle3.setAttribute("cx", "12");
  circle3.setAttribute("cy", "12");
  circle3.setAttribute("r", "10");

  const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute("d", "m9 12 2 2 4-4");

  svg3.appendChild(circle3);
  svg3.appendChild(path3);
  check3.appendChild(svg3);

  const check3Title = document.createElement("span");
  check3Title.className = "font-medium";
  check3Title.textContent = "Suporte humanizado 24h";
  check3.appendChild(check3Title);

  const bottomButtons = document.createElement("div");
  bottomButtons.className = "flex flex-wrap gap-4 pt-4";
  gradeLeft.appendChild(bottomButtons);

  const button1 = document.createElement("button");
  button1.className =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold py-4 h-14 rounded-xl px-10 text-lg group";
  button1.textContent = "Peça sua Maquininha";
  button1.addEventListener("click", () => {
    document
      .getElementById("maquininha")
      ?.scrollIntoView({ behavior: "smooth" });
  });
  bottomButtons.appendChild(button1);

  const svgSeta = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgSeta.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgSeta.setAttribute("width", "24");
  svgSeta.setAttribute("height", "24");
  svgSeta.setAttribute("viewBox", "0 0 24 24");
  svgSeta.setAttribute("fill", "none");
  svgSeta.setAttribute("stroke", "currentColor");
  svgSeta.setAttribute("stroke-width", "2");
  svgSeta.setAttribute("stroke-linecap", "round");
  svgSeta.setAttribute("stroke-linejoin", "round");
  svgSeta.setAttribute(
    "class",
    "lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform",
  );

  const pathSeta1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  pathSeta1.setAttribute("d", "M5 12h14");

  const pathSeta2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  pathSeta2.setAttribute("d", "m12 5 7 7-7 7");

  svgSeta.appendChild(pathSeta1);
  svgSeta.appendChild(pathSeta2);
  button1.appendChild(svgSeta);

  const button2 = document.createElement("button");
  button2.className =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-14 rounded-xl px-10 text-lg text-primary-foreground hover:bg-primary-foreground/10";
  button2.addEventListener("click", () => {
    document.getElementById("visita")?.scrollIntoView({ behavior: "smooth" });
  });
  bottomButtons.appendChild(button2);

  const svgPlay = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgPlay.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgPlay.setAttribute("width", "24");
  svgPlay.setAttribute("height", "24");
  svgPlay.setAttribute("viewBox", "0 0 24 24");
  svgPlay.setAttribute("fill", "none");
  svgPlay.setAttribute("stroke", "currentColor");
  svgPlay.setAttribute("stroke-width", "2");
  svgPlay.setAttribute("stroke-linecap", "round");
  svgPlay.setAttribute("stroke-linejoin", "round");
  svgPlay.setAttribute("class", "lucide lucide-play w-5 h-5");

  const polygon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon",
  );
  polygon.setAttribute("points", "6 3 20 12 6 21 6 3");

  svgPlay.appendChild(polygon);
  button2.appendChild(svgPlay);

  const agendarVisita = document.createElement("div");
  agendarVisita.textContent = "Agendar Visita";
  button2.appendChild(agendarVisita);

  const linha = document.createElement("div");
  linha.className =
    "flex items-center gap-4 pt-8 border-t border-primary-foreground/20";
  gradeLeft.appendChild(linha);

  const bottomInfo = document.createElement("div");
  bottomInfo.className = "min-w-0";
  linha.appendChild(bottomInfo);

  const bottomInfoTitle = document.createElement("div");
  bottomInfoTitle.className = "text-3xl font-bold";
  bottomInfoTitle.textContent = "+50mil";
  bottomInfo.appendChild(bottomInfoTitle);

  const bottomInfoSubTitle = document.createElement("div");
  bottomInfoSubTitle.className = "text-sm text-primary-foreground/80";
  bottomInfoSubTitle.textContent = "Clientes ativos";
  bottomInfo.appendChild(bottomInfoSubTitle);

  const bottomInfo2 = document.createElement("div");
  bottomInfo2.className = "min-w-0";
  linha.appendChild(bottomInfo2);

  const bottomInfoTitle2 = document.createElement("div");
  bottomInfoTitle2.className = "text-3xl font-bold";
  bottomInfoTitle2.textContent = "R$ 2bi+";
  bottomInfo2.appendChild(bottomInfoTitle2);

  const bottomInfoSubTitle2 = document.createElement("div");
  bottomInfoSubTitle2.className = "text-sm text-primary-foreground/80";
  bottomInfoSubTitle2.textContent = "Transacionados/mês";
  bottomInfo2.appendChild(bottomInfoSubTitle2);

  const bottomInfo3 = document.createElement("div");
  bottomInfo3.className = "min-w-0";
  linha.appendChild(bottomInfo3);

  const bottomInfoTitle3 = document.createElement("div");
  bottomInfoTitle3.className = "text-3xl font-bold";
  bottomInfoTitle3.textContent = "99,9%";
  bottomInfo3.appendChild(bottomInfoTitle3);

  const bottomInfoSubTitle3 = document.createElement("div");
  bottomInfoSubTitle3.className = "text-sm text-primary-foreground/80";
  bottomInfoSubTitle3.textContent = "Uptime garantido";
  bottomInfo3.appendChild(bottomInfoSubTitle3);

  const gradeRight = document.createElement("div");
  gradeRight.className =
    "relative flex justify-center lg:justify-end animate-fade-in-up animation-delay-1000";
  grade.appendChild(gradeRight);

  const rightGridContainer = document.createElement("div");
  rightGridContainer.className = "relative";
  gradeRight.appendChild(rightGridContainer);

  const imagem = document.createElement("img");
  imagem.src = "./img/maquina.png";
  imagem.alt = "Maquininha ShopeBank";
  imagem.className = "w-full object-contain animate-float";
  rightGridContainer.appendChild(imagem);

  const bottomDetail = document.createElement("div");
  bottomDetail.className = "absolute bottom-0 left-0 right-0";
  background.appendChild(bottomDetail);

  const svgDetail = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  svgDetail.setAttribute("viewBox", "0 0 1440 120");
  svgDetail.setAttribute("class", "w-full h-auto");

  const pathDetail = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  pathDetail.setAttribute("fill", "hsl(var(--background))");
  pathDetail.setAttribute(
    "d",
    "M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z",
  );

  svgDetail.appendChild(pathDetail);
  bottomDetail.appendChild(svgDetail);
}

export function vantagens() {
  const screenDiv = document.getElementById("menu");
  const background = document.createElement("section");
  background.id = "vantagens";
  background.className = "py-20 lg:py-32 bg-background";
  screenDiv.appendChild(background);

  const container = document.createElement("div");
  container.className = "container mx-auto px-4";
  background.appendChild(container);

  const content = document.createElement("div");
  content.className = "text-center max-w-3xl mx-auto mb-16";
  container.appendChild(content);

  const divTitle = document.createElement("div");
  divTitle.className =
    "inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6";
  divTitle.textContent = "Porque escolher a ShopeBank";
  content.appendChild(divTitle);

  const title = document.createElement("h2");
  title.className =
    "text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6";
  title.textContent = "Vantagens que fazem a";
  content.appendChild(title);

  const title2 = document.createElement("span");
  title2.className = "text-gradient-orange";
  title2.textContent = " diferença";
  title.appendChild(title2);

  const subTitle = document.createElement("p");
  subTitle.className = "text-lg text-muted-foreground";
  subTitle.textContent =
    "Soluções completas de pagamento pensadas para varejistas e merchants que buscam agilidade, segurança e suporte de qualidade.";
  content.appendChild(subTitle);

  const grade = document.createElement("div");
  grade.className = "grid md:grid-cols-2 lg:grid-cols-3 gap-8";
  container.appendChild(grade);

  const grid1 = document.createElement("div");
  grid1.className =
    "group p-8 bg-card rounded-2xl shadow-card hover-lift border border-border/50";
  grid1.style.animationDelay = "0ms";
  grade.appendChild(grid1);

  const grid1Icon = document.createElement("div");
  grid1Icon.className =
    "w-14 h-14 rounded-xl gradient-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300";
  grid1.appendChild(grid1Icon);

  const svgZap = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgZap.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgZap.setAttribute("width", "24");
  svgZap.setAttribute("height", "24");
  svgZap.setAttribute("viewBox", "0 0 24 24");
  svgZap.setAttribute("fill", "none");
  svgZap.setAttribute("stroke", "currentColor");
  svgZap.setAttribute("stroke-width", "2");
  svgZap.setAttribute("stroke-linecap", "round");
  svgZap.setAttribute("stroke-linejoin", "round");
  svgZap.setAttribute(
    "class",
    "lucide lucide-zap w-7 h-7 text-primary-foreground",
  );

  const pathZap = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  pathZap.setAttribute(
    "d",
    "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
  );

  svgZap.appendChild(pathZap);
  grid1Icon.appendChild(svgZap);

  const grid1Title = document.createElement("h3");
  grid1Title.className = "text-xl font-heading font-bold text-foreground mb-3";
  grid1Title.textContent = "Recebimento Imediato";
  grid1.appendChild(grid1Title);

  const grid1SubTitle = document.createElement("p");
  grid1SubTitle.className = "text-muted-foreground leading-relaxed";
  grid1SubTitle.textContent =
    "Receba suas vendas na hora, direto na sua conta. Sem esperar dias para ter acesso ao seu dinheiro.";
  grid1.appendChild(grid1SubTitle);

  const grid2 = document.createElement("div");
  grid2.className =
    "group p-8 bg-card rounded-2xl shadow-card hover-lift border border-border/50";
  grid2.style.animationDelay = "0ms";
  grade.appendChild(grid2);

  const grid2Icon = document.createElement("div");
  grid2Icon.className =
    "w-14 h-14 rounded-xl gradient-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300";
  grid2.appendChild(grid2Icon);

  const svgCreditCard = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  svgCreditCard.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgCreditCard.setAttribute("width", "24");
  svgCreditCard.setAttribute("height", "24");
  svgCreditCard.setAttribute("viewBox", "0 0 24 24");
  svgCreditCard.setAttribute("fill", "none");
  svgCreditCard.setAttribute("stroke", "currentColor");
  svgCreditCard.setAttribute("stroke-width", "2");
  svgCreditCard.setAttribute("stroke-linecap", "round");
  svgCreditCard.setAttribute("stroke-linejoin", "round");
  svgCreditCard.setAttribute(
    "class",
    "lucide lucide-credit-card w-7 h-7 text-primary-foreground",
  );

  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("width", "20");
  rect.setAttribute("height", "14");
  rect.setAttribute("x", "2");
  rect.setAttribute("y", "5");
  rect.setAttribute("rx", "2");

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", "2");
  line.setAttribute("x2", "22");
  line.setAttribute("y1", "10");
  line.setAttribute("y2", "10");

  svgCreditCard.appendChild(rect);
  svgCreditCard.appendChild(line);
  grid2Icon.appendChild(svgCreditCard);

  const grid2Title = document.createElement("h3");
  grid2Title.className = "text-xl font-heading font-bold text-foreground mb-3";
  grid2Title.textContent = "Todas as Bandeiras";
  grid2.appendChild(grid2Title);

  const grid2SubTitle = document.createElement("p");
  grid2SubTitle.className = "text-muted-foreground leading-relaxed";
  grid2SubTitle.textContent =
    "Aceite Visa, Master, Elo, Amex, Hipercard e todas as principais bandeiras do mercado.";
  grid2.appendChild(grid2SubTitle);

  const grid3 = document.createElement("div");
  grid3.className =
    "group p-8 bg-card rounded-2xl shadow-card hover-lift border border-border/50";
  grid3.style.animationDelay = "0ms";
  grade.appendChild(grid3);

  const grid3Icon = document.createElement("div");
  grid3Icon.className =
    "w-14 h-14 rounded-xl gradient-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300";
  grid3.appendChild(grid3Icon);

  const svgQrCode = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  svgQrCode.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgQrCode.setAttribute("width", "24");
  svgQrCode.setAttribute("height", "24");
  svgQrCode.setAttribute("viewBox", "0 0 24 24");
  svgQrCode.setAttribute("fill", "none");
  svgQrCode.setAttribute("stroke", "currentColor");
  svgQrCode.setAttribute("stroke-width", "2");
  svgQrCode.setAttribute("stroke-linecap", "round");
  svgQrCode.setAttribute("stroke-linejoin", "round");
  svgQrCode.setAttribute(
    "class",
    "lucide lucide-qr-code w-7 h-7 text-primary-foreground",
  );

  const rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect1.setAttribute("width", "5");
  rect1.setAttribute("height", "5");
  rect1.setAttribute("x", "3");
  rect1.setAttribute("y", "3");
  rect1.setAttribute("rx", "1");

  const rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect2.setAttribute("width", "5");
  rect2.setAttribute("height", "5");
  rect2.setAttribute("x", "16");
  rect2.setAttribute("y", "3");
  rect2.setAttribute("rx", "1");

  const rect3 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect3.setAttribute("width", "5");
  rect3.setAttribute("height", "5");
  rect3.setAttribute("x", "3");
  rect3.setAttribute("y", "16");
  rect3.setAttribute("rx", "1");

  const paths = [
    "M21 16h-3a2 2 0 0 0-2 2v3",
    "M21 21v.01",
    "M12 7v3a2 2 0 0 1-2 2H7",
    "M3 12h.01",
    "M12 3h.01",
    "M12 16v.01",
    "M16 12h1",
    "M21 12v.01",
    "M12 21v-1",
  ];

  paths.forEach((d) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    svgQrCode.appendChild(path);
  });

  svgQrCode.appendChild(rect1);
  svgQrCode.appendChild(rect2);
  svgQrCode.appendChild(rect3);
  grid3Icon.appendChild(svgQrCode);

  const grid3Title = document.createElement("h3");
  grid3Title.className = "text-xl font-heading font-bold text-foreground mb-3";
  grid3Title.textContent = "Pix e QR Code";
  grid3.appendChild(grid3Title);

  const grid3SubTitle = document.createElement("p");
  grid3SubTitle.className = "text-muted-foreground leading-relaxed";
  grid3SubTitle.textContent =
    "Receba por Pix instantâneo e QR Code dinâmico. Mais opções para seus clientes pagarem.";
  grid3.appendChild(grid3SubTitle);

  const grid4 = document.createElement("div");
  grid4.className =
    "group p-8 bg-card rounded-2xl shadow-card hover-lift border border-border/50";
  grid4.style.animationDelay = "0ms";
  grade.appendChild(grid4);

  const grid4Icon = document.createElement("div");
  grid4Icon.className =
    "w-14 h-14 rounded-xl gradient-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300";
  grid4.appendChild(grid4Icon);

  const svgHeadphones = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  svgHeadphones.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgHeadphones.setAttribute("width", "24");
  svgHeadphones.setAttribute("height", "24");
  svgHeadphones.setAttribute("viewBox", "0 0 24 24");
  svgHeadphones.setAttribute("fill", "none");
  svgHeadphones.setAttribute("stroke", "currentColor");
  svgHeadphones.setAttribute("stroke-width", "2");
  svgHeadphones.setAttribute("stroke-linecap", "round");
  svgHeadphones.setAttribute("stroke-linejoin", "round");
  svgHeadphones.setAttribute(
    "class",
    "lucide lucide-headphones w-7 h-7 text-primary-foreground",
  );

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
  );

  svgHeadphones.appendChild(path);
  grid4Icon.appendChild(svgHeadphones);

  const grid4Title = document.createElement("h3");
  grid4Title.className = "text-xl font-heading font-bold text-foreground mb-3";
  grid4Title.textContent = "Suporte 24h";
  grid4.appendChild(grid4Title);

  const grid4SubTitle = document.createElement("p");
  grid4SubTitle.className = "text-muted-foreground leading-relaxed";
  grid4SubTitle.textContent =
    "Atendimento humanizado 24 horas por dia, 7 dias por semana. Sempre que precisar.";
  grid4.appendChild(grid4SubTitle);

  const grid5 = document.createElement("div");
  grid5.className =
    "group p-8 bg-card rounded-2xl shadow-card hover-lift border border-border/50";
  grid5.style.animationDelay = "0ms";
  grade.appendChild(grid5);

  const grid5Icon = document.createElement("div");
  grid5Icon.className =
    "w-14 h-14 rounded-xl gradient-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300";
  grid5.appendChild(grid5Icon);

  const svgShield = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  svgShield.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgShield.setAttribute("width", "24");
  svgShield.setAttribute("height", "24");
  svgShield.setAttribute("viewBox", "0 0 24 24");
  svgShield.setAttribute("fill", "none");
  svgShield.setAttribute("stroke", "currentColor");
  svgShield.setAttribute("stroke-width", "2");
  svgShield.setAttribute("stroke-linecap", "round");
  svgShield.setAttribute("stroke-linejoin", "round");
  svgShield.setAttribute(
    "class",
    "lucide lucide-shield w-7 h-7 text-primary-foreground",
  );

  const pathShield = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  pathShield.setAttribute(
    "d",
    "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  );

  svgShield.appendChild(pathShield);
  grid5Icon.appendChild(svgShield);

  const grid5Title = document.createElement("h3");
  grid5Title.className = "text-xl font-heading font-bold text-foreground mb-3";
  grid5Title.textContent = "Segurança Total";
  grid5.appendChild(grid5Title);

  const grid5SubTitle = document.createElement("p");
  grid5SubTitle.className = "text-muted-foreground leading-relaxed";
  grid5SubTitle.textContent =
    "Transações criptografadas e proteção antifraude em tempo real para seu negócio.";
  grid5.appendChild(grid5SubTitle);

  const grid6 = document.createElement("div");
  grid6.className =
    "group p-8 bg-card rounded-2xl shadow-card hover-lift border border-border/50";
  grid6.style.animationDelay = "0ms";
  grade.appendChild(grid6);

  const grid6Icon = document.createElement("div");
  grid6Icon.className =
    "w-14 h-14 rounded-xl gradient-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300";
  grid6.appendChild(grid6Icon);

  const svgTrendingUp = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );

  svgTrendingUp.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgTrendingUp.setAttribute("width", "24");
  svgTrendingUp.setAttribute("height", "24");
  svgTrendingUp.setAttribute("viewBox", "0 0 24 24");
  svgTrendingUp.setAttribute("fill", "none");
  svgTrendingUp.setAttribute("stroke", "currentColor");
  svgTrendingUp.setAttribute("stroke-width", "2");
  svgTrendingUp.setAttribute("stroke-linecap", "round");
  svgTrendingUp.setAttribute("stroke-linejoin", "round");
  svgTrendingUp.setAttribute(
    "class",
    "lucide lucide-trending-up w-7 h-7 text-primary-foreground",
  );
  const polyline1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polyline",
  );
  polyline1.setAttribute("points", "22 7 13.5 15.5 8.5 10.5 2 17");

  const polyline2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polyline",
  );
  polyline2.setAttribute("points", "16 7 22 7 22 13");

  svgTrendingUp.appendChild(polyline1);
  svgTrendingUp.appendChild(polyline2);
  grid6Icon.appendChild(svgTrendingUp);

  const grid6Title = document.createElement("h3");
  grid6Title.className = "text-xl font-heading font-bold text-foreground mb-3";
  grid6Title.textContent = "Taxas Competitivas";
  grid6.appendChild(grid6Title);

  const grid6SubTitle = document.createElement("p");
  grid6SubTitle.className = "text-muted-foreground leading-relaxed";
  grid6SubTitle.textContent =
    "As melhores taxas do mercado para você aumentar sua margem de lucro.";
  grid6.appendChild(grid6SubTitle);
}

export function solucoes() {
  const screenDiv = document.getElementById("menu");
  const background = document.createElement("section");
  background.id = "solucoes";
  background.className = "py-20 lg:py-32 bg-muted/30";
  screenDiv.appendChild(background);

  const container = document.createElement("div");
  container.className = "container mx-auto px-4";
  background.appendChild(container);

  const grade = document.createElement("div");
  grade.className = "grid lg:grid-cols-2 gap-16 items-center";
  container.appendChild(grade);

  const leftGrid = document.createElement("div");
  leftGrid.className = "relative w-8\/10 order-2 lg:order-1 min-w-0";
  grade.appendChild(leftGrid);

  const leftGridShadow = document.createElement("div");
  leftGridShadow.classList =
    "relative rounded-3xl overflow-hidden shadow-strong max-w-full";
  leftGrid.appendChild(leftGridShadow);

  const image = document.createElement("img");
  image.src = "./img/beneficios.png";
  image.alt = "Soluções ShopeBank";
  image.className =
    "w-full max-w-[320px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[520px] h-auto object-contain";
  leftGridShadow.appendChild(image);

  const bottomInfo = document.createElement("div");
  bottomInfo.className =
    "absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-strong border border-border/50";
  leftGrid.appendChild(bottomInfo);

  const bottomInfoTitle = document.createElement("div");
  bottomInfoTitle.className = "text-3xl font-bold text-primary";
  bottomInfoTitle.textContent = "0%";
  bottomInfo.appendChild(bottomInfoTitle);

  const bottomInfoSubTitle = document.createElement("div");
  bottomInfoSubTitle.className = "text-sm text-muted-foreground";
  bottomInfoSubTitle.textContent = "Taxa de Adesão";
  bottomInfo.appendChild(bottomInfoSubTitle);

  const rightGrid = document.createElement("div");
  rightGrid.className = "order-1 lg:order-2 space-y-8";
  grade.appendChild(rightGrid);

  const title = document.createElement("div");
  title.className =
    "inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground";
  title.textContent = "Nossas Soluções";
  rightGrid.appendChild(title);

  const titulo = document.createElement("h2");
  titulo.className =
    "text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight";
  titulo.textContent = "Tudo que você precisa para";
  rightGrid.appendChild(titulo);

  const titulo2 = document.createElement("span");
  titulo2.className = "text-gradient-orange";
  titulo2.textContent = " vender mais";
  titulo.appendChild(titulo2);

  const texto = document.createElement("p");
  texto.className = "text-lg text-muted-foreground";
  texto.textContent =
    "Oferecemos um ecossistema completo de soluções financeiras para impulsionar seu negócio. Da maquininha à gestão financeira, estamos com você em cada etapa.";
  rightGrid.appendChild(texto);

  const listGrid = document.createElement("div");
  listGrid.className = "grid sm:grid-cols-2 gap-4";
  rightGrid.appendChild(listGrid);

  const grid1 = document.createElement("div");
  grid1.className = "flex items-center gap-3";
  listGrid.appendChild(grid1);

  const icone = document.createElement("div");
  icone.className =
    "w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0";
  grid1.appendChild(icone);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("class", "lucide lucide-check w-4 h-4 text-primary");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M20 6 9 17l-5-5");

  svg.appendChild(path);
  icone.appendChild(svg);

  const grid1Text = document.createElement("span");
  grid1Text.className = "text-foreground font-medium";
  grid1Text.textContent = "Maquininhas com tecnologia de ponta";
  grid1.appendChild(grid1Text);

  const grid2 = document.createElement("div");
  grid2.className = "flex items-center gap-3";
  listGrid.appendChild(grid2);

  const icone2 = document.createElement("div");
  icone2.className =
    "w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0";
  grid2.appendChild(icone2);

  const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg2.setAttribute("width", "24");
  svg2.setAttribute("height", "24");
  svg2.setAttribute("viewBox", "0 0 24 24");
  svg2.setAttribute("fill", "none");
  svg2.setAttribute("stroke", "currentColor");
  svg2.setAttribute("stroke-width", "2");
  svg2.setAttribute("stroke-linecap", "round");
  svg2.setAttribute("stroke-linejoin", "round");
  svg2.setAttribute("class", "lucide lucide-check w-4 h-4 text-primary");

  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("d", "M20 6 9 17l-5-5");

  svg2.appendChild(path2);
  icone2.appendChild(svg2);

  const grid2Text = document.createElement("span");
  grid2Text.className = "text-foreground font-medium";
  grid2Text.textContent = "Integração com sistemas de gestão";
  grid2.appendChild(grid2Text);

  const grid3 = document.createElement("div");
  grid3.className = "flex items-center gap-3";
  listGrid.appendChild(grid3);

  const icone3 = document.createElement("div");
  icone3.className =
    "w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0";
  grid3.appendChild(icone3);

  const svg3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg3.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg3.setAttribute("width", "24");
  svg3.setAttribute("height", "24");
  svg3.setAttribute("viewBox", "0 0 24 24");
  svg3.setAttribute("fill", "none");
  svg3.setAttribute("stroke", "currentColor");
  svg3.setAttribute("stroke-width", "2");
  svg3.setAttribute("stroke-linecap", "round");
  svg3.setAttribute("stroke-linejoin", "round");
  svg3.setAttribute("class", "lucide lucide-check w-4 h-4 text-primary");

  const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute("d", "M20 6 9 17l-5-5");

  svg3.appendChild(path3);
  icone3.appendChild(svg3);

  const grid3Text = document.createElement("span");
  grid3Text.className = "text-foreground font-medium";
  grid3Text.textContent = "Dashboard completo de vendas";
  grid3.appendChild(grid3Text);

  const grid4 = document.createElement("div");
  grid4.className = "flex items-center gap-3";
  listGrid.appendChild(grid4);

  const icone4 = document.createElement("div");
  icone4.className =
    "w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0";
  grid4.appendChild(icone4);

  const svg4 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg4.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg4.setAttribute("width", "24");
  svg4.setAttribute("height", "24");
  svg4.setAttribute("viewBox", "0 0 24 24");
  svg4.setAttribute("fill", "none");
  svg4.setAttribute("stroke", "currentColor");
  svg4.setAttribute("stroke-width", "2");
  svg4.setAttribute("stroke-linecap", "round");
  svg4.setAttribute("stroke-linejoin", "round");
  svg4.setAttribute("class", "lucide lucide-check w-4 h-4 text-primary");

  const path4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path4.setAttribute("d", "M20 6 9 17l-5-5");

  svg4.appendChild(path4);
  icone4.appendChild(svg4);

  const grid4Text = document.createElement("span");
  grid4Text.className = "text-foreground font-medium";
  grid4Text.textContent = "Relatórios detalhados em tempo real";
  grid4.appendChild(grid4Text);

  const grid5 = document.createElement("div");
  grid5.className = "flex items-center gap-3";
  listGrid.appendChild(grid5);

  const icone5 = document.createElement("div");
  icone5.className =
    "w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0";
  grid5.appendChild(icone5);

  const svg5 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg5.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg5.setAttribute("width", "24");
  svg5.setAttribute("height", "24");
  svg5.setAttribute("viewBox", "0 0 24 24");
  svg5.setAttribute("fill", "none");
  svg5.setAttribute("stroke", "currentColor");
  svg5.setAttribute("stroke-width", "2");
  svg5.setAttribute("stroke-linecap", "round");
  svg5.setAttribute("stroke-linejoin", "round");
  svg5.setAttribute("class", "lucide lucide-check w-4 h-4 text-primary");

  const path5 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path5.setAttribute("d", "M20 6 9 17l-5-5");

  svg5.appendChild(path5);
  icone5.appendChild(svg5);

  const grid5Text = document.createElement("span");
  grid5Text.className = "text-foreground font-medium";
  grid5Text.textContent = "Antecipação de recebíveis";
  grid5.appendChild(grid5Text);

  const grid6 = document.createElement("div");
  grid6.className = "flex items-center gap-3";
  listGrid.appendChild(grid6);

  const icone6 = document.createElement("div");
  icone6.className =
    "w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0";
  grid6.appendChild(icone6);

  const svg6 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg6.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg6.setAttribute("width", "24");
  svg6.setAttribute("height", "24");
  svg6.setAttribute("viewBox", "0 0 24 24");
  svg6.setAttribute("fill", "none");
  svg6.setAttribute("stroke", "currentColor");
  svg6.setAttribute("stroke-width", "2");
  svg6.setAttribute("stroke-linecap", "round");
  svg6.setAttribute("stroke-linejoin", "round");
  svg6.setAttribute("class", "lucide lucide-check w-4 h-4 text-primary");

  const path6 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path6.setAttribute("d", "M20 6 9 17l-5-5");

  svg6.appendChild(path6);
  icone6.appendChild(svg6);

  const grid6Text = document.createElement("span");
  grid6Text.className = "text-foreground font-medium";
  grid6Text.textContent = "Conta digital gratuita";
  grid6.appendChild(grid6Text);

  const botoes = document.createElement("div");
  botoes.className = "flex flex-wrap gap-4 pt-4";
  rightGrid.appendChild(botoes);

  const botaoEsq = document.createElement("button");
  botaoEsq.className =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-soft hover:shadow-medium hover:brightness-110 active:scale-[0.98] h-12 rounded-lg px-8 text-base group";
  botaoEsq.textContent = "Conhecer Soluções";
  botaoEsq.addEventListener("click", () => {
    document
      .getElementById("maquininha")
      ?.scrollIntoView({ behavior: "smooth" });
  });
  botoes.appendChild(botaoEsq);

  const svgArrow = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  svgArrow.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgArrow.setAttribute("width", "24");
  svgArrow.setAttribute("height", "24");
  svgArrow.setAttribute("viewBox", "0 0 24 24");
  svgArrow.setAttribute("fill", "none");
  svgArrow.setAttribute("stroke", "currentColor");
  svgArrow.setAttribute("stroke-width", "2");
  svgArrow.setAttribute("stroke-linecap", "round");
  svgArrow.setAttribute("stroke-linejoin", "round");
  svgArrow.setAttribute(
    "class",
    "lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform",
  );

  const pathArrow = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  pathArrow.setAttribute("d", "M5 12h14");

  const pathArrow2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  pathArrow2.setAttribute("d", "m12 5 7 7-7 7");

  svgArrow.appendChild(pathArrow);
  svgArrow.appendChild(pathArrow2);
  botaoEsq.appendChild(svgArrow);

  const botaoDir = document.createElement("button");
  botaoDir.className =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground h-12 rounded-lg px-8 text-base";
  botaoDir.textContent = "Falar com Especialista";
  botoes.appendChild(botaoDir);

  document.addEventListener("DOMContentLoaded", () => {
    botaoDir.addEventListener("click", () => {
      document
        .getElementById("suporte")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

export function sobre() {
  const screenDiv = document.getElementById("menu");
  const background = document.createElement("section");
  background.id = "sobre";
  background.className =
    "py-20 lg:py-32 gradient-navy text-secondary-foreground relative overflow-hidden";
  screenDiv.appendChild(background);

  const detail = document.createElement("div");
  detail.className =
    "absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl";
  background.appendChild(detail);

  const detail2 = document.createElement("div");
  detail2.className =
    "absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-2xl";
  background.appendChild(detail2);

  const container = document.createElement("div");
  container.className = "container mx-auto px-4 relative z-10";
  background.appendChild(container);

  const grade = document.createElement("div");
  grade.className = "grid lg:grid-cols-2 gap-16 items-center";
  container.appendChild(grade);

  const leftGrid = document.createElement("div");
  leftGrid.className = "space-y-8";
  grade.appendChild(leftGrid);

  const title = document.createElement("div");
  title.className =
    "inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-sm font-medium text-primary-foreground";
  title.textContent = "Sobre a ShopeBank";
  leftGrid.appendChild(title);

  const texto = document.createElement("h2");
  texto.className =
    "text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight";
  texto.textContent = "Banco digital que entende o";
  leftGrid.appendChild(texto);

  const texto2 = document.createElement("span");
  texto2.className = "text-primary";
  texto2.textContent = " varejista";
  texto.appendChild(texto2);

  const paragrafo = document.createElement("p");
  paragrafo.className = "text-lg text-secondary-foreground/80 leading-relaxed";
  paragrafo.textContent =
    "Nascemos da necessidade de oferecer soluções de pagamento modernas, ágeis e acessíveis para o varejo brasileiro. Combinamos tecnologia de ponta com atendimento humanizado para garantir que seu negócio nunca pare.";
  leftGrid.appendChild(paragrafo);

  const paragrafo2 = document.createElement("p");
  paragrafo2.className = "text-lg text-secondary-foreground/80 leading-relaxed";
  paragrafo2.textContent =
    "Nossa missão é democratizar o acesso a serviços financeiros de qualidade, oferecendo as melhores taxas do mercado sem abrir mão da excelência no atendimento e na segurança das transações.";
  leftGrid.appendChild(paragrafo2);

  const infoGrid = document.createElement("div");
  infoGrid.className = "grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8";
  leftGrid.appendChild(infoGrid);

  const content = document.createElement("div");
  content.className = "text-center";
  infoGrid.appendChild(content);

  const icone = document.createElement("div");
  icone.className =
    "w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3";
  content.appendChild(icone);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("class", "lucide lucide-users w-6 h-6 text-primary");

  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("d", "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2");

  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  circle.setAttribute("cx", "9");
  circle.setAttribute("cy", "7");
  circle.setAttribute("r", "4");

  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("d", "M22 21v-2a4 4 0 0 0-3-3.87");

  const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute("d", "M16 3.13a4 4 0 0 1 0 7.75");

  svg.append(path1, circle, path2, path3);
  icone.appendChild(svg);

  const infoText = document.createElement("div");
  infoText.className = "text-2xl font-bold text-primary-foreground";
  infoText.textContent = "+50.000";
  content.appendChild(infoText);

  const infoSubText = document.createElement("div");
  infoSubText.className = "text-sm text-secondary-foreground/70";
  infoSubText.textContent = "Clientes ativos";
  content.appendChild(infoSubText);

  const content2 = document.createElement("div");
  content2.className = "text-center";
  infoGrid.appendChild(content2);

  const icone2 = document.createElement("div");
  icone2.className =
    "w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3";
  content2.appendChild(icone2);

  const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg2.setAttribute("width", "24");
  svg2.setAttribute("height", "24");
  svg2.setAttribute("viewBox", "0 0 24 24");
  svg2.setAttribute("fill", "none");
  svg2.setAttribute("stroke", "currentColor");
  svg2.setAttribute("stroke-width", "2");
  svg2.setAttribute("stroke-linecap", "round");
  svg2.setAttribute("stroke-linejoin", "round");
  svg2.setAttribute("class", "lucide lucide-building2 w-6 h-6 text-primary");

  const paths = document.createElementNS("http://www.w3.org/2000/svg", "path");
  paths.setAttribute(
    "d",
    "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2 M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2 M10 6h4 M10 10h4 M10 14h4 M10 18h4",
  );

  svg2.appendChild(paths);
  icone2.appendChild(svg2);

  const infoText2 = document.createElement("div");
  infoText2.className = "text-2xl font-bold text-primary-foreground";
  infoText2.textContent = "+500";
  content2.appendChild(infoText2);

  const infoSubText2 = document.createElement("div");
  infoSubText2.className = "text-sm text-secondary-foreground/70";
  infoSubText2.textContent = "Cidades atendidas";
  content2.appendChild(infoSubText2);

  const icone3 = document.createElement("div");
  icone3.className = "text-center";

  const iconWrapper = document.createElement("div");
  iconWrapper.className =
    "w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3";

  const svg3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg3.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg3.setAttribute("width", "24");
  svg3.setAttribute("height", "24");
  svg3.setAttribute("viewBox", "0 0 24 24");
  svg3.setAttribute("fill", "none");
  svg3.setAttribute("stroke", "currentColor");
  svg3.setAttribute("stroke-width", "2");
  svg3.setAttribute("stroke-linecap", "round");
  svg3.setAttribute("stroke-linejoin", "round");
  svg3.setAttribute("class", "lucide lucide-award w-6 h-6 text-primary");

  const paths3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  paths3.setAttribute(
    "d",
    "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
  );

  const circle3 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  circle3.setAttribute("cx", "12");
  circle3.setAttribute("cy", "8");
  circle3.setAttribute("r", "6");

  svg3.appendChild(paths3);
  svg3.appendChild(circle3);
  iconWrapper.appendChild(svg3);

  const title3 = document.createElement("div");
  title3.className = "text-2xl font-bold text-primary-foreground";
  title3.textContent = "5 anos";

  const subtitle3 = document.createElement("div");
  subtitle3.className = "text-sm text-secondary-foreground/70";
  subtitle3.textContent = "No mercado";

  icone3.appendChild(iconWrapper);
  icone3.appendChild(title3);
  icone3.appendChild(subtitle3);
  infoGrid.appendChild(icone3);

  const container4 = document.createElement("div");
  container4.className = "text-center";

  const iconWrapper4 = document.createElement("div");
  iconWrapper4.className =
    "w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3";

  const svg4 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg4.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg4.setAttribute("width", "24");
  svg4.setAttribute("height", "24");
  svg4.setAttribute("viewBox", "0 0 24 24");
  svg4.setAttribute("fill", "none");
  svg4.setAttribute("stroke", "currentColor");
  svg4.setAttribute("stroke-width", "2");
  svg4.setAttribute("stroke-linecap", "round");
  svg4.setAttribute("stroke-linejoin", "round");
  svg4.setAttribute("class", "lucide lucide-shield w-6 h-6 text-primary");

  // Path
  const path4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path4.setAttribute(
    "d",
    "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  );

  svg4.appendChild(path4);
  iconWrapper4.appendChild(svg4);

  const title4 = document.createElement("div");
  title4.className = "text-2xl font-bold text-primary-foreground";
  title4.textContent = "100%";

  const subtitle4 = document.createElement("div");
  subtitle4.className = "text-sm text-secondary-foreground/70";
  subtitle4.textContent = "Seguro";

  container4.appendChild(iconWrapper4);
  container4.appendChild(title4);
  container4.appendChild(subtitle4);
  infoGrid.appendChild(container4);

  const outer = document.createElement("div");
  outer.className = "relative";

  const inner = document.createElement("div");
  inner.className = "relative rounded-3xl overflow-hidden";

  const img = document.createElement("img");
  img.src = "/img/cliente_cartao.png";
  img.alt = "Cliente ShopeBank";
  img.className = "w-full h-auto object-cover";

  inner.appendChild(img);
  outer.appendChild(inner);
  grade.appendChild(outer);
}

export function maquininha() {
  // SECTION
  const screenDiv = document.getElementById("menu");
  const section = document.createElement("section");
  section.id = "maquininha";
  section.className = "py-20 lg:py-32 bg-background";
  screenDiv.appendChild(section);

  const container = document.createElement("div");
  container.className = "container mx-auto px-4";

  const grid = document.createElement("div");
  grid.className = "grid lg:grid-cols-2 gap-16 items-center";

  const leftCol = document.createElement("div");
  leftCol.className = "space-y-8";

  const badge = document.createElement("div");
  badge.className =
    "inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground";

  const badgeSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  badgeSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  badgeSvg.setAttribute("width", "24");
  badgeSvg.setAttribute("height", "24");
  badgeSvg.setAttribute("viewBox", "0 0 24 24");
  badgeSvg.setAttribute("fill", "none");
  badgeSvg.setAttribute("stroke", "currentColor");
  badgeSvg.setAttribute("stroke-width", "2");
  badgeSvg.setAttribute("stroke-linecap", "round");
  badgeSvg.setAttribute("stroke-linejoin", "round");
  badgeSvg.setAttribute("class", "lucide lucide-credit-card w-4 h-4");

  const badgeRect = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect",
  );
  badgeRect.setAttribute("width", "20");
  badgeRect.setAttribute("height", "14");
  badgeRect.setAttribute("x", "2");
  badgeRect.setAttribute("y", "5");
  badgeRect.setAttribute("rx", "2");

  const badgeLine = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line",
  );
  badgeLine.setAttribute("x1", "2");
  badgeLine.setAttribute("x2", "22");
  badgeLine.setAttribute("y1", "10");
  badgeLine.setAttribute("y2", "10");

  badgeSvg.appendChild(badgeRect);
  badgeSvg.appendChild(badgeLine);
  badge.appendChild(badgeSvg);
  badge.appendChild(document.createTextNode("Peça sua Maquininha"));

  const title = document.createElement("h2");
  title.className =
    "text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight";
  title.innerHTML =
    'Comece a vender <span class="text-gradient-orange">hoje mesmo</span>';

  const desc = document.createElement("p");
  desc.className = "text-lg text-muted-foreground";
  desc.textContent =
    "Preencha o formulário e receba sua maquininha ShopeBank em até 3 dias úteis. Sem burocracia, sem taxa de adesão.";

  const benefits = document.createElement("div");
  benefits.className = "space-y-4";

  const benefitsText = [
    "Entrega grátis em todo Brasil",
    "Primeira mensalidade grátis",
    "Treinamento incluso",
    "Suporte técnico 24h",
  ];

  benefitsText.forEach((text) => {
    const item = document.createElement("div");
    item.className = "flex items-center gap-3";

    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    icon.setAttribute("width", "24");
    icon.setAttribute("height", "24");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("fill", "none");
    icon.setAttribute("stroke", "currentColor");
    icon.setAttribute("stroke-width", "2");
    icon.setAttribute("stroke-linecap", "round");
    icon.setAttribute("stroke-linejoin", "round");
    icon.setAttribute(
      "class",
      "lucide lucide-circle-check-big w-5 h-5 text-primary",
    );

    const p1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p1.setAttribute("d", "M21.801 10A10 10 0 1 1 17 3.335");

    const p2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p2.setAttribute("d", "m9 11 3 3L22 4");

    icon.appendChild(p1);
    icon.appendChild(p2);

    const span = document.createElement("span");
    span.className = "text-foreground font-medium";
    span.textContent = text;

    item.appendChild(icon);
    item.appendChild(span);
    benefits.appendChild(item);
  });

  const imageWrapper = document.createElement("div");
  imageWrapper.className = "hidden lg:block";

  const image = document.createElement("img");
  image.src = "/img/maquininha_fintech2.png";
  image.alt = "Maquininha ShopeBank";
  image.className = "w-full max-w-md mx-auto rounded-xl";

  imageWrapper.appendChild(image);

  leftCol.appendChild(badge);
  leftCol.appendChild(title);
  leftCol.appendChild(desc);
  leftCol.appendChild(benefits);
  leftCol.appendChild(imageWrapper);

  const rightCol = document.createElement("div");
  rightCol.className =
    "bg-card rounded-3xl p-8 shadow-strong border border-border/50";

  rightCol.innerHTML = `
<form class="space-y-6">
  <div class="space-y-2">
    <label for="nome" class="text-sm font-medium">Nome completo *</label>
    <input id="nome" name="nome" required class="h-12 w-full rounded-md border px-3 py-2">
  </div>

  <div class="grid sm:grid-cols-2 gap-4">
    <div class="space-y-2">
      <label for="email" class="text-sm font-medium">E-mail *</label>
      <input type="email" id="email" name="email" required class="h-12 w-full rounded-md border px-3 py-2">
    </div>
    <div class="space-y-2">
      <label for="telefone" class="text-sm font-medium">Telefone/WhatsApp *</label>
      <input type="tel" id="telefone" name="telefone" required class="h-12 w-full rounded-md border px-3 py-2">
    </div>
  </div>

  <div class="space-y-2">
    <label for="empresa" class="text-sm font-medium">Nome da empresa</label>
    <input id="empresa" name="empresa" class="h-12 w-full rounded-md border px-3 py-2">
  </div>

  <div class="space-y-2">
    <label for="mensagem" class="text-sm font-medium">Mensagem (opcional)</label>
    <textarea id="mensagem" name="mensagem" rows="4" class="w-full rounded-md border px-3 py-2"></textarea>
  </div>

  <button type="submit"
    class="bg-primary text-primary-foreground h-14 rounded-xl w-full font-semibold">
    Solicitar Maquininha
  </button>

  <p class="text-xs text-muted-foreground text-center">
    Ao enviar, você concorda com nossa política de privacidade.
  </p>
</form>
`;

  grid.appendChild(leftCol);
  grid.appendChild(rightCol);
  container.appendChild(grid);
  section.appendChild(container);

  const formMaquininha = rightCol.querySelector("form");
  formMaquininha.addEventListener("submit", (e) => {
    e.preventDefault(); // impede recarregar a página
    // 1) Coletar dados do form e virar objeto
    const dados = Object.fromEntries(new FormData(formMaquininha).entries());
    // 2) (Opcional) adicionar data/hora do envio
    dados.criadoEm = new Date().toISOString();
    // 3) Transformar em JSON (string)
    const json = JSON.stringify(dados, null, 2);
    // 4) (Opcional) guardar no navegador pra você consultar depois
    localStorage.setItem("pedido_maquininha", json);
    // 5) Criar um texto “bonito” pra enviar (WhatsApp/E-mail)
    const texto = [
      "Solicitação de Maquininha - ShopeBank",
      "",
      `Nome: ${dados.nome || ""}`,
      `E-mail: ${dados.email || ""}`,
      `Telefone/WhatsApp: ${dados.telefone || ""}`,
      `Empresa: ${dados.empresa || ""}`,
      "",
      "Mensagem do cliente:",
      `${dados.mensagem || "(não informou)"}`,
    ].join("\n");

    const phone = "5561993131267"; // seu número
    const urlWhats = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(texto)}`;
    window.open(urlWhats, "_blank");

    // (Opcional) limpar formulário após “enviar”
    formMaquininha.reset();
  });
}

export function visita() {
  const screenDiv = document.getElementById("menu");
  const section = document.createElement("section");
  section.id = "visita";
  section.className = "py-20 lg:py-32 bg-muted/30";
  screenDiv.appendChild(section);

  const container = document.createElement("div");
  container.className = "container mx-auto px-4";

  const wrapper = document.createElement("div");
  wrapper.className = "max-w-4xl mx-auto";

  const header = document.createElement("div");
  header.className = "text-center mb-12";

  header.innerHTML = `
  <div class="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="lucide lucide-calendar w-4 h-4">
      <path d="M8 2v4"></path>
      <path d="M16 2v4"></path>
      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
      <path d="M3 10h18"></path>
    </svg>
    Solicite uma Visita
  </div>

  <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
    Agende uma visita <span class="text-gradient-orange">gratuita</span>
  </h2>

  <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
    Nosso consultor vai até você para apresentar nossas soluções, tirar suas dúvidas
    e ajudar na configuração do equipamento.
  </p>
`;

  const card = document.createElement("div");
  card.className =
    "bg-card rounded-3xl p-8 shadow-strong border border-border/50";

  card.innerHTML = `
<form class="space-y-6">

  <div class="grid sm:grid-cols-2 gap-6">
    <div class="space-y-2">
      <label for="visit-nome" class="text-sm font-medium">Nome completo *</label>
      <input id="visit-nome" name="nome" required
        class="h-12 w-full rounded-md border px-3 py-2"
        placeholder="Seu nome">
    </div>

    <div class="space-y-2">
      <label for="visit-telefone" class="text-sm font-medium">
        Telefone/WhatsApp *
      </label>
      <input type="tel" id="visit-telefone" name="telefone" required
        class="h-12 w-full rounded-md border px-3 py-2"
        placeholder="(00) 00000-0000">
    </div>
  </div>

  <div class="space-y-2">
    <label for="endereco" class="text-sm font-medium flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-map-pin w-4 h-4">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
      Endereço completo *
    </label>
    <input id="endereco" name="endereco" required
      class="h-12 w-full rounded-md border px-3 py-2"
      placeholder="Rua, número, bairro">
  </div>

  <div class="grid sm:grid-cols-3 gap-6">
    <div class="space-y-2">
      <label for="cidade" class="text-sm font-medium">Cidade *</label>
      <input id="cidade" name="cidade" required
        class="h-12 w-full rounded-md border px-3 py-2"
        placeholder="Sua cidade">
    </div>

    <div class="space-y-2">
      <label for="dataPreferida" class="text-sm font-medium flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-calendar w-4 h-4">
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
        </svg>
        Data preferida
      </label>
      <input type="date" id="dataPreferida" name="dataPreferida"
        class="h-12 w-full rounded-md border px-3 py-2">
    </div>

    <div class="space-y-2">
      <label for="horario" class="text-sm font-medium flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-clock w-4 h-4">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        Horário
      </label>
      <select id="horario" name="horario"
        class="h-12 w-full rounded-lg border px-3 text-sm">
        <option value="">Selecione</option>
        <option value="manha">Manhã (8h–12h)</option>
        <option value="tarde">Tarde (13h–17h)</option>
        <option value="noite">Noite (18h–20h)</option>
      </select>
    </div>
  </div>

  <button type="submit"
    class="bg-primary text-primary-foreground h-14 w-full rounded-xl text-lg font-semibold flex items-center justify-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="lucide lucide-send w-5 h-5">
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
      <path d="m21.854 2.147-10.94 10.939"></path>
    </svg>
    Agendar Visita Gratuita
  </button>

</form>
`;

  wrapper.appendChild(header);
  wrapper.appendChild(card);
  container.appendChild(wrapper);
  section.appendChild(container);

  function formatarDataBR(dataISO) {
    if (!dataISO) return "";

    const [ano, mes, dia] = dataISO.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  const formAgendamento = card.querySelector("form");
  formAgendamento.addEventListener("submit", (e) => {
    e.preventDefault(); // impede recarregar a página
    // 1) Coletar dados do form e virar objeto
    const dados = Object.fromEntries(new FormData(formAgendamento).entries());
    // 2) (Opcional) adicionar data/hora do envio
    dados.criadoEm = new Date().toISOString();
    // 3) Transformar em JSON (string)
    const json = JSON.stringify(dados, null, 2);
    // 4) (Opcional) guardar no navegador pra você consultar depois
    localStorage.setItem("pedido_agendamento", json);
    // 5) Criar um texto “bonito” pra enviar (WhatsApp/E-mail)
    const texto = [
      "Agendar Visita - ShopeBank",
      "",
      `Nome: ${dados.nome || ""}`,
      `Telefone/WhatsApp: ${dados.telefone || ""}`,
      `Endereço: ${dados.endereco || ""}`,
      `Cidade: ${dados.cidade || ""}`,
      `Data: ${formatarDataBR(dados.dataPreferida)}`,
      `Horário: ${dados.horario || ""}`,
    ].join("\n");

    const phone = "5561993131267"; // seu número
    const urlWhats = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(texto)}`;
    window.open(urlWhats, "_blank");

    // (Opcional) limpar formulário após “enviar”
    formAgendamento.reset();
  });
}

export function suporte() {
  // SECTION
  const screenDiv = document.getElementById("menu");
  const section = document.createElement("section");
  section.id = "suporte";
  section.className =
    "py-20 lg:py-32 gradient-orange text-primary-foreground relative overflow-hidden";
  screenDiv.appendChild(section);

  // BACKGROUND BLURS
  const blurTop = document.createElement("div");
  blurTop.className =
    "absolute top-20 right-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl";

  const blurBottom = document.createElement("div");
  blurBottom.className =
    "absolute bottom-20 left-0 w-72 h-72 bg-primary-foreground/5 rounded-full blur-2xl";

  // CONTAINER
  const container = document.createElement("div");
  container.className = "container mx-auto px-4 relative z-10";

  /* =====================
   HEADER
===================== */
  const header = document.createElement("div");
  header.className = "text-center max-w-3xl mx-auto mb-16";

  header.innerHTML = `
  <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 rounded-full text-sm font-medium mb-6">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="lucide lucide-headphones w-4 h-4">
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
    </svg>
    Suporte e Assistência
  </div>

  <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
    Estamos aqui para ajudar
  </h2>

  <p class="text-lg text-primary-foreground/90">
    Suporte humanizado 24 horas por dia, 7 dias por semana.
    Nossa equipe está sempre pronta para atender você.
  </p>

  <div class="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-primary-foreground/20 rounded-full backdrop-blur-sm">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="lucide lucide-clock w-6 h-6">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
    <span class="text-xl font-bold">Atendimento 24 horas</span>
  </div>
`;

  /* =====================
   CARDS
===================== */
  const cards = document.createElement("div");
  cards.className = "grid md:grid-cols-3 gap-8 max-w-5xl mx-auto";

  cards.innerHTML = `
  <!-- TELEFONE -->
  <div class="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center hover-lift border border-primary-foreground/20">
    <div class="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-phone w-8 h-8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2
          19.79 19.79 0 0 1-8.63-3.07
          19.5 19.5 0 0 1-6-6
          19.79 19.79 0 0 1-3.07-8.67
          A2 2 0 0 1 4.11 2h3
          a2 2 0 0 1 2 1.72
          12.84 12.84 0 0 0 .7 2.81
          a2 2 0 0 1-.45 2.11L8.09 9.91
          a16 16 0 0 0 6 6l1.27-1.27
          a2 2 0 0 1 2.11-.45
          12.84 12.84 0 0 0 2.81.7
          A2 2 0 0 1 22 16.92z"></path>
      </svg>
    </div>
    <h3 class="text-xl font-heading font-bold mb-2">Central de Atendimento</h3>
    <p class="text-primary-foreground/80 mb-4">Ligue para nossa central</p>
    <p class="text-lg font-bold mb-6">0800 333 3334</p>
    <button class="w-full h-12 border-2 border-primary-foreground rounded-lg font-bold hover:bg-primary-foreground hover:text-primary transition">
      Ligar Agora
    </button>
  </div>

  <!-- WHATSAPP -->
  <div class="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center hover-lift border border-primary-foreground/20">
    <div class="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-message-circle w-8 h-8">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
      </svg>
    </div>
    <h3 class="text-xl font-heading font-bold mb-2">WhatsApp</h3>
    <p class="text-primary-foreground/80 mb-4">Atendimento rápido</p>
    <p class="text-lg font-bold mb-6">(61) 99313-1267</p>
    <button id="sendMessage" class="w-full h-12 border-2 border-primary-foreground rounded-lg font-bold hover:bg-primary-foreground hover:text-primary transition">
      Enviar Mensagem
    </button>
  </div>

  <!-- EMAIL -->
  <div class="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center hover-lift border border-primary-foreground/20">
    <div class="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-mail w-8 h-8">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    </div>
    <h3 class="text-xl font-heading font-bold mb-2">E-mail</h3>
    <p class="text-primary-foreground/80 mb-4">Suporte técnico</p>
    <p class="text-lg font-bold mb-6">shopebancalize@gmail.com</p>
    <button id="enviarEmail" class="w-full h-12 border-2 border-primary-foreground rounded-lg font-bold hover:bg-primary-foreground hover:text-primary transition">
      Enviar E-mail
    </button>
  </div>
`;

  /* =====================
   FOOTER
===================== */
  const footer = document.createElement("div");
  footer.className = "mt-16 text-center";
  footer.innerHTML = `
  <p class="text-primary-foreground/80 mb-4">
    Também atendemos presencialmente
  </p>
  <div class="inline-flex items-center gap-2 text-lg">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="lucide lucide-map-pin w-5 h-5">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
    <span>Mais de 500 cidades em todo o Brasil</span>
  </div>
`;

  /* =====================
   MONTAGEM FINAL
===================== */
  container.appendChild(header);
  container.appendChild(cards);
  container.appendChild(footer);

  section.appendChild(blurTop);
  section.appendChild(blurBottom);
  section.appendChild(container);

  const enviar = document.getElementById("sendMessage");
  enviar.addEventListener("click", () => {
    const phone = "5561993131267";
    const message = encodeURIComponent(
      "Olá! Gostaria de tirar alguma dúvidas.",
    );
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;

    window.open(url, "_blank");
  });

  document.addEventListener("DOMContentLoaded", () => {
    const enviar = document.getElementById("enviarEmail");

    enviar.addEventListener("click", () => {
      const email = "shopebancalize@gmail.com";
      const assunto = encodeURIComponent("Contato pelo site");
      const mensagem = encodeURIComponent("Olá! Gostaria de mais informações.");

      const url = `mailto:${email}?subject=${assunto}&body=${mensagem}`;
      window.location.href = url;
    });
  });
}
