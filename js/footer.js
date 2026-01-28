export function footer() {
  const page = document.getElementById("mainScreen");
  const footer = document.createElement("footer");
  footer.id = "contato";
  footer.className = "bg-secondary text-secondary-foreground";
  footer.innerHTML = `
  <div class="container mx-auto px-4">
    <div class="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">

      <div class="lg:col-span-2 space-y-6">
        <a href="#inicio" class="flex items-center gap-2">
          <div class="w-10 h-10 rounded-full gradient-orange flex items-center justify-center">
            <span class="text-primary-foreground font-bold text-xl">
                <img src="./img/logo_branco.png" class="size-8">
                </img>
            </span>
          </div>
          <span class="text-2xl font-heading font-bold">
            SHOPE<span class="text-primary">BANK</span>
          </span>
        </a>

        <p class="text-secondary-foreground/80 max-w-sm">
          Soluções de pagamento modernas e acessíveis para varejistas e merchants de todo o Brasil.
          Aceite cartões, Pix e QR Code com as melhores taxas do mercado.
        </p>

        <div class="flex gap-4">
          <a href="https://facebook.com/shopebank" target="_blank" rel="noopener noreferrer"
             class="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
             aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook w-5 h-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>

          <a href="https://instagram.com/shopebank" target="_blank" rel="noopener noreferrer"
             class="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
             aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          </a>

          <a href="https://linkedin.com/company/shopebank" target="_blank" rel="noopener noreferrer"
             class="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
             aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>

          <a href="https://youtube.com/shopebank" target="_blank" rel="noopener noreferrer"
             class="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
             aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube w-5 h-5"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
          </a>

          <a href="https://twitter.com/shopebank" target="_blank" rel="noopener noreferrer"
             class="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
             aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
        </div>
      </div>

      <div>
        <h4 class="font-heading font-bold text-lg mb-4">Institucional</h4>
        <ul class="space-y-3">
          <li><button class="text-secondary-foreground/70 hover:text-primary">Sobre Nós</button></li>
          <li><button class="text-secondary-foreground/70 hover:text-primary">Carreiras</button></li>
          <li><button class="text-secondary-foreground/70 hover:text-primary">Imprensa</button></li>
          <li><button class="text-secondary-foreground/70 hover:text-primary">Blog</button></li>
        </ul>
      </div>

      <div>
        <h4 class="font-heading font-bold text-lg mb-4">Produtos</h4>
        <ul class="space-y-3">
          <li><button class="text-secondary-foreground/70 hover:text-primary">Maquininhas</button></li>
          <li><button class="text-secondary-foreground/70 hover:text-primary">Conta Digital</button></li>
          <li><button class="text-secondary-foreground/70 hover:text-primary">Antecipação</button></li>
          <li><button class="text-secondary-foreground/70 hover:text-primary">Gestão Financeira</button></li>
        </ul>
      </div>

      <div>
        <h4 class="font-heading font-bold text-lg mb-4">Suporte</h4>
        <ul class="space-y-3">
          <li><button class="text-secondary-foreground/70 hover:text-primary">Central de Ajuda</button></li>
          <li><button class="text-secondary-foreground/70 hover:text-primary">FAQ</button></li>
          <li><button class="text-secondary-foreground/70 hover:text-primary">Política de Privacidade</button></li>
          <li><button class="text-secondary-foreground/70 hover:text-primary">Termos de Uso</button></li>
        </ul>
      </div>

    </div>

    <div class="py-8 border-t border-secondary-foreground/10">
        <div class="flex flex-wrap justify-center gap-8 text-sm text-secondary-foreground/70">
            <a href="tel:08001234567" class="flex items-center gap-2 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-4 h-4">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                    </path>
                </svg>0800 333 3334
            </a>
            <a href="mailto:contato@shopebank.com.br" class="flex items-center gap-2 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-4 h-4">
                    <rect width="20" height="16" x="2" y="4" rx="2">
                    </rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>shopebancalize@gmail.com
            </a>
            <span class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                    </path>
                    <circle cx="12" cy="10" r="3">
                    </circle>
                </svg>Brasília, DF - Brasil
            </span>
        </div>
    </div>

    <div class="py-6 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/60">
      © 2026 ShopeBank. Todos os direitos reservados. CNPJ: 62.170.971/0001-37
    </div>
  </div>
`;

  page.appendChild(footer);
}
