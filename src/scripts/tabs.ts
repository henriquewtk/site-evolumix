// Abas acessíveis (padrão WAI-ARIA): clique, setas, Home/End.
export function initTabs(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[role="tablist"]').forEach((list) => {
    if (list.dataset.ready) return;
    list.dataset.ready = 'true';
    const tabs = Array.from(list.querySelectorAll<HTMLButtonElement>('[role="tab"]'));

    const select = (tab: HTMLButtonElement, focus = false) => {
      for (const t of tabs) {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls')!);
        if (panel) panel.hidden = !on;
      }
      if (focus) tab.focus();
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (e) => {
        const map: Record<string, number> = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
        if (!(e.key in map)) return;
        e.preventDefault();
        select(tabs[(map[e.key] + tabs.length) % tabs.length], true);
      });
    });
  });
}
