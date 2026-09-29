/* Les filtres du catalogue sont regroupés ici pour garder catalogue.js lisible. */

// Retourne l'interface des filtres et du champ de recherche.
export function filtersMarkup() {
  return `
    <div class="card-surface grid gap-4 p-4 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.7fr] lg:items-end">
      <label class="block">
        <span class="form-label">Rechercher</span>
        <input id="search-input" type="search" class="input-field" placeholder="Ex. iPhone 15 Pro">
      </label>
      <label class="block">
        <span class="form-label">Gamme</span>
        <select id="family-filter" class="input-field">
          <option value="all">Toutes les gammes</option>
          <option value="12">iPhone 12</option>
          <option value="13">iPhone 13</option>
          <option value="14">iPhone 14</option>
          <option value="15">iPhone 15</option>
          <option value="16">iPhone 16</option>
          <option value="17">iPhone 17</option>
        </select>
      </label>
      <label class="block">
        <span class="form-label">Capacité</span>
        <select id="storage-filter" class="input-field">
          <option value="all">Toutes</option>
          <option value="64 Go">64 Go</option>
          <option value="128 Go">128 Go</option>
          <option value="256 Go">256 Go</option>
        </select>
      </label>
      <label class="block">
        <span class="form-label">Trier</span>
        <select id="sort-filter" class="input-field">
          <option value="default">Recommandés</option>
          <option value="low">Prix croissant</option>
          <option value="high">Prix décroissant</option>
        </select>
      </label>
    </div>
  `;
}
