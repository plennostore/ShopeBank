export function container() {
  const container = document.createElement("div");
  container.id = "root";
  document.body.appendChild(container);

  const region = document.createElement("div");
  region.setAttribute("role", "region");
  region.setAttribute("aria-label", "Notifications (F8)");
  region.setAttribute("tabindex", "-1");
  region.style.pointerEvents = "none";
  container.appendChild(region);

  const list = document.createElement("ol");
  list.setAttribute("tabindex", "-1");
  list.className =
    "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]";
  region.appendChild(list);

  const section = document.createElement("section");
  section.setAttribute("aria-label", "Notifications alt+T");
  section.setAttribute("tabindex", "-1");
  section.setAttribute("aria-live", "polite");
  section.setAttribute("aria-relevant", "additions text");
  section.setAttribute("aria-atomic", "false");
  container.appendChild(section);

  const ol = document.createElement("ol");
  ol.setAttribute("dir", "ltr");
  ol.setAttribute("tabindex", "-1");
  ol.className = "toaster group";
  ol.dataset.sonnerToaster = "true";
  ol.dataset.theme = "dark";
  ol.dataset.yPosition = "bottom";
  ol.dataset.lifted = "false";
  ol.dataset.xPosition = "right";
  ol.style.cssText = `
  --front-toast-height: 91.5px;
  width: 350px;
  gap: 14px;
  --offset-top: 32px;
  --offset-right: 32px;
  --offset-bottom: 32px;
  --offset-left: 32px;
  --mobile-offset-top: 16px;
  --mobile-offset-right: 16px;
  --mobile-offset-bottom: 16px;
  --mobile-offset-left: 16px;
`;
  section.appendChild(ol);

  const li = document.createElement("li");
  li.setAttribute("tabindex", "0");
  li.className =
    "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border border group-[.toaster]:shadow-lg";
  li.dataset.sonnerToast = "";
  li.dataset.styled = "true";
  li.dataset.mounted = "true";
  li.dataset.promise = "false";
  li.dataset.swiped = "false";
  li.dataset.removed = "false";
  li.dataset.visible = "true";
  li.dataset.yPosition = "bottom";
  li.dataset.xPosition = "right";
  li.dataset.index = "0";
  li.dataset.front = "true";
  li.dataset.swiping = "false";
  li.dataset.dismissible = "true";
  li.dataset.type = "success";
  li.dataset.expanded = "false";
  li.style.cssText = `
  --index: 0;
  --toasts-before: 0;
  --z-index: 1;
  --offset: 0px;
  --initial-height: 91.5px;
`;
  ol.appendChild(li);

  const icon = document.createElement("div");
  icon.setAttribute("data-icon", "");
  icon.className = "flex";
  li.appendChild(icon);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 20 20");
  svg.setAttribute("fill", "currentColor");
  svg.setAttribute("width", "20");
  svg.setAttribute("height", "20");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute(
    "d",
    "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4.5-5.5z",
  );
  path.setAttribute("clip-rule", "evenodd");

  svg.appendChild(path);
  icon.appendChild(svg);

  const content = document.createElement("div");
  content.setAttribute("data-content", "");
  content.className = "flex";
  li.appendChild(content);

  const title = document.createElement("div");
  title.setAttribute("data-title", "");
  title.textContent = "Visita agendada com sucesso!";
  content.appendChild(title);

  const description = document.createElement("div");
  description.setAttribute("data-description", "");
  description.className = "group-[.toast]:text-muted-foreground";
  description.textContent =
    "Nosso consultor entrará em contato para confirmar o agendamento.";
  content.appendChild(description);
}
