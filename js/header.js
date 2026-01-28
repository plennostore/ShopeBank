export function header() {
  // const page = document.getElementById("root");
  const screen = document.createElement("div");
  screen.id = "mainScreen";
  screen.className = "min-h-screen";
  document.body.appendChild(screen);

  const headContainer = document.createElement("header");
  headContainer.className =
    "fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50";
  screen.appendChild(headContainer);

  const container = document.createElement("div");
  container.className = "container mx-auto px-4";
  headContainer.appendChild(container);

  const itens = document.createElement("div");
  itens.className = "flex items-center justify-between h-20";
  container.appendChild(itens);

  const logoName = document.createElement("a");
  logoName.href = "#inicio";
  logoName.className = "flex items-center gap-2";
  itens.appendChild(logoName);

  const logo = document.createElement("div");
  logo.className =
    "w-10 h-10 rounded-full gradient-orange flex items-center justify-center";
  logoName.appendChild(logo);

  const imgLogo = document.createElement("img");
  imgLogo.src = "./img/logo_branco.png";
  imgLogo.style.width = "70%";
  imgLogo.style.height = "70%";
  logo.appendChild(imgLogo);

  const name = document.createElement("span");
  name.className = "text-2xl font-heading font-bold text-foreground";
  name.textContent = "SHOPE";
  logoName.appendChild(name);

  const name2 = document.createElement("span");
  name2.className = "text-primary";
  name2.textContent = "BANK";
  name.appendChild(name2);

  const navigation = document.createElement("nav");
  navigation.className = "lg:flex items-center gap-8";
  itens.appendChild(navigation);

  const buttonInicio = document.createElement("button");
  buttonInicio.className =
    "text-foreground/80 hover:text-primary font-medium transition-colors duration-200";
  buttonInicio.textContent = "Início";
  buttonInicio.addEventListener("click", () => {
    document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" });
  });
  navigation.appendChild(buttonInicio);

  const buttonSolucoes = document.createElement("button");
  buttonSolucoes.className =
    "text-foreground/80 hover:text-primary font-medium transition-colors duration-200";
  buttonSolucoes.textContent = "Soluções";
  buttonSolucoes.addEventListener("click", () => {
    document.getElementById("solucoes")?.scrollIntoView({ behavior: "smooth" });
  });
  navigation.appendChild(buttonSolucoes);

  const buttonVantagens = document.createElement("button");
  buttonVantagens.className =
    "text-foreground/80 hover:text-primary font-medium transition-colors duration-200";
  buttonVantagens.textContent = "Vantagens";
  buttonVantagens.addEventListener("click", () => {
    document
      .getElementById("vantagens")
      ?.scrollIntoView({ behavior: "smooth" });
  });
  navigation.appendChild(buttonVantagens);

  const buttonSobreNos = document.createElement("button");
  buttonSobreNos.className =
    "text-foreground/80 hover:text-primary font-medium transition-colors duration-200";
  buttonSobreNos.textContent = "Sobre Nós";
  buttonSobreNos.addEventListener("click", () => {
    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
  });
  navigation.appendChild(buttonSobreNos);

  const buttonContato = document.createElement("button");
  buttonContato.className =
    "text-foreground/80 hover:text-primary font-medium transition-colors duration-200";
  buttonContato.textContent = "Contato";
  buttonContato.addEventListener("click", () => {
    document.getElementById("suporte")?.scrollIntoView({ behavior: "smooth" });
  });
  navigation.appendChild(buttonContato);

  const contacts = document.createElement("div");
  contacts.className = "lg:flex items-center gap-3";
  itens.appendChild(contacts);

  const suport = document.createElement("button");
  suport.className =
    "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-4 text-xs gap-2";
  contacts.appendChild(suport);

  suport.addEventListener("click", () => {
    const phone = "5561993131267";
    const message = encodeURIComponent("Olá! Preciso de ajuda.");
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;

    window.open(url, "_blank");
  });

  const phoneIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  phoneIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  phoneIcon.setAttribute("width", "24");
  phoneIcon.setAttribute("height", "24");
  phoneIcon.setAttribute("viewBox", "0 0 24 24");
  phoneIcon.setAttribute("fill", "none");
  phoneIcon.setAttribute("stroke", "currentColor");
  phoneIcon.setAttribute("stroke-width", "2");
  phoneIcon.setAttribute("stroke-linecap", "round");
  phoneIcon.setAttribute("stroke-linejoin", "round");
  phoneIcon.style.width = "1rem"; // w-4
  phoneIcon.style.height = "1rem"; // h-4
  phoneIcon.style.flexShrink = "0"; // shrink-0
  phoneIcon.style.pointerEvents = "none";

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
  );
  phoneIcon.appendChild(path);
  suport.appendChild(phoneIcon);

  const suportWord = document.createElement("div");
  suportWord.textContent = "Suporte";
  suport.appendChild(suportWord);

  const portalCliente = document.createElement("button");
  portalCliente.className =
    "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground h-9 rounded-md px-4 text-xs gap-2";
  contacts.appendChild(portalCliente);

  const userIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  userIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  userIcon.setAttribute("width", "24");
  userIcon.setAttribute("height", "24");
  userIcon.setAttribute("viewBox", "0 0 24 24");
  userIcon.setAttribute("fill", "none");
  userIcon.setAttribute("stroke", "currentColor");
  userIcon.setAttribute("stroke-width", "2");
  userIcon.setAttribute("stroke-linecap", "round");
  userIcon.setAttribute("stroke-linejoin", "round");
  userIcon.style.width = "1rem";
  userIcon.style.height = "1rem";
  userIcon.style.flexShrink = "0";
  userIcon.style.pointerEvents = "none";

  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("d", "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2");

  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  circle.setAttribute("cx", "12");
  circle.setAttribute("cy", "7");
  circle.setAttribute("r", "4");

  userIcon.appendChild(path1);
  userIcon.appendChild(circle);
  portalCliente.appendChild(userIcon);

  const portalWord = document.createElement("div");
  portalWord.textContent = "Portal do Cliente";
  portalCliente.appendChild(portalWord);

  const pecaMaquina = document.createElement("button");
  pecaMaquina.className =
    "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-soft hover:shadow-medium hover:brightness-110 active:scale-[0.98] h-9 rounded-md px-4 text-xs gap-2";
  pecaMaquina.addEventListener("click", () => {
    document
      .getElementById("maquininha")
      ?.scrollIntoView({ behavior: "smooth" });
  });
  contacts.appendChild(pecaMaquina);

  const card = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  card.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  card.setAttribute("width", "17");
  card.setAttribute("height", "17");
  card.setAttribute("viewBox", "0 0 24 24");
  card.setAttribute("fill", "none");
  card.setAttribute("stroke", "white");
  card.setAttribute("stroke-width", "2");
  card.setAttribute("stroke-linecap", "round");
  card.setAttribute("stroke-linejoin", "round");
  card.setAttribute("class", "lucide lucide-credit-card w-4 h-4");

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

  card.appendChild(rect);
  card.appendChild(line);
  pecaMaquina.appendChild(card);

  const pecaWord = document.createElement("div");
  pecaWord.textContent = "Peça sua Maquininha";
  pecaMaquina.appendChild(pecaWord);
}
